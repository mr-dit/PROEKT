import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectEducationPage.module.css";
import { TextArea } from "../../components/TextArea/TextArea";
import { Link, useParams } from "react-router-dom";
import EducationService from "../../services/EducationService";

export const ProjectEducationPage = () => {
  const [education, setEducation] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await EducationService.getEducationById(_id);
      await setEducation(res.data);
    }

    fetchData();
  }, [_id]);

  useEffect(() => {
    const button = document.getElementById("education");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    button.style.color = "#8700DA";
  }, []);

  const submit = async () => {
    const directions = document.getElementsByName("text")[0].value;
    const plans = document.getElementsByName("text")[1].value;
    const partners = document.getElementsByName("text")[2].value;

    const res = await EducationService.update(_id, directions, plans, partners);
    if (res.status === 200) {
      alert("Сохранено!");
    }
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        {education.length !== 0 ? (
          education.map((ed) => (
            <div key={ed._id}>
              <Header></Header>
              <div className={styles.frame}>
                <div className={styles.column1}>
                  <div className={styles.row1}>
                    <TextArea
                      value={ed.directions}
                      label={"Направления развития проекта"}
                      tooltip={"Опиши, в каком направлении проект будет развиваться?"}
                    ></TextArea>
                  </div>
                  <div className={styles.row1}>
                    <TextArea
                      value={ed.plans}
                      label={"Планы на будущее"}
                      tooltip={"Опиши, как в будущем сможешь увеличить масштаб своего проекта"}
                    ></TextArea>
                  </div>
                </div>
                <div className={styles.column2}>
                  <div className={styles.row1}>
                    <TextArea
                      value={ed.partners}
                      label={"Партнеры проекта"}
                      tooltip={"Укажи, кто бы мог стать потенциальным партнером проекта или уже является им "}
                    ></TextArea>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <Header></Header>
            <div className={styles.frame}>
              <div className={styles.column1}>
                <div className={styles.row1}>
                  <TextArea label={"Направления развития проекта"} tooltip={"Опиши, в каком направлении проект будет развиваться?"}></TextArea>
                </div>
                <div className={styles.row1}>
                  <TextArea value={""} label={"Планы на будущее"} tooltip={"Опиши, как в будущем сможешь увеличить масштаб своего проекта"}></TextArea>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.row1}>
                  <TextArea value={""} label={"Партнеры проекта"} tooltip={"Укажи, кто бы мог стать потенциальным партнером проекта или уже является им "}></TextArea>
                </div>
              </div>
            </div>
          </div>
        )}
        <button onClick={submit}>Сохранить</button>
      </div>
    </>
  );
};
