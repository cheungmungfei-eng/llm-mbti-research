// Image Zoom Functionality
document.addEventListener('DOMContentLoaded', function() {
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');
    const zoomClose = document.querySelector('.zoom-close');
    
    // Get all figure images
    const figureImages = document.querySelectorAll('.figure-image img');
    
    // Add click listener to each figure image
    figureImages.forEach(img => {
        img.addEventListener('click', function() {
            zoomModal.classList.add('active');
            zoomImage.src = this.src;
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close zoom when X is clicked
    if (zoomClose) {
        zoomClose.addEventListener('click', function() {
            zoomModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close zoom when modal background is clicked
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            zoomModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close zoom on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            zoomModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
