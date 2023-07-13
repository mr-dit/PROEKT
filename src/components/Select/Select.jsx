import React, { useEffect, useState } from "react";

import styles from "./Select.module.css";

export const Select = ({ select, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(select);
  }, [select]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <>
      <label htmlFor="standard-select">Тип проекта</label>
      <div className={styles.select}>
        <select
          name="typeProject"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="">Выберите тип</option>
          <option value="Стартап малого бизнеса">Стартап малого бизнеса</option>
          <option value="Стартап большого бизнеса">
            Стартап большого бизнеса
          </option>
          <option value="Социальный стартап">Социальный стартап</option>
        </select>
      </div>
    </>
  );
};
