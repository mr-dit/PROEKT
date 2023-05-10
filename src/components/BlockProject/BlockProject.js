import React from "react";
import {NavLink} from "react-router-dom";
import bigPlus from '../../icons/bigPlus.svg'
import styles from "./BlockProject.module.css";
import { store } from '../../index'

export const BlockProject = ({_id, name, type, description}) => {


	return (
		<>
			<button className={styles.block_project}>
				<NavLink to={`/projectDataPage/${_id}`}>
				<img className={styles.project_img} src="" alt=""/>
					<div className={styles.project_text}>
						<img src="" alt="" className={styles.project_icon}/>
							<div className={styles.project_name}>
								{name}
								<div className={styles.project_desc}>
									{name} • <span> сделано ...%</span>
								</div>
							</div>
					</div>
				</NavLink>
			</button>

			{/*<button className={styles.block_create_project}>*/}
			{/*	<NavLink to="/projectDataPage">*/}
			{/*		<img src={bigPlus} alt=""/>*/}
			{/*		<div>Создать проект</div>*/}
			{/*	</NavLink>*/}
			{/*</button>*/}
		</>
	);
};
