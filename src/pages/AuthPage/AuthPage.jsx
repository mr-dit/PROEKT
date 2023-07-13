import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import logo from "../../icons/logo.svg";
import styles from "./AuthPage.module.css";
import { Auth } from "../../components/Auth/Auth";
import Registration from "../../components/Registration/Registration";

const AuthPage = () => {
  const [activeComponent, setActiveComponent] = useState("auth");
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <img src={logo} alt="" />
        <div>
          <h4>Войдите или зарегестрируйтесь, чтобы продолжить</h4>
        </div>
        <div className={styles.frame}>
          <div className={styles.rowButton}>
            <button
              id={
                activeComponent === "auth" ? styles.activeButton : ""
              }
              onClick={() => handleButtonClick("auth")}
            >
              Вход
            </button>
            <button
              id={
                activeComponent === "registration" ? styles.activeButton : ""
              }
              onClick={() => handleButtonClick("registration")}
            >
              Регистрация
            </button>
          </div>
          {activeComponent === "auth" && <Auth />}
          {activeComponent === "registration" && <Registration />}
        </div>
      </div>
    </>
  );
};

export default observer(AuthPage);