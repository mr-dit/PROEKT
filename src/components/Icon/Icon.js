import React, { useState } from "react";
import upload from "../../icons/upload.svg";
import styles from "./Icon.module.css";

export const Icon = ({img}) => {
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <>
      <div>
        <div className={styles.icon_project}>
          Аватарка
            <div>
              <label className={styles.inputFile}>
                <input type="file" name="icon" onChange={handleImageChange} />
                {image ? (
                    <img className={styles.blur} src={image} alt="uploader" />
                ) : (
                    <img src={upload} alt="uploader" className={styles.upload}/>
                )}
              </label>
            </div>
        </div>
      </div>
    </>
  );
};
