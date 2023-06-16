import React from "react";
import favorite from '../../icons/favorite.svg'
import plus from '../../icons/plus.svg'
import styles from "./ButtonFolder.module.css";

export const ButtonFolder = () => {
    return (
        <>
            <div className="row">
                <div className={styles.row_btn}>
                    <button >
                        <img className={styles.favorite_img} src={favorite} alt=""/>
                        Избранное
                    </button>
                    <button>
                        <img src={plus} alt="" className={styles.newFolder_img}/>
                        Новая папка
                    </button>
                </div>
            </div>
        </>
    );
};
