// selecting items
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-overlay');

openModal.addEventListener('click', function() {
    modal.classList.add('show-modal');
})
closeModal.addEventListener('click', function() {
    modal.classList.remove('show-modal');
})