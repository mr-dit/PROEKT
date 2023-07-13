import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import styles from "./UpdateProjectDataPage.module.css";
import { Icon } from "../../components/Icon/Icon";
import { Select } from "../../components/Select/Select";
import { TextArea } from "../../components/TextArea/TextArea";
import Cover from "../../components/Cover/Cover";
import { useParams } from "react-router-dom";
import ProjectService from "../../services/ProjectService";
import Aa from "../../icons/Aa.svg";

export const UpdateProjectDataPage = () => {
  const [project, setProject] = useState([]);
  const { _id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [cover, setCover] = useState("");
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await ProjectService.getProjectById(_id);
      const data = res.data;
      const iconUrl = data.file.filePath;
      const coverUrl = data.file.coverPath;

      setImageUrl(iconUrl);
      setCover(coverUrl);

      setProject(data.data);
    }

    fetchData();
  }, [_id]);

  useEffect(() => {
    const button = document.getElementById("data");
    const span = button.getElementsByTagName("span")[0]
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    span.style.color = "#8700DA";
  }, []);

  const handleInputChange = (field, value) => {
    setProject((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const submit = async () => {
    const name = project.name;
    const typeProject = project.type;
    const description = project.description;
    const icon = document.getElementById("icon").files[0];
    const cover = document.getElementById("cover").files[0];

    const res = await ProjectService.update(
      _id,
      name,
      typeProject,
      description,
      icon,
      cover
    );
    if (res.status === 200) {
      alert("Сохранено!");
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        <div key={project._id}>
          <Header name={project.name}></Header>
          <div className={styles.frame}>
            <div className={styles.column1}>
              <div className={styles.row1}>
                <Input
                  text={project.name}
                  label="Название проекта"
                  image={Aa}
                  onChange={(value) => handleInputChange("name", value)}
                ></Input>
              </div>
              <div className={styles.row1}>
                <div className={styles.image_project}>
                  <Icon img={`/uploads/${imageUrl}`} onChange={(value) => handleInputChange("icon", value)}></Icon>
                  <Cover img={`/uploads/${cover}`} onChange={(value) => handleInputChange("cover", value)}></Cover>
                </div>
              </div>
              <div className={styles.row1}>
                <Select
                  select={project.type}
                  onChange={(value) => handleInputChange("type", value)}
                ></Select>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.row1}>
                <TextArea
                  value={project.description}
                  label={"Описание проекта"}
                  tooltip={
                    "На чем будет специализироваться проект? Какие услуги или продукт предоставит?"
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
