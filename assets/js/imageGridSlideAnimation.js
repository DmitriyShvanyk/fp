(function () {

    'use strict';

    function initCanvas(canvasId, imagePath) {

        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Image settings
        const image = new Image();
        image.src = imagePath;

        image.onload = function () {
            const imgWidth = image.width;
            const imgHeight = image.height;

            // Set canvas dimensions to half the image size
            canvas.width = imgWidth / 2;
            canvas.height = imgHeight / 2;

            ctx.imageSmoothingEnabled = true;

            // Grid settings
            const cols = 4; // Number of columns
            const rows = 7; // Number of rows

            const gridSizeX = Math.ceil((imgWidth / cols) / 2);
            const gridSizeY = Math.ceil((imgHeight / rows) / 2);

            let pieces = [];

            // Create pieces
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    pieces.push({
                        sx: i * (imgWidth / cols),
                        sy: j * (imgHeight / rows),
                        finalX: i * gridSizeX, // Final x position (half size)
                        finalY: j * gridSizeY, // Final y position (half size)
                        order: i + j * cols // Order in which pieces will animate
                    });
                }
            }

            // Define animation order and offsets (same logic)
            const animationOrder = [
                // Left to right
                0, 7, 10, 13, 16, 23, 26,
                // Bottom to top
                1, 6, 11, 12, 17, 20, 27,
                // Right to left
                2, 5, 8, 15, 18, 21, 24,
                // Top to bottom
                3, 4, 9, 14, 19, 22, 25
            ];

            pieces.forEach((piece, index) => {
                const offset = 0;

                const animationIndex = animationOrder[index];
                const targetPiece = pieces[animationIndex]; // Get the target piece by animation order

                // Ensure the target piece exists
                if (targetPiece) {
                    piece.dx = targetPiece.finalX + offset; // Starting x position with offset
                    piece.dy = targetPiece.finalY + offset; // Starting y position with offset
                }
            });

            // Animation
            let progress = 0;

            function animate() {
                progress += 0.015; // Adjust speed here
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                pieces.forEach(piece => {
                    // Sliding effect for each section
                    let x = piece.dx + (piece.finalX - piece.dx) * easeInOutQuad(progress);
                    let y = piece.dy + (piece.finalY - piece.dy) * easeInOutQuad(progress);

                    // Draw the full-sized image, but scale it down on the canvas
                    ctx.drawImage(image, piece.sx, piece.sy, imgWidth/cols, imgHeight/rows, x, y, gridSizeX, gridSizeY);
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            // Easing function for smooth animation
            function easeInOutQuad(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }

            // Function to start the animation
            function startAnimation() {
                if (progress === 0) { // Ensure the animation only starts once
                    animate();
                }
            }

            // Intersection Observer to detect visibility
            function observeCanvas() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            startAnimation(); // Trigger animation when the canvas is visible
                        }
                    });
                }, {
                    threshold: 0.5
                }); // Trigger when 50% of the canvas is visible

                observer.observe(canvas); // Start observing the canvas
            }

            // Start observing
            observeCanvas();
        };

    }

    window.addEventListener('load', ()=> {
        // page home
        initCanvas('mediaHome1', '/images/features/home-1.png');
        initCanvas('mediaHome2', '/images/features/home-2.png');
        initCanvas('mediaHome3', '/images/features/home-3.png');

        // page charity
        initCanvas('mediaCharity1', '/images/features/charity-1.png');
        initCanvas('mediaCharity2', '/images/features/charity-2.png');

        // page privacy
        initCanvas('mediaPrivacy', '/images/features/privacy.png');

        // page money back
        initCanvas('mediaMoneyBack', '/images/features/money-back.png');

        // page shipping
        initCanvas('mediaShipping1', '/images/features/shipping-1.png');
        initCanvas('mediaShipping2', '/images/features/shipping-2.png');
        initCanvas('mediaShipping3', '/images/features/shipping-3.png');
    });

})();
