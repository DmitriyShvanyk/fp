(function () {

    'use strict';

    var querystring = window.location.search;

    // deal
    function initDeal() {
        const deal = document.querySelector('.deal');
        if (!deal) {
            console.error('Deal alert element not found');
            return;
        }

        const dealOverlay = deal.querySelector('.deal__overlay');

        function openDeal() {
            deal.classList.add('is-show');
        }

        function toggleDeal() {
            deal.classList.toggle('is-active');
        }

        openDeal();

        dealOverlay.addEventListener('click', toggleDeal);
    }


    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            initDeal();
        }, 2000);
    });

})();
