import React, { useEffect, useState } from 'react'
import styles from "./Input.module.css";
import Aa from '../../icons/Aa.svg'

export const Input = ({ text="", label, image }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(text)
  }, []);

  return (
    <>
      <div className={styles.name_project_row}>{label}</div>
      <div className={styles.blockInput}>
        {image ? <img className={styles.inputIcon} src={image} alt="img"/> : <img className={styles.inputIcon} src={Aa} alt="img"/>}
        <input
          className={styles.input_name}
          type="text"
          name="name"
          placeholder="Не указано"
          maxLength="30"
          onChange={(e) => setInput(e.target.value)}
          // onBlur={e => console.log(name)}
          value={input}
        />
      </div>
    </>
  );
};
