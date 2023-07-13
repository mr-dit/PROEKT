import { useEffect, useRef, useState } from "react";
import question from "../../icons/question.svg";
import styles from "./TextArea.module.css";

export const TextArea = ({ value = "", label, tooltip, onChange }) => {
  const [text, setText] = useState(value);
  const textareaRef = useRef(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "27px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value);
    onChange(value);
  };

  const characterCount = text.length;

  return (
    <>
      <div className={styles.desc_project_block}>
        <div className={styles.desc_project_row}>
          <h6>
            {label}
            <div className={styles.tooltip}>
              <img src={question} alt="" />
              <span className={styles.tooltiptext}>{tooltip}</span>
            </div>
          </h6>
          <span className={styles.span}>{characterCount} / 1048</span>
        </div>
        <textarea
          ref={textareaRef}
          value={text}
          className={styles.input_desk}
          name="text"
          maxLength="1048"
          placeholder="Не указано"
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};
