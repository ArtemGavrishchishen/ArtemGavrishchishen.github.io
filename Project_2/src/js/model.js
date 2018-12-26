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

  getFilteredItems(filteredItems) {
    let dataItems = this.data.slice(0);

    for (let key in filteredItems) {
      const arr = filteredItems[key];
      const filters = dataItems.filter(item => arr.includes(item[key]));
      dataItems = filters;
    }
    return dataItems;
  }
}
