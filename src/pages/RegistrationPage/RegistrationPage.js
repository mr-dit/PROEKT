import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import logo from "../../icons/logo.svg";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  return (
    <>
      <div className={styles.wrapper}>
        <img src={logo} alt="" />
        <div>
          <h4>Войдите, чтобы продолжить</h4>
        </div>
        <form className={styles.form}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={styles.input}
            type="text"
            placeholder="Логин или почта"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={styles.input}
            type="password"
            placeholder="Пароль"
          />
          <p className={styles.recover}>{/*<a href="#">Забыл пароль</a>*/}</p>
        </form>
        {/*<button*/}
        {/*  onClick={() => store.login(email, password)}*/}
        {/*  className={styles.loginBtn}*/}
        {/*>*/}
        {/*  Войти*/}
        {/*</button>*/}
        <button className={styles.loginBtn} onClick={() => store.registration(email, password)}>
             Регистрация
        </button>
        {/*<p className={styles.or}>Войти с помощью</p>*/}

        {/*<div className={styles.signup}>*/}
        {/*  Нет аккаунта? <a href="#">Зарегестрируйтесь здесь</a>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default observer(RegistrationPage);

// <div className={styles.frame}>
//   <input
//     onChange={(e) => setEmail(e.target.value)}
//     value={email}
//     type="text"
//     placeholder="Email"
//   />
//   <input
//     onChange={(e) => setPassword(e.target.value)}
//     value={password}
//     type="password"
//     placeholder="Пароль"
//   />
//   <button onClick={() => store.login(email, password)}>Войти</button>
//   <button onClick={() => store.registration(email, password)}>
//     Регистрация
//   </button>
// </div>
