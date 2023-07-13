import { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectPromotionPage.module.css";
import { TextArea } from "../../components/TextArea/TextArea";
import { useParams } from "react-router-dom";
import Select from "react-select";
import PromotionService from "../../services/PromotionService";
import ProjectService from "../../services/ProjectService";

const options = [
  { value: "Социальные сети", label: "Социальные сети" },
  {
    value: "Партнерство с другими проектами",
    label: "Партнерство с другими проектами",
  },
  { value: "Таргетированная реклама", label: "Таргетированная реклама" },
  { value: "Наружная реклама", label: "Наружная реклама" },
];

export const ProjectPromotionPage = () => {
  const [promotion, setPromotion] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { _id } = useParams();
  const [nameProject, setNameProject] = useState("");
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await PromotionService.getPromotionById(_id);
      if (res.data && res.data.length > 0 && res.data[0].promotions) {
        setPromotion(res.data[0]);
        setSelectedOptions(JSON.parse(res.data[0].promotions));
      }
      const resp = await ProjectService.getProjectById(_id);
      const name = resp.data.data.name;
      setNameProject(name);
    }

    fetchData();
  }, [_id]);

  useEffect(() => {
    const button = document.getElementById("promotion");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    const span = button.getElementsByTagName("span")[0];
    span.style.color = "#8700DA";
  }, []);

  const handleInputChange = (field, value) => {
    setPromotion((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const submit = async () => {
    const promotions = JSON.stringify(selectedOptions);
    const content = document.getElementsByName("text")[0].value;

    const res = await PromotionService.update(_id, promotions, content);
    if (res.status === 200) {
      alert("Сохранено!");
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        <div key={promotion._id}>
          <Header name={nameProject}></Header>
          <div className={styles.frame}>
            <div className={styles.column1}>
              <div className={styles.row1}>
                <div className={styles.desc_project_row}>
                  <h6>Способ продвижения</h6>
                </div>
                <Select
                  className={styles.customSelect}
                  options={options}
                  isMulti
                  value={selectedOptions}
                  onChange={(e) => {
                    handleSelectChange(e);
                    setIsFormChanged(true);
                  }}
                />
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.row1}>
                <TextArea
                  value={promotion.content}
                  label={"Контент план"}
                  tooltip={
                    "Если ты выбрал продвижение в социальных сетях, то тебе понадобится контент-план. Пиши идеи для постов, статей, видео прямо здесь. Упоминай даты выхода каждого поста"
                  }
                  onChange={(value) => handleInputChange("content", value)}
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
