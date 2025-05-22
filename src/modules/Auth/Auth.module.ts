// services
import { removeStorage, setStorage } from "@/services/storage.service";
// stores
import AuthStore from "./Auth.store";

class AuthModule extends AuthStore {
  constructor() {
    super();
  }

  login = (username: string) => {
    setStorage("username", username);

    this.setUsername(username);
    this.setIsLoggedIn(true);
  };

  logout = () => {
    removeStorage("username");

    this.setUsername("");
    this.setIsLoggedIn(false);
  };
}

export default new AuthModule();
