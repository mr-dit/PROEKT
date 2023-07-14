import { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectEducationPage.module.css";
import { TextArea } from "../../components/TextArea/TextArea";
import { useParams } from "react-router-dom";
import EducationService from "../../services/EducationService";
import ProjectService from "../../services/ProjectService";

export const ProjectEducationPage = () => {
  const [education, setEducation] = useState({});
  const { _id } = useParams();
  const [nameProject, setNameProject] = useState("");
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await EducationService.getEducationById(_id);
      await setEducation(res.data[0]);

      const resp = await ProjectService.getProjectById(_id);
      const name = resp.data.data.name;
      setNameProject(name);
    }

    fetchData();
  }, [_id]);

  useEffect(() => {
    const button = document.getElementById("education");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    const span = button.getElementsByTagName("span")[0];
    span.style.color = "#8700DA";
  }, []);

  const handleInputChange = (field, value) => {
    setEducation((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const submit = async () => {
    const directions = document.getElementsByName("text")[0].value;
    const plans = document.getElementsByName("text")[1].value;
    const partners = document.getElementsByName("text")[2].value;

    const res = await EducationService.update(_id, directions, plans, partners);
    if (res.status === 200) {
      alert("Сохранено!");
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        <div key={education ? education._id : ""}>
          <Header name={nameProject}></Header>
          <div className={styles.frame}>
            <div className={styles.column1}>
              <div className={styles.row1}>
                <TextArea
                  value={education ? education.directions : ""}
                  label={"Направления развития проекта"}
                  tooltip={
                    "Опиши, в каком направлении проект будет развиваться?"
                  }
                  onChange={(value) => handleInputChange("directions", value)}
                ></TextArea>
              </div>
              <div className={styles.row1}>
                <TextArea
                  value={education ? education.plans : ""}
                  label={"Планы на будущее"}
                  tooltip={
                    "Опиши, как в будущем сможешь увеличить масштаб своего проекта"
                  }
                  onChange={(value) => handleInputChange("plans", value)}
                ></TextArea>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.row1}>
                <TextArea
                  value={education ? education.partners : ""}
                  label={"Партнеры проекта"}
                  tooltip={
                    "Укажи, кто бы мог стать потенциальным партнером проекта или уже является им "
                  }
                  onChange={(value) => handleInputChange("partners", value)}
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
