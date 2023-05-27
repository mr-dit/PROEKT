import React, { useEffect, useState } from 'react'
import styles from "./WorkResorce.module.css";
import { TextArea } from '../TextArea/TextArea'
import ResourceWorkService from '../../services/ResourceWorkService'


export const WorkResource = ({_id}) => {
	const [workData, setWorkData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const res = await ResourceWorkService.getResourceWorkById(_id);
			if (res.data.length > 0) {
				setWorkData(res.data);
			}
		}
		fetchData();
	}, [_id]);


	const submit = async () => {
		const members = document.getElementsByName("text")[0].value;
		const roles = document.getElementsByName("text")[1].value;
		const functions = document.getElementsByName("text")[2].value;
		const missingSkills = document.getElementsByName("text")[3].value;
		
		const res = await ResourceWorkService.update(
			_id,
			members,
			roles,
			functions,
			missingSkills
		);
		if (res.status === 200) {
			alert("Сохранено!");
		}
	};


	return (
		<>
			{workData.length !== 0 ? ( workData.map((wd) => (
			<div key={wd._id} className={styles.frame}>
				<div className={styles.column}>
					<TextArea value={wd.members} label={"Список участников"} tooltip={"Перечисли специалистов проекта"}></TextArea>
					<TextArea value={wd.roles} label={"Роли участников команды"} tooltip={"Какие роли в команде они будут занимать?"}></TextArea>
					<TextArea value={wd.functions} label={"Функции участников команды"} tooltip={"Опиши ключевые функции каждого участника"}></TextArea>
					<button onClick={submit}>Сохранить</button>
				</div>
				<div className={styles.column}>
					<TextArea value={wd.missingSkills} label={"Недостающие навыки"} tooltip={"Пропиши навыки, которых не хватает в команде для реализации проекта "}></TextArea>
				</div>
			</div>
				))
				) : (
				<div className={styles.frame}>
					<div className={styles.column}>
						<TextArea value={""} label={"Список участников"} tooltip={"Перечисли специалистов проекта"}></TextArea>
						<TextArea value={""} label={"Роли участников команды"} tooltip={"Какие роли в команде они будут занимать?"}></TextArea>
						<TextArea value={""} label={"Функции участников команды"} tooltip={"Опиши ключевые функции каждого участника"}></TextArea>
						<button onClick={submit}>Сохранить</button>
					</div>
					<div className={styles.column}>
						<TextArea value={""} label={"Недостающие навыки"} tooltip={"Пропиши навыки, которых не хватает в команде для реализации проекта "}></TextArea>
					</div>
				</div>
			)}

		</>
	);
};
