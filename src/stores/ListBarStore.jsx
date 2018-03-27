import { observable, action } from 'mobx';

export default class ListBarStore {
  @observable listItems = ['authors', 'project'];
  @observable showAddNewListLabel = false;
  @observable activeItem = 'home';
  @observable addNewListInput = '';

  @action
  addNewList() {
    this.listItems.forEach(item => console.log(item));
    this.listItems.push(this.addNewListInput);
    this.listItems.forEach(item => console.log(item));
  }

  @action
  toggleShowAddNewListItemVisibility() {
    this.showAddNewListLabel = !this.showAddNewListLabel;
  }

  @action
  generateLists(itemName) {
    this.lists.push(itemName);
  }
}
