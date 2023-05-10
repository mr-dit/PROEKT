import React, { useEffect, useState } from 'react'

import styles from "./Select.module.css";

export const Select = ({ select }) => {
  const [valueFromServer, setValueFromServer] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setValueFromServer(select);
    setSelectedValue(select); // Установка выбранного значения из сервера
  }, []);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <label htmlFor="standard-select">Тип проекта</label>
      <div className={styles.select}>

        <select name="typeProject" value={selectedValue} onChange={handleChange}>
          <option value="">Выберите тип</option>
          <option value="option 1">Стартап малого бизнеса</option>
          <option value="option 2">Стартап большого бизнеса</option>
          <option value="option 3">Социальный стартап</option>
        </select>

        {/*<select name="typeProject" defaultValue="Option 1">*/}
        {/*  <option className={styles.default} value="Option 1" disabled hidden>*/}
        {/*    Выберите тип*/}
        {/*  </option>*/}
        {/*  <option value="Option 2">Стартап малого бизнеса</option>*/}
        {/*  <option value="Option 3">Стартап большого бизнеса</option>*/}
        {/*  <option value="Option 4">Социальный стартап</option>*/}
        {/*</select>*/}
      </div>
    </>
  );
};
