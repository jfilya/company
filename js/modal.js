const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModel = () => {
    modal.classList.remove('active');
};

overlay.addEventListener('click', closeModel);


const search = document.getElementById('search-open');
const modalSearch = document.getElementById('modal-search');

const overlaySearch = document.getElementById('overlay-search');

search.addEventListener('click', () => {
    modalSearch.classList.add('active');
});

const closeModel1 = () => {
    modalSearch.classList.remove('active');
};

overlaySearch.addEventListener('click', closeModel1);
