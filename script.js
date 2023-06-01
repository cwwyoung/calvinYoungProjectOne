const modal = document.querySelector('.insideCard');
const gallery = document.querySelector('.gallery')
const btnCloseModal = document.querySelector('.fa-x');
const openModal = document.querySelector('.openModal');
const desc = document.querySelector('p.desc');

openModal.addEventListener('click', function (event) {
    modal.classList.add('transform');
    desc.classList.remove('hidden')
    btnCloseModal.classList.remove('hidden')
    const img = event.target.closest('a');
    img.style.textAlign = 'center';

})

btnCloseModal.addEventListener('click', function (e) {
    modal.classList.remove('transform');
    btnCloseModal.classList.add('hidden');
    desc.classList.add('hidden');
    console.log(desc)
})