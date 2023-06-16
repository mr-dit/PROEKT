import React from "react";
import { useNavigate } from 'react-router-dom'
import bigPlus from '../../icons/bigPlus.svg'
import styles from "./BlockCreateProject.module.css";
import ProjectService from '../../services/ProjectService'

export const BlockCreateProject = () => {
  const navigate = useNavigate();
  const create = async () => {
    const res = await ProjectService.create()

    if (res.status === 200) {
      return navigate(`/projectDataPage/${res.data._doc._id}`)
    }
  }

  return (
    <>
      <button className={styles.block_create_project} onClick={create}>
          <img src={bigPlus} alt=""/>
          <div>Создать проект</div>
      </button>
    </>
  );
};
