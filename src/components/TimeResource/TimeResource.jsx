import { useEffect, useState } from "react";
import styles from "./TimeResource.module.css";
import { TextArea } from "../TextArea/TextArea";
import ResourceTimeService from "../../services/ResourceTimeService";

export const TimeResource = ({ _id }) => {
  const [timeData, setTimeData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await ResourceTimeService.getResourceTimeById(_id);
      if (res.data.length > 0) {
        setTimeData(res.data[0]);
      }
    }
    fetchData();
  }, [_id]);

  const handleInputChange = (field, value) => {
    setTimeData((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const submit = async () => {
    const list = document.getElementsByName("text")[0].value;
    const time = document.getElementsByName("text")[1].value;
    const events = document.getElementsByName("text")[2].value;

    const res = await ResourceTimeService.update(_id, list, time, events);
    if (res.status === 200) {
      alert("Сохранено!");
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <div key={timeData._id} className={styles.frame}>
        <div className={styles.column}>
          <TextArea
            value={timeData.list}
            label={"Список задач"}
            tooltip={"Напиши план работы на время реализации проекта "}
            onChange={(value) => handleInputChange("list", value)}
          ></TextArea>
          <TextArea
            value={timeData.time}
            label={"Время реализации"}
            tooltip={
              "Сколько займет каждый этап? Совет: ставь дедлайны, так твой проект быстрее реализуется"
            }
            onChange={(value) => handleInputChange("time", value)}
          ></TextArea>
        </div>
        <div className={styles.column}>
          <TextArea
            value={timeData.events}
            label={"Мероприятия"}
            tooltip={
              "Какие мероприятия, связанные с проектом ты планируешь? Обозначь даты "
            }
            onChange={(value) => handleInputChange("events", value)}
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
