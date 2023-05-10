import React, { useState } from "react";
import upload from "../../icons/upload.svg";
import styles from "./Cover.module.css";

export const Cover = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <>
      <div className={styles.img_project}>
        Обложка проекта
        <div>
          <label className={styles.inputFile}>
            <input type="file" name="cover" onChange={handleImageChange} />
            {image ? (
              <img
                className={styles.blur}
                src={image}
                alt="uploader"
                style={{ borderRadius: "26px" }}
              />
            ) : (
              <>
                <img src={upload} alt="uploader" className={styles.upload} />
                <div className={styles.text}>
                  от 305х140{" "}
                  <React.Fragment>
                    <br />
                    <span>.png .jpg .gif</span>
                  </React.Fragment>
                </div>
              </>
            )}
          </label>
        </div>
      </div>
    </>
  );
};
