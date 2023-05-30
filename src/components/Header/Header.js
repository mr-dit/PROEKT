import React, { useEffect, useState } from 'react'
import reload from "../../icons/reload.svg";
import styles from "./Header.module.css";
import AuthService from '../../services/AuthService'

export const Header = ({ name }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await AuthService.getAvatar();

      const data = res.data
      const iconUrl = data.avatarPath;
      setImage(`${iconUrl}`);
    }
    fetchData();
  }, [image])

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(file)
    setImage(imageUrl);

    const avatar = document.getElementById('avatar').files[0]
    await AuthService.setAvatar(avatar);
  };

  return (
    <>
      <div className={styles.header}>
        {name ? <h1>{name}</h1> : <h1>Мои проекты</h1>}
        {/*<input*/}
        {/*  className={styles.search}*/}
        {/*  type="text"*/}
        {/*  name="input"*/}
        {/*  placeholder="Поиск по проектам и функциям"*/}
        {/*/>*/}
        {/*<button><img src={calendar} alt="" /></button>*/}
        <div className={styles.block}>
          {/*<button>*/}
          {/*  <img src={notification} alt="" />*/}
          {/*</button>*/}
          <div className={styles.profile}>
            <div>
              {
                image
                  ?
                  image.includes('blob')
                    ? <img className={styles.img_profile} src={`${image}`} alt="" />
                    : <img className={styles.img_profile} src={`http://localhost:5000/uploads/${image}`} alt="" />
                  : <div></div>
              }

            </div>
            <button className={styles.reload_block}>
              <label className={styles.inputFile}>
                <input type="file" id="avatar" accept=".jpg, .jpeg, .png, .svg" onChange={handleImageChange} />
                <img src={reload} alt="" />
              </label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
