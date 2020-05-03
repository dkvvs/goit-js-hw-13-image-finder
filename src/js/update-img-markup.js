import formTpl from '../templates/form-search.hbs';
import spinTpl from '../templates/spin.hbs';
import imgTpl from '../templates/photo-card.hbs';
import refs from '../js/refs';

refs.searchForm.insertAdjacentHTML('beforeend', formTpl());
refs.spinner.insertAdjacentHTML('beforeend', spinTpl());

function updateImgMarkup(hits) {
  const markup = imgTpl(hits);
  refs.containerImg.insertAdjacentHTML('beforeend', markup);
}

export default updateImgMarkup;
