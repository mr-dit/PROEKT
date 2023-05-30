import React, { useEffect, useState } from 'react'
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import styles from "./CreateProjectDataPage.module.css";
import { Icon } from "../../components/Icon/Icon";
import { Select } from "../../components/Select/Select";
import { TextArea } from "../../components/TextArea/TextArea";
import { Cover } from "../../components/Cover/Cover";
import { NavLink } from 'react-router-dom'
import ProjectService from '../../services/ProjectService'
import Aa from '../../icons/Aa.svg'
import { useNavigate } from 'react-router-dom';
import logo from '../../icons/logo.svg'
import data from '../../icons/data.svg'
import user from '../../icons/user.svg'
import { store } from '../../index'
import exit from '../../icons/exit.png'

export const CreateProjectDataPage = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await store.logout()
    navigate(`/`)
  }

  useEffect(() => {
    const button = document.getElementById("data");
    button.style.backgroundColor = "#F4F4F4"
    button.style.borderRadius = "12px"
    button.style.color = "#8700DA"
  }, [])

  const submit = async () => {
    const name = document.getElementsByName('name')[0].value
    const typeProject = document.getElementsByName('typeProject')[0].value
    const description = document.getElementsByName('text')[0].value
    const icon = document.getElementById('icon').files[0]
    const cover = document.getElementById('cover').files[0]

    const res = await ProjectService.create(name, typeProject, description, icon, cover)

    if (res.status === 200) {
      return navigate(`/projectDataPage/${res.data._doc._id}`)
    }
  }

  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__item}>
          <NavLink to="/">
            <img className={styles.logo} src={logo} alt="" />
          </NavLink>
        </div>
        <div className={styles.menu__item}>
          <NavLink to={`/projectDataPage`}>
            <button id="data" className={styles.menu__btn}>
              <img src={data} alt="" />
              Данные проекта
            </button>
          </NavLink>
        </div>
        <div className={styles.menu__item}>
          <button className={styles.menu__btn}>
            <img src={user} alt="" />
            Мой профиль
          </button>
          <button onClick={logout} className={styles.menu__btn}>
            <img src={exit} alt="" className={styles.icon} />
            Выход
          </button>
        </div>
      </menu>
      <div className={styles.mainPage}>
        <Header></Header>
          <div className={styles.frame}>
            <div className={styles.column1}>
              <div className={styles.row1}>
                <Input nameProject={''} label="Название проекта" image={Aa}></Input>
              </div>
              <div className={styles.row1}>
                <div className={styles.image_project}>
                  <Icon></Icon>
                  <Cover></Cover>
                </div>
              </div>
              <div className={styles.row1}>
                <Select select={''}></Select>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.row1}>
                <TextArea value={''} label={"Описание проекта"} tooltip={"На чем будет специализироваться проект? Какие услуги или продукт предоставит?"}></TextArea>
              </div>
            </div>
          </div>
        <button onClick={submit} className="save_btn">Создать</button>
      </div>
    </>
  );
};
