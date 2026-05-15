(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        const benefitsBlock = document.querySelector('.benefits');

        if (benefitsBlock) {
            const observer = new IntersectionObserver((entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        observerInstance.unobserve(entry.target);
                        loadIcons();
                    }
                });
            }, {
                threshold: 0.2,
                once: true
            });

            observer.observe(benefitsBlock);
        }
    });

    function loadIcons() {
        const icons = document.querySelectorAll('[id^="i-"]');

        icons.forEach((container) => {
            const svgPath = container.getAttribute('data-svg');

            if (svgPath && !container.classList.contains('is-loaded-once')) {
                setTimeout(() => {
                    fetch(svgPath)
                        .then(response => response.text())
                        .then(svgContent => {
                            if (container) {
                                container.innerHTML = svgContent;
                                container.classList.add('is-loaded', 'is-loaded-once');
                                initBenefits(container);
                            } else {
                                console.error(`Element with id ${container.id} not found`);
                            }
                        })
                        .catch(err => console.error("Error loading SVG:", err));
                }, 1000);
            }
        });
    }

    function initBenefits(container) {
        const paths = container.querySelectorAll('svg path');
        if (paths.length) {
            animateSvg(paths);
        }
    }

    function animateSvg(paths) {
        anime({
            targets: paths,
            duration: 700,
            delay: 400,
            easing: 'easeInOutExpo',
            strokeDashoffset: [anime.setDashoffset, 0]
        });
    }

})();
