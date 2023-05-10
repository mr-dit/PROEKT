import React from "react";
import {NavLink} from "react-router-dom";
import bigPlus from '../../icons/bigPlus.svg'
import styles from "./BlockCreateProject.module.css";
import { store } from '../../index'

export const BlockCreateProject = () => {


  return (
    <>
      <button className={styles.block_create_project}>
        <NavLink to="/projectDataPage">
          <img src={bigPlus} alt=""/>
          <div>Создать проект</div>
        </NavLink>
      </button>
    </>
  );
};
