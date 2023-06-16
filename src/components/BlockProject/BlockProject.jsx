import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./BlockProject.module.css";

export const BlockProject = ({_id, name, img, cover}) => {


	return (
		<>
			<button className={styles.block_project}>
				<NavLink to={`/projectDataPage/${_id}`}>
				<img className={styles.project_img} src={`${process.env.PUBLIC_URL}${cover}`} alt=""/>
					<div className={styles.project_text}>
						<img src={`${process.env.PUBLIC_URL}${img}`} alt="" className={styles.project_icon}/>
							<div className={styles.project_name}>
								{name}
								<div className={styles.project_desc}>
									{name} • <span> сделано ...%</span>
								</div>
							</div>
					</div>
				</NavLink>
			</button>
		</>
	);
};
