import React, { useEffect, useState } from "react";
import styles from "./WorkResorce.module.css";
import { TextArea } from "../TextArea/TextArea";
import ResourceWorkService from "../../services/ResourceWorkService";

export const WorkResource = ({ _id }) => {
  const [workData, setWorkData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await ResourceWorkService.getResourceWorkById(_id);
      if (res.data.length > 0) {
        setWorkData(res.data[0]);
      }
    }
    fetchData();
  }, [_id]);

  const handleInputChange = (field, value) => {
    setWorkData((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const submit = async () => {
    const members = document.getElementsByName("text")[0].value;
    const roles = document.getElementsByName("text")[1].value;
    const functions = document.getElementsByName("text")[2].value;
    const missingSkills = document.getElementsByName("text")[3].value;

    const res = await ResourceWorkService.update(
      _id,
      members,
      roles,
      functions,
      missingSkills
    );
    if (res.status === 200) {
      alert("Сохранено!");
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <div key={workData ? workData._id : null} className={styles.frame}>
        <div className={styles.column}>
          <TextArea
            value={workData ? workData.members : ""}
            label={"Список участников"}
            tooltip={"Перечисли специалистов проекта"}
            onChange={(value) => handleInputChange("members", value)}
          ></TextArea>
          <TextArea
            value={workData ? workData.roles : ""}
            label={"Роли участников команды"}
            tooltip={"Какие роли в команде они будут занимать?"}
            onChange={(value) => handleInputChange("roles", value)}
          ></TextArea>
          <TextArea
            value={workData ? workData.functions : ""}
            label={"Функции участников команды"}
            tooltip={"Опиши ключевые функции каждого участника"}
            onChange={(value) => handleInputChange("functions", value)}
          ></TextArea>
        </div>
        <div className={styles.column}>
          <TextArea
            value={workData ? workData.missingSkills : ""}
            label={"Недостающие навыки"}
            tooltip={
              "Пропиши навыки, которых не хватает в команде для реализации проекта "
            }
            onChange={(value) => handleInputChange("missingSkills", value)}
          ></TextArea>
        </div>
      </div>
      {isFormChanged && (
        <button onClick={submit} className="save_btn">
          Сохранить изменения
        </button>
      )}
    </>
  );
};
