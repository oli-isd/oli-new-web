/**
 * Email Service - Handles all email-related API calls
 * Supports multiple contact forms with validation and error logging
 */

export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  recipient_email: string;
  date: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  errorCode?: string;
  details?: string;
}

class EmailService {
  private apiUrl: string;
  private requestTimeout: number = 30000; // 30 seconds

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL || '';
    if (!this.apiUrl) {
      console.warn('VITE_API_URL is not set in .env file');
    }
  }

  /**
   * Validates email payload before sending
   */
  private validatePayload(payload: EmailPayload): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!payload.name?.trim()) errors.push('Name is required');
    if (!payload.email?.trim()) errors.push('Email is required');
    if (payload.email && !this.isValidEmail(payload.email)) errors.push('Invalid email format');
    if (!payload.phone?.trim()) errors.push('Phone is required');
    if (!payload.topic?.trim()) errors.push('Topic is required');
    if (!payload.message?.trim()) errors.push('Message is required');
    if (!payload.recipient_email?.trim()) errors.push('Recipient email is required');

    return { valid: errors.length === 0, errors };
  }

  /**
   * Basic email validation
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Logs errors for debugging
   */
  private logError(context: string, error: any): void {
    const timestamp = new Date().toISOString();
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    console.error(`[${timestamp}] [EmailService] ${context}:`, errorMessage);
  }

  /**
   * Sends an email via the backend API
   */
  async sendEmail(payload: EmailPayload): Promise<EmailResponse> {
    try {
      // Validate payload
      const validation = this.validatePayload(payload);
      if (!validation.valid) {
        const errorMsg = validation.errors.join(', ');
        this.logError('Validation failed', errorMsg);
        return {
          success: false,
          message: 'Validation failed',
          errorCode: 'VALIDATION_ERROR',
          details: errorMsg
        };
      }

      // Check if API URL is configured
      if (!this.apiUrl) {
        this.logError('Send email', 'API URL not configured');
        return {
          success: false,
          message: 'Email service is not configured',
          errorCode: 'CONFIG_ERROR',
          details: 'VITE_API_URL is not set'
        };
      }

      // Make API request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.requestTimeout);

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Check response status
      if (!response.ok) {
        const errorText = await response.text();
        this.logError(`API returned ${response.status}`, errorText);
        
        let details = errorText;
        try {
          const errorJson = JSON.parse(errorText);
          details = errorJson.message || errorJson.details || errorText;
        } catch (e) {
          // Keep original error text if not JSON
        }

        return {
          success: false,
          message: `Failed to send email (${response.status})`,
          errorCode: `HTTP_${response.status}`,
          details
        };
      }

      // Parse successful response
      const data = await response.json();
      return {
        success: true,
        message: data.message || 'Email sent successfully',
        ...data
      };

    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        this.logError('Send email', 'Request timeout');
        return {
          success: false,
          message: 'Request timeout - email service is not responding',
          errorCode: 'TIMEOUT_ERROR',
          details: `Request exceeded ${this.requestTimeout}ms`
        };
      }

      this.logError('Send email', error);
      return {
        success: false,
        message: 'An error occurred while sending the email',
        errorCode: 'UNKNOWN_ERROR',
        details: error instanceof Error ? error.message : String(error)
      };
    }
  }

  /**
   * Sends a batch of emails (useful for notifications)
   */
  async sendBatchEmails(payloads: EmailPayload[]): Promise<EmailResponse[]> {
    return Promise.all(payloads.map(payload => this.sendEmail(payload)));
  }

  /**
   * Utility to format date for emails
   */
  static formatEmailDate(): string {
    return new Date().toLocaleString('en-PH', { dateStyle: 'long', timeStyle: 'short' });
  }
}

export default new EmailService();
