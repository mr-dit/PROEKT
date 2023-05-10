import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styles from './AuthPage.module.css'

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);

  return (
    <>
      <div className={styles.frame}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
        />
        <button onClick={() => store.login(email, password)}>Логин</button>
        <button onClick={() => store.registration(email, password)}>
          Регистрация
        </button>
      </div>
    </>
  );
};

export default observer(AuthPage);
