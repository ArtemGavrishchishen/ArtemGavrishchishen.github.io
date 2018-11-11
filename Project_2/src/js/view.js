import template from "./../templates/card.hbs";

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

  init(data) {
    const markup = data.reduce((acc, item) => {
      return acc + this.createCard(item);
    }, '');
    this.refs.cards.innerHTML = markup;
  }

  createCard(item) {
    const markup = template(item);
    return markup;
  }

}