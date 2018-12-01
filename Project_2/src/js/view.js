import templateCard from './../templates/card.hbs';
import templateFilter from './../templates/filter.hbs';

export default class View {
  constructor() {
    this.refs = {};

    this.refs.headerFilterLink = document.querySelector('.header__filter');
    this.refs.cardFilter = document.querySelector('.card__filter');
    this.refs.cards = document.querySelector('.card__list');
  }

  toggleCardFilter() {
    this.refs.headerFilterLink.classList.toggle('header__filter--active');
    this.refs.cardFilter.classList.toggle('card__filter--active');
  }

  init(data, dataFilter) {
    const markupCard = data.reduce((acc, item) => {
      return acc + this.createCard(item);
    }, '');

    const markupFilter = this.createFilter(dataFilter);

    this.refs.cards.innerHTML = markupCard;
    this.refs.cardFilter.insertAdjacentHTML('afterbegin', markupFilter);
  }

  createCard(item) {
    const markup = templateCard(item);
    return markup;
  }

  createFilter(item) {
    const markup = templateFilter(item);
    return markup;
  }
}
