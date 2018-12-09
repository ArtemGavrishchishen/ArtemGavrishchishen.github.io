import * as api from './data.js';

export default class Model {
  constructor(data = []) {
    this.data = data;
    this.formFilter = {};

    this.init();
  }

  init() {
    if (api.data.length !== 0) {
      this.data = api.data;

      for (let key in this.data[0]) {
        if (key === 'img') continue;
        this.formFilter[key] = this.data
          .map(item => item[key])
          .filter((x, i, a) => a.indexOf(x) == i);
      }
    }
  }

  getData() {
    return this.data;
  }

  getDataFilter() {
    return this.formFilter;
  }

  getFilteredItems({ brand, model, processor }) {
    const items = this.data;

    const filteredItems = items.filter(
      item =>
        brand.includes(item.brand) &&
        model.includes(item.model) &&
        processor.includes(item.processor)
    );

    return filteredItems;
  }
}
