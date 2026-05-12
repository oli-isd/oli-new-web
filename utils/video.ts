
/**
 * Converts various video URLs (YouTube, Facebook) to their respective embed URLs.
 */
export function getEmbedUrl(url: string) {
    if (!url) return null;
    
    // YouTube
    if (url.includes('youtube.com/shorts/')) {
        return url.replace('youtube.com/shorts/', 'youtube.com/embed/');
    }
    if (url.includes('youtube.com/watch?v=')) {
        return url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
    }
    if (url.includes('youtu.be/')) {
        return url.replace('youtu.be/', 'youtube.com/embed/');
    }
    
    // Facebook
    if (url.includes('facebook.com')) {
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500`;
    }
    
    return null;
}
