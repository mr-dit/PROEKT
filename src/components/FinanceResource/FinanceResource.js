import React, { useEffect, useState } from "react";
import styles from "./FinanceResource.module.css";
import { TextArea } from "../TextArea/TextArea";
import ResourceFinanceService from "../../services/ResourceFinanceService";

export const FinanceResource = ({ _id }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [financeData, setFinanceData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await ResourceFinanceService.getResourceFinanceById(_id);
      if (res.data.length > 0) {
        setFinanceData(res.data);
        setSelectedValue(res.data[0].investmentRequired);
      }
    }

    fetchData();
  }, [_id]);

  const submit = async () => {
    const investmentRequired = selectedValue;
    const fixedCosts = document.getElementsByName("text")[0].value;
    const variableCosts = document.getElementsByName("text")[1].value;
    const unexpectedExpenses = document.getElementsByName("text")[2].value;

    const res = await ResourceFinanceService.update(
      _id,
      investmentRequired,
      fixedCosts,
      variableCosts,
      unexpectedExpenses
    );
    if (res.status === 200) {
      alert("Сохранено!");
    }
  };

  return (
    <>
      {financeData.length !== 0 ? (
        financeData.map((fd) => (
          <div key={fd._id} className={styles.frame}>
            <div className={styles.column}>
              <div>
                <label className={styles.label} htmlFor="standard-select">
                  Требуются инвестиции
                </label>
                <div className={styles.select}>
                  <select
                    name="typeProject"
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                  >
                    <option value="">Выберите тип</option>
                    <option value="Частные">Частные</option>
                    <option value="Государственные">Государственные</option>
                    <option value="Гранты и соц. помощь">
                      Гранты и соц. помощь
                    </option>
                    <option value="Не требует инвестиций">
                      Не требует инвестиций
                    </option>
                  </select>
                </div>
              </div>
              <TextArea
                value={fd.fixedCosts}
                label="Постоянные затраты"
                tooltip={"Какие траты будут производиться каждый месяц ? "}
              ></TextArea>
              <TextArea
                value={fd.variableCosts}
                label="Переменные затраты"
                tooltip={"Опиши траты, которые будут варьироваться "}
              ></TextArea>
              <button onClick={submit}>Сохранить</button>
            </div>
            <div className={styles.column}>
              <TextArea
                value={fd.unexpectedExpenses}
                label="Непредвиденные расходы"
                tooltip={"Предположи, какие траты могут возникнуть по непредвиденным обстоятельствам"}
              ></TextArea>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.frame}>
          <div className={styles.column}>
            <div>
              <label className={styles.label} htmlFor="standard-select">
                Требуются инвестиции
              </label>
              <div className={styles.select}>
                <select
                  name="typeProject"
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <option value="">Выберите тип</option>
                  <option value="Частные">Частные</option>
                  <option value="Государственные">Государственные</option>
                  <option value="Гранты и соц. помощь">
                    Гранты и соц. помощь
                  </option>
                  <option value="Не требует инвестиций">
                    Не требует инвестиций
                  </option>
                </select>
              </div>
            </div>
            <TextArea value={""} label="Постоянные затраты" tooltip={"Какие траты будут производиться каждый месяц ? "}></TextArea>
            <TextArea value={""} label="Переменные затраты" tooltip={"Опиши траты, которые будут варьироваться "}></TextArea>
            <button onClick={submit}>Сохранить</button>
          </div>
          <div className={styles.column}>
            <TextArea value={""} label="Непредвиденные расходы" tooltip={"Предположи, какие траты могут возникнуть по непредвиденным обстоятельствам"}></TextArea>
          </div>
        </div>
      )}
    </>
  );
};
