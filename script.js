//gallery popups

const modals = document.querySelectorAll('.insideCard');
const galleries = document.querySelectorAll('.gallery');
const btnCloseModals = document.querySelectorAll('.fa-x');
const openModals = document.querySelectorAll('.openModal');
const descs = document.querySelectorAll('p.desc');

openModals.forEach(function (openModal, index) {
    openModal.addEventListener('click', function (event) {
        if (!modals[index].classList.contains('transform')) {
            closeAllModals();
        }
        modals[index].classList.add('transform');
        descs[index].classList.remove('hidden');
        btnCloseModals[index].classList.remove('hidden');
        const img = event.target.closest('a');
        img.style.textAlign = 'center';
    });
});

btnCloseModals.forEach(function (btnCloseModal, index) {
    btnCloseModal.addEventListener('click', function (e) {
        closeModal(index);
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeAllModals();
    }
});

function closeModal(index) {
    modals[index].classList.remove('transform');
    btnCloseModals[index].classList.add('hidden');
    descs[index].classList.add('hidden');
}

function closeAllModals() {
    modals.forEach(function (modal, index) {
        closeModal(index);
    });
};


// contact error handling


