import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCounties.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  createMarkup,
  createPrewiewMarkup,
  resetMarkup,
} from './js/createMarkup';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');

const notifyOptions = {
  position: 'center-top',
  backOverlay: true,
  clickToClose: true,
};

inputRef.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
  resetMarkup();

  const country = event.target.value.trim();

  if (country === '') {
    return;
  }

  fetchCountries(country).then(onSuccess).catch(onError);
}

function onError() {
  Notify.failure('Oops, there is no country with that name', notifyOptions);
}

function onSuccess(data) {
  if (data.length > 10) {
    Notify.info(
      'Too many matches found. Please enter a more specific name.',
      notifyOptions
    );
    return;
  } else if (data.length === 1) {
    createMarkup(data);
  } else {
    createPrewiewMarkup(data);
  }
}
