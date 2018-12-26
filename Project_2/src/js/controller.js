export default class Controller {
  constructor(model, view) {
    this._view = view;
    this._model = model;

    this._view.refs.headerFilterLink.addEventListener(
      'click',
      this.handleOpenFilter.bind(this)
    );

    this._view.refs.formFilter.addEventListener(
      'submit',
      this.handleSubmitFormFilter.bind(this)
    );

    this._view.refs.formFilter.addEventListener(
      'reset',
      this.handleResetFormFilter.bind(this)
    );

    this.init();
  }

  init() {
    this._view.init(this._model.getData(), this._model.getDataFilter());
  }

  handleOpenFilter() {
    this._view.toggleCardFilter();
  }

  handleSubmitFormFilter(e) {
    e.preventDefault();
    const filteredData = this.createFilteredData(this._model.formFilter);

    this._view.createFilteredCard(this._model.getFilteredItems(filteredData));

    if(this._view.refs.headerFilterLink.classList.contains('header__filter--active')) {
      this.handleOpenFilter()
    }
  }

  handleResetFormFilter() {
    this._view.createFilteredCard(this._model.getData());

    if(this._view.refs.headerFilterLink.classList.contains('header__filter--active')) {
      this.handleOpenFilter()
    }
  }

  createFilteredData(formFilter) {
    const filteredData = {};

    for (let key in formFilter) {
      const arrCheck = Array.from(
        this._view.refs.cardFilter.querySelectorAll(
          'input[name=' + key + ']:checked'
        )
      );
      filteredData[key] =
        arrCheck.length === 0
          ? formFilter[key]
          : arrCheck.map(item => item.value);
    }

    return filteredData;
  }
}
