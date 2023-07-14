import { useEffect, useState } from "react";
import styles from "./FinanceResource.module.css";
import { TextArea } from "../TextArea/TextArea";
import ResourceFinanceService from "../../services/ResourceFinanceService";

export const FinanceResource = ({ _id }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [financeData, setFinanceData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await ResourceFinanceService.getResourceFinanceById(_id);
      if (res.data.length > 0) {
        setFinanceData(res.data[0]);
        setSelectedValue(res.data[0].investmentRequired);
      }
    }

    fetchData();
  }, [_id]);

  const handleInputChange = (field, value) => {
    setFinanceData((prevProject) => ({
      ...prevProject,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

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
      setIsFormChanged(false);
    }
  };

  return (
    <>
      <div key={financeData ? financeData._id : null} className={styles.frame}>
        <div className={styles.column}>
          <div>
            <label className={styles.label} htmlFor="standard-select">
              Требуются инвестиции
            </label>
            <div className={styles.select}>
              <select
                name="typeProject"
                value={selectedValue}
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                  setIsFormChanged(true);
                }}
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
            value={financeData ? financeData.fixedCosts : ""}
            label="Постоянные затраты"
            tooltip={"Какие траты будут производиться каждый месяц ? "}
            onChange={(value) => handleInputChange("fixedCosts", value)}
          ></TextArea>
          <TextArea
            value={financeData ? financeData.variableCosts : ""}
            label="Переменные затраты"
            tooltip={"Опиши траты, которые будут варьироваться "}
            onChange={(value) => handleInputChange("variableCosts", value)}
          ></TextArea>
        </div>
        <div className={styles.column}>
          <TextArea
            value={financeData ? financeData.unexpectedExpenses : ""}
            label="Непредвиденные расходы"
            tooltip={
              "Предположи, какие траты могут возникнуть по непредвиденным обстоятельствам"
            }
            onChange={(value) => handleInputChange("unexpectedExpenses", value)}
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
