(function () {
    'use strict';

    let hasAnimated = false;
    let counterVisible = false;
    let peoplesVisible = false;

    function updateImage(imgClass) {
        const img = document.querySelector(imgClass);
        if (!img) return;

        img.src = img.src.split('?')[0] + '?t=' + new Date().getTime();
    }

    function initCounter() {
        const counterElem = document.querySelector('.problem__circle-text');
        if (!counterElem) return;

        let start = 0;
        const end = 52;
        const duration = 2450;
        const incrementTime = 50;
        const totalSteps = duration / incrementTime;
        const increment = end / totalSteps;

        const intervalId = setInterval(() => {
            start += increment;

            if (start >= end) {
                start = end;
                clearInterval(intervalId);
            }

            counterElem.textContent = Math.round(start) + '%';
        }, incrementTime);
    }

    function handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('problem__pict--counter')) {
                    counterVisible = true;
                } else if (entry.target.classList.contains('problem__pict--peoples')) {
                    peoplesVisible = true;
                }
            } else {
                if (entry.target.classList.contains('problem__pict--counter')) {
                    counterVisible = false;
                } else if (entry.target.classList.contains('problem__pict--peoples')) {
                    peoplesVisible = false;
                }
            }

            if (counterVisible && peoplesVisible && !hasAnimated) {
                hasAnimated = true;
                updateImage('.problem__circle-lines');
                updateImage('.problem__circle-peoples');
                initCounter();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: .5
    });

    const targetCounter = document.querySelector('.problem__pict--counter');
    if (targetCounter) {
        observer.observe(targetCounter);
    }

    const targetPeoples = document.querySelector('.problem__pict--peoples');
    if (targetPeoples) {
        observer.observe(targetPeoples);
    }

})();
