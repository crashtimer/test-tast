import React, { ChangeEvent, useState } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
// modules
import AuthModule from "@/modules/Auth/Auth.module";
// components
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
// styles
import styles from "./Login.module.css";

const LoginView = () => {
  const [username, setUsername] = useState("");

  const { login } = AuthModule;
  const { t } = useTranslation();

  const handleLogin = () => {
    login(username);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className={styles.login}>
      <h1>{t("login.title")}</h1>

      <div className={styles.loginForm}>
        <Input
          placeholder={t("login.username")}
          value={username}
          onChange={handleUsernameChange}
        />

        <Button onClick={handleLogin} disabled={!username}>
          {t("login.button")}
        </Button>
      </div>
    </div>
  );
};

export default observer(LoginView);
