export default class Controller {

  constructor(model, view) {
    this._view = view;
    this._model = model;

    this._view.refs.headerFilterLink.addEventListener('click', this.handleOpenFilter.bind(this));

    this.init();
  }

  init() {
    this._view.init(this._model.getData());
  }

  handleOpenFilter(e) {
    e.preventDefault();
    this._view.toggleCardFilter();
  }
}
