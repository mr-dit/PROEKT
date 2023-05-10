import React, { useEffect, useState } from 'react'
import styles from "./Input.module.css";

export const Input = ({ nameProject }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(nameProject)
  }, []);

  return (
    <>
      <div className={styles.name_project_row}>Название проекта</div>
      <input
        className={styles.input_name}
        type="text"
        name="name"
        placeholder="Не указано"
        maxLength="30"
        onChange={(e) => setName(e.target.value)}
        // onBlur={e => console.log(name)}
        value={name}
      />
    </>
  );
};
