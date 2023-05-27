import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectPromotionPage.module.css";
import { TextArea } from "../../components/TextArea/TextArea";
import { useParams } from "react-router-dom";
import Select from "react-select";
import PromotionService from "../../services/PromotionService";

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
  const [promotion, setPromotion] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { _id } = useParams();

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await PromotionService.getPromotionById(_id);
      if (res.data && res.data.length > 0 && res.data[0].promotions) {
        setPromotion(res.data);
        setSelectedOptions(JSON.parse(res.data[0].promotions));
      }
    }

    fetchData();
  }, [_id]);

  useEffect(() => {
    const button = document.getElementById("promotion");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    button.style.color = "#8700DA";
  }, []);

  const submit = async () => {
    const promotions = JSON.stringify(selectedOptions);
    const content = document.getElementsByName("text")[0].value;

    const res = await PromotionService.update(_id, promotions, content);
    if (res.status === 200) {
      alert("Сохранено!");
    }
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        {promotion.length !== 0 ? (
          promotion.map((promo) => (
            <div key={promo._id}>
              <Header></Header>
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
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>
                <div className={styles.column2}>
                  <div className={styles.row1}>
                    <TextArea
                      value={promo.content}
                      label={"Контент план"}
                      tooltip={
                        "Если ты выбрал продвижение в социальных сетях, то тебе понадобится контент-план. Пиши идеи для постов, статей, видео прямо здесь. Упоминай даты выхода каждого поста"
                      }
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
                  <div className={styles.desc_project_row}>
                    <h6>Способ продвижения</h6>
                  </div>
                  <Select
                    options={options}
                    className={styles.customSelect}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.row1}>
                  <TextArea
                    value={""}
                    label={"Контент план"}
                    tooltip={
                      "Если ты выбрал продвижение в социальных сетях, то тебе понадобится контент-план. Пиши идеи для постов, статей, видео прямо здесь. Упоминай даты выхода каждого поста"
                    }
                  ></TextArea>
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
