import { action, makeObservable, observable } from "mobx";
// services
import { getStorage } from "@/services/storage.service";

class AuthStore {
  constructor() {
    makeObservable(this, {
      username: observable,
      isLoggedIn: observable,
      setUsername: action,
      setIsLoggedIn: action,
    });
  }

  username = getStorage("username");
  isLoggedIn = !!this.username;

  setUsername = (username: string) => {
    this.username = username;
  };

  setIsLoggedIn = (isLoggedIn: boolean) => {
    this.isLoggedIn = isLoggedIn;
  };
}

export default AuthStore;
