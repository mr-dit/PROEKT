import React, { useEffect, useState } from 'react'
import upload from "../../icons/upload.svg";
import styles from "./Icon.module.css";

export const Icon = ({img, onChange}) => {
  const [image, setImage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL


  useEffect(() => {
      setImage(img)
  }, [img])

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    onChange(imageUrl);
  };

  return (
    <>
      <div>
        <div className={styles.icon_project}>
          Аватарка
            <div>
              <form action="/upload" method="post" encType="multipart/form-data">
              <label className={styles.inputFile}>
                <input type="file" name="icon" id="icon" accept=".jpg, .jpeg, .png, .svg"  onChange={handleImageChange} />
                {
                  image && !image.includes('undef') && !image.includes('null')
                    ? image.includes('blob')
                      ? ( <img className={styles.blur} src={`${image}`} alt="uploader" /> )
                      : ( <img className={styles.blur} src={`${serverUrl}${image}`} alt="uploader" /> )
                    : ( <img src={upload} alt="uploader" className={styles.upload}/> )
                }
              </label>
              </form>
            </div>
        </div>
      </div>
    </>
  );
};
