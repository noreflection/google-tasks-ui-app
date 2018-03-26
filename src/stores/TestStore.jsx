import { observable, action } from 'mobx';

export default class PaginatorStore {
  @observable message = 'hey';

  @action
  showMessage() {
    console.log(this.message);
  }
}
