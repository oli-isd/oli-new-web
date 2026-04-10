import emailjs from '@emailjs/browser';

// Email configuration interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  recipient_email: string;
  date: string;
}

// Initialize EmailJS
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Initialize on module load
initEmailJS();

/**
 * Send contact form email to customer (confirmation)
 * Uses OLI-Mail template
 */
const sendCustomerEmail = async (formData: ContactFormData) => {
  if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
    console.warn('EmailJS service not configured - customer email skipped');
    return null;
  }

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_CUSTOMER || 'template_customer',
      {
        to_email: formData.email,
        to_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
        date: formData.date
      }
    );
    console.log('Customer email sent:', response.status);
    return response;
  } catch (error) {
    console.error('Error sending customer email:', error);
    throw error;
  }
};

/**
 * Send contact form email to internal team (notification)
 * Uses OLI-Recipient template
 */
const sendInternalEmail = async (formData: ContactFormData) => {
  if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
    console.warn('EmailJS service not configured - internal email skipped');
    return null;
  }

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_RECIPIENT || 'template_recipient',
      {
        to_email: formData.recipient_email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
        date: formData.date
      }
    );
    console.log('Internal email sent:', response.status);
    return response;
  } catch (error) {
    console.error('Error sending internal email:', error);
    throw error;
  }
};

/**
 * Send both customer and internal emails
 * This is the main function to call from components
 */
export const sendContactEmails = async (formData: ContactFormData) => {
  const results = {
    customerEmail: null as any,
    internalEmail: null as any,
    success: false
  };

  try {
    // Send customer confirmation email
    results.customerEmail = await sendCustomerEmail(formData);

    // Send internal notification email
    results.internalEmail = await sendInternalEmail(formData);

    results.success = true;
    return results;
  } catch (error) {
    console.error('Error in sendContactEmails:', error);
    throw error;
  }
};

export const emailService = {
  sendCustomerEmail,
  sendInternalEmail,
  sendContactEmails
};
