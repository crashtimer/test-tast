import { observable, makeObservable, action } from "mobx";

class BooksStore {
  constructor() {
    makeObservable(this, {
      list: observable,
      isPrivateList: observable,
      setIsPrivateList: action,
      setList: action,
      addItem: action,
      reset: action,
    });
  }

  list: Book[] = [];
  isPrivateList = false;

  setIsPrivateList = (isPrivateList: boolean) => {
    this.isPrivateList = isPrivateList;
  };

  setList = (list: Book[]) => {
    this.list = list;
  };

  addItem = (item: Book) => {
    this.list = [...this.list, item];
  };

  reset = () => {
    this.list = [];
  };
}

export default BooksStore;
