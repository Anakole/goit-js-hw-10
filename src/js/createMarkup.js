export function createPrewiewMarkup(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `<li class = 'country-list-item'>
    <img class ="country-list-img" src="${flags.svg}" alt = "${name.official}" width = "30"/>
    <p class = 'country-list-text'>${name.official}</p>
    </li>`;
    })
    .join('');
  const refs = getRefs();
  refs.countryList.innerHTML = markup;
}

export function createMarkup(countries) {
  const markup = countries
    .map(({ name, capital, population, flags, languages }) => {
      return `
      <div class = "country-info-wrapper">
      <div class = 'country-info-list'>
      <img class ="country-list-img" src=" ${flags.svg}" alt = "${
        name.official
      }" width = "30"/>
    <h2 class ="country-title"> ${name.common}</h2></div>
    <ul><li>
    <p class = "coutry-info-text"><b>Capital:</b> ${capital}</p></li>
    <li><p class = "coutry-info-text"><b>Population:</b> ${population}</p></li>
    <li><p class = "coutry-info-text"><b>Languages:</b> ${Object.values(
      languages
    )}</p></li>
    </ul></div>`;
    })
    .join('');
  const refs = getRefs();
  refs.countryInfo.innerHTML = markup;
}

export function resetMarkup() {
  const refs = getRefs();
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function getRefs() {
  return {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
  };
}
