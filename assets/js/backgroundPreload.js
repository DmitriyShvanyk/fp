(function () {
    'use strict';

    const images = document.querySelectorAll('.media__pict-bg');
    if (!images) return;

    const imageCache = {};

    // Iterate through each element with a background image
    images.forEach((elem) => {
        const backgroundImage = getComputedStyle(elem).backgroundImage;
        console.log('Background image:', backgroundImage);

        const urlMatch = backgroundImage.match(/url\((['"])?(.*?)\1\)/);
        const imageUrl = urlMatch ? urlMatch[2] : null;

        console.log('Extracted URL:', imageUrl);

        if (imageUrl) {
            // Check if the image is already loaded and cached
            if (imageCache[imageUrl]) {
                const parent = elem.closest('.media__pict');
                console.log('Parent found (cached):', parent);
                if (parent) {
                    parent.classList.add('is-loaded');
                }
            } else {
                // Create a new image to upload and cache
                const img = new Image();
                img.onload = () => {
                    console.log('Image loaded:', imageUrl);
                    const parent = elem.closest('.media__pict');
                    console.log('Parent found (loaded):', parent);
                    if (parent) {
                        parent.classList.add('is-loaded');
                    }
                    imageCache[imageUrl] = true; // Cache the loaded image
                };
                img.src = imageUrl;
            }
        }
    });

})();
