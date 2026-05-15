(function() {

    'use strict';

    const modal = document.querySelector('.fp-modal')
    if (!modal) return;
    const modalOverlay = modal.querySelector('.fp-modal__overlay')
    const modalClose = modal.querySelector('.fp-modal__close')

    function openModal(event) {
        const button = event.target.closest('[data-modal]');
        if (!button) return;

        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add('is-active');
        }
    }

    function closeModal() {
        modal.classList.remove('is-active');
    }
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);


    const buttons = document.querySelectorAll('[data-modal]');

    buttons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    const modals = document.querySelectorAll('.fp-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', closeModal);
    });

})();
