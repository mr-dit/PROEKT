// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Menu } from '../../components/Menu/Menu'
import { Header } from '../../components/Header/Header'
import { BlockCreateProject } from '../../components/BlockCreateProject/BlockCreateProject'
import { ButtonFolder } from '../../components/ButtonFolder/ButtonFolder'
import styles from './MyProjectPage.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../http'
import { store } from '../../index'
import { Link } from 'react-router-dom'
import ProjectService from '../../services/ProjectService'
import { BlockProject } from '../../components/BlockProject/BlockProject'

export const MyProjectPage = () => {
	const [projects, setProjects] = useState([])

	useEffect( () => {
		async function fetchData(){
			const res = await ProjectService.getProjects()
			setProjects(res.data)
		}
		fetchData()
	}, [])

	return (
		<>
			<Menu></Menu>
			<div className={styles.mainPage}>
				<Header></Header>
				<ButtonFolder></ButtonFolder>
				<div className={styles.project_row}>
				{projects.map(project => (
					<BlockProject key={project._id} _id={project._id} name={project.name}></BlockProject>
				))

				}

				<BlockCreateProject></BlockCreateProject>
				</div>
			</div>

		</>

		// <div className="row">
		//     <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
		//         <div className="input-field">
		//             <input
		//                 placeholder="Вставьте ссылку"
		//                 id="link"
		//                 type="text"
		//                 value={link}
		//                 onChange={e => setLink(e.target.value)}
		//                 onKeyPress={pressHandler}
		//             />
		//             <label htmlFor="Link">Введите ссылку</label>
		//         </div>
		//     </div>
		// </div>
	)
}
