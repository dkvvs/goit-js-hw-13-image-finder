import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateImgMarkup from './js/update-img-markup';
import * as basicLightbox from 'basiclightbox';

document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.containerImg.innerHTML = '';

  apiService.resetPage();

  service();

  form.reset();
});

refs.loadMoreBtn.addEventListener('click', service);

function service() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  apiService
    .service()
    .then(hits => {
      updateImgMarkup(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');

      const imgModal = document.querySelectorAll('.click-photo');

      imgModal.forEach(function (photoItem) {
        photoItem.addEventListener('click', function (event) {
          const largeImage = event.target.dataset.atribute;
          onImgClick(largeImage);
        });
      });

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}

function onImgClick(imageSrc) {
  const instance = basicLightbox.create(`
  <img src="${imageSrc}" >
  `);

  instance.show();
}
