import React from "react";
import logo from "../../icons/logo.svg";
import projects from "../../icons/projects.svg";
import teams from "../../icons/teams.svg";
import analytics from "../../icons/analytics.svg";
import documentation from "../../icons/documentation.svg";
import user from "../../icons/user.svg";
import exit from "../../icons/exit.png";
import settings from "../../icons/settings.svg";
import styles from "./Menu.module.css";
import { store } from "../../index";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await store.logout();
    navigate(`/`);
  };

  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__item}>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <div className={styles.menu__item}>
          <button id="myProject" className={styles.menu__btn}>
            <img src={projects} alt="" />
            <span className={styles.buttonText}>Мои проекты</span>
          </button>
          {/*<button className={styles.menu__btn}>*/}
          {/*  <img src={teams} alt="" />*/}
          {/*  Команды*/}
          {/*</button>*/}
          {/*<button className={styles.menu__btn}>*/}
          {/*  <img src={analytics} alt="" />*/}
          {/*  Аналитика*/}
          {/*</button>*/}
          {/*<button className={styles.menu__btn}>*/}
          {/*  <img src={documentation} alt="" />*/}
          {/*  Документация*/}
          {/*</button>*/}
        </div>
        <div className={styles.menu__item}>
          {/*<button className={styles.menu__btn}>*/}
          {/*  <img src={user} alt="" />*/}
          {/*  Мой профиль*/}
          {/*</button>*/}
          {/*<button className={styles.menu__btn}>*/}
          {/*  <img src={settings} alt="" />*/}
          {/*  Настройки*/}
          {/*</button>*/}
          <button onClick={logout} className={styles.menu__btn}>
            <img src={exit} alt="" className={styles.icon} />
            <span className={styles.buttonText}>Выход</span>
          </button>
        </div>
      </menu>
    </>
  );
};
