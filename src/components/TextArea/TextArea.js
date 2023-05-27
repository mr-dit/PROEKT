import React, {useEffect, useState} from "react";
import question from "../../icons/question.svg";
import cloud from "../../icons/cloud.svg";
import styles from "./TextArea.module.css";

export const TextArea = ({ value="", label, tooltip }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(value);
  }, []);

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.style.height = "27px";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [text]);

  const characterCount = text.length;

  return (
    <>
      <div className={styles.desc_project_block}>
        <div className={styles.desc_project_row}>
          <h6>
            {label}
            {/*<button className={styles.question}>*/}
            {/*  <img src={question} alt="" />*/}
            {/*</button>*/}
            <div className={styles.tooltip}><img src={question} alt="" />
              <span className={styles.tooltiptext}>{tooltip}</span>
            </div>
          </h6>
          <span className={styles.span}>
            {characterCount} / 1048
          </span>
        </div>
        <textarea
          value={text}
          className={styles.input_desk}
          name="text"
          maxLength="1048"
          placeholder="Не указано"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};
