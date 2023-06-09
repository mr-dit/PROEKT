import React from "react";
import logo from "../../icons/logo.svg";
import data from "../../icons/data.svg";
import myIdeas from "../../icons/myIdeas.svg";
import auditory from "../../icons/auditory.svg";
import resources from "../../icons/resources.svg";
import prodvig from "../../icons/prodvig.svg";
import scaling from "../../icons/scaling.svg";
import user from "../../icons/user.svg";
import settings from "../../icons/settings.svg";
import styles from "./MenuProject.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { store } from "../../index";
import exit from "../../icons/exit.png";

export const MenuProject = ({ _id }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await store.logout();
    navigate(`/`);
  };

  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__item}>
          <NavLink to="/">
            <img className={styles.logo} src={logo} alt="" />
          </NavLink>
        </div>
        <div className={styles.menu__item}>
          <NavLink to={`/projectDataPage/${_id}`}>
            <button id="data" className={styles.menu__btn}>
              <img src={data} alt="" />
              <span className={styles.buttonText}>Данные проекта</span>
            </button>
          </NavLink>
          <NavLink to={`/projectMyIdeas/${_id}`}>
            <button id="myIdeas" className={styles.menu__btn}>
              <img src={myIdeas} alt="" />
              <span className={styles.buttonText}>Мои идеи</span>
            </button>
          </NavLink>
          <NavLink to={`/projectAuditory/${_id}`}>
            <button id="auditory" className={styles.menu__btn}>
              <img src={auditory} alt="" />
              <span className={styles.buttonText}>Аудитория</span>
            </button>
          </NavLink>
          <NavLink to={`/projectResource/${_id}`}>
            <button id="resources" className={styles.menu__btn}>
              <img src={resources} alt="" />
              <span className={styles.buttonText}>Ресурсы</span>
            </button>
          </NavLink>
          <NavLink to={`/projectEducation/${_id}`}>
            <button id="education" className={styles.menu__btn}>
              <img src={scaling} alt="" />
              <span className={styles.buttonText}>Развитие</span>
            </button>
          </NavLink>
          <NavLink to={`/projectPromotion/${_id}`}>
            <button id="promotion" className={styles.menu__btn}>
              <img src={prodvig} alt="" />
              <span className={styles.buttonText}>Продвижение</span>
            </button>
          </NavLink>
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
