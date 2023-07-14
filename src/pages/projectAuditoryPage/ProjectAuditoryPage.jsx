import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import styles from "./ProjectAuditoryPage.module.css";
import { TextArea } from "../../components/TextArea/TextArea";
import { useParams } from "react-router-dom";
import womanHead from "../../icons/womanHead.svg";
import AuditoryService from "../../services/AuditoryService";
import ProjectService from "../../services/ProjectService";

export const ProjectAuditoryPage = () => {
  const [auditory, setAuditory] = useState({});
  const [nameProject, setNameProject] = useState("");
  const { _id } = useParams();
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await AuditoryService.getAuditoryById(_id);
      await setAuditory(res.data[0]);

      const resp = await ProjectService.getProjectById(_id);
      const name = resp.data.data.name;
      setNameProject(name);
    }

    fetchData();
  }, [_id]);

  useEffect(() => {
    const button = document.getElementById("auditory");
    const span = button.getElementsByTagName("span")[0];
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    span.style.color = "#8700DA";
  }, []);

  const handleInputChange = (field, value) => {
    setAuditory((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const submit = async () => {
    const age = document.getElementsByName("name")[0].value;
    const pain = document.getElementsByName("text")[0].value;
    const description = document.getElementsByName("text")[1].value;

    const res = await AuditoryService.update(_id, age, pain, description);
    if (res.status === 200) {
      alert("Сохранено!");
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        <div key={auditory ? auditory._id : null}>
          <Header name={nameProject}></Header>
          <div className={styles.frame}>
            <div className={styles.column1}>
              <div className={styles.row1}>
                <Input
                  text={auditory ? auditory.age : ""}
                  label="Возраст ЦА"
                  image={womanHead}
                  onChange={(value) => handleInputChange("age", value)}
                ></Input>
              </div>
              <div className={styles.row1}>
                <TextArea
                  value={auditory ? auditory.pain : ""}
                  label={"Боли ЦА"}
                  tooltip={
                    "Узнай, с какими проблемами сталкивается твоя целевая аудитория. Какие из них сможет решить твой проект? Опиши их подробно в этом окне"
                  }
                  onChange={(value) => handleInputChange("pain", value)}
                ></TextArea>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.row1}>
                <TextArea
                  value={auditory ? auditory.description : ""}
                  label={"Портрет ЦА"}
                  tooltip={
                    "Опиши свою целевую аудиторию, упоминая пол, возраст, интересы и уровень дохода"
                  }
                  onChange={(value) => handleInputChange("description", value)}
                ></TextArea>
              </div>
            </div>
          </div>
        </div>
        {isFormChanged && (
          <button onClick={submit} className="save_btn">
            Сохранить изменения
          </button>
        )}
      </div>
    </>
  );
};
