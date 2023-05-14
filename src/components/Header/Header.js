import React, {useState} from "react";
import calendar from "../../icons/calendar.svg";
import notification from "../../icons/notification.svg";
import reload from "../../icons/reload.svg";
import styles from "./Header.module.css";
import question from "../../icons/question.svg";

export const Header = ({name}) => {
  const [image, setImage] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <>
      <div className={styles.header}>
        {name ? <h1>{name}</h1> : <h1>Мои проекты</h1>}
        <input
          className={styles.search}
          type="text"
          name="input"
          placeholder="Поиск по проектам и функциям"
        />
        <button><img src={calendar} alt="" /></button>
        <button><img src={notification} alt="" /></button>
        <div className={styles.profile}>
          <div>
            <img className={styles.img_profile} src={image || question} alt="" /></div>
          <button className={styles.reload_block}>
            <label className={styles.inputFile}>
              <input type="file" onChange={handleImageChange} />
              <img src={reload} alt="" />
            </label>

          </button>
        </div>
      </div>
    </>
  );
};


