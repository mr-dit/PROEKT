import { useEffect, useState } from "react";
import styles from "./Input.module.css";
import Aa from "../../icons/Aa.svg";

export const Input = ({ text = "", label, image, onChange }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(text);
  }, [text]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    onChange(value);
  };

  return (
    <>
      <div className={styles.name_project_row}>{label}</div>
      <div className={styles.blockInput}>
        {image ? (
          <img className={styles.inputIcon} src={image} alt="img" />
        ) : (
          <img className={styles.inputIcon} src={Aa} alt="img" />
        )}
        <input
          className={styles.input_name}
          type="text"
          name="name"
          placeholder="Не указано"
          maxLength="30"
          onChange={handleInputChange}
          value={input}
        />
      </div>
    </>
  );
};
