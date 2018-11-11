import * as api from "./data.js";

export default class Model {

  constructor(data = []) {
    this.data = data;

    this.init();
  }

  init() {
    if(api.data.length !== 0) {
      this.data = api.data;
    }
  }

  getData() {
    return this.data;
  }
}
