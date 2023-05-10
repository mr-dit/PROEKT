import React, { useEffect, useState } from 'react'
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import styles from "./CreateProjectDataPage.module.css";
import { Icon } from "../../components/Icon/Icon";
import { Select } from "../../components/Select/Select";
import { TextArea } from "../../components/TextArea/TextArea";
import { Cover } from "../../components/Cover/Cover";
import { Link, useParams } from 'react-router-dom'
import ProjectService from '../../services/ProjectService'
// import axios from "axios";

export const CreateProjectDataPage = () => {
  // const [project, setProject] = useState([])
  // const { _id } = useParams();

  // useEffect( () => {
  //   async function fetchData() {
  //     const res = await ProjectService.getProjectById(_id)
  //     setProject(res.data)
  //
  //   }
  //   fetchData()
  // }, [_id])

  useEffect(() => {
    const button = document.getElementById("data");
    button.style.backgroundColor = "#F4F4F4"
    button.style.borderRadius = "12px"
    button.style.color = "#8700DA"
  }, [])

  const submit = async () =>{
    const name = document.getElementsByName('name')[0].value
    const typeProject = document.getElementsByName('typeProject')[0].value
    const description = document.getElementsByName('text')[0].value
    // const icon = document.querySelector('input[type="file"]').files;
    // const icon = document.getElementsByName('icon')[0].files[0]
    // const cover = document.getElementsByName('cover')[0].value

    const res = await ProjectService.create(name, typeProject, description)
    if (res.status === 200) {
      alert('Создано!')
    }
  }

  return (
    <>
      <MenuProject></MenuProject>
      <div className={styles.mainPage}>
        <Header></Header>
          <div className={styles.frame}>
            <div className={styles.column1}>
              <div className={styles.row1}>
                <Input nameProject={''}></Input>
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
                <TextArea value={''}></TextArea>
              </div>
            </div>
          </div>
        <button onClick={submit}>Создать</button>
      </div>
    </>
  );
};
