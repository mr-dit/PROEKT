import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import styles from "./ProjectAuditoryPage.module.css";
import { TextArea } from "../../components/TextArea/TextArea";
import { Link, useParams } from "react-router-dom";
import womanHead from '../../icons/womanHead.svg'
import AuditoryService from '../../services/AuditoryService'

export const ProjectAuditoryPage = () => {
	const [title, setTitle] = useState("");
	const [auditory, setAuditory] = useState([]);
	const { _id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const res = await AuditoryService.getAuditoryById(_id);
			await setAuditory(res.data);
		}

		fetchData();
	}, [_id]);

	useEffect(() => {
		const button = document.getElementById("auditory");
		button.style.backgroundColor = "#F4F4F4";
		button.style.borderRadius = "12px";
		button.style.color = "#8700DA";
	}, []);

	const submit = async () => {
		const age = document.getElementsByName("name")[0].value;
		const pain = document.getElementsByName("text")[0].value;
		const description = document.getElementsByName("text")[1].value;

		const res = await AuditoryService.update(
			_id,
			age,
			pain,
			description
		);
		if (res.status === 200) {
			alert("Сохранено!");
		}
	};

	return (
		<>
			<MenuProject _id={_id}></MenuProject>
			<div className={styles.mainPage}>

				{auditory.length !== 0 ? auditory.map((auditory) => (
					<div key={auditory._id}>
						<Header></Header>
						<div  className={styles.frame}>
							<div className={styles.column1}>
								<div className={styles.row1}>
									<Input text={auditory.age} label="Возраст ЦА" image={womanHead}></Input>
								</div>
								<div className={styles.row1}>
									<TextArea value={auditory.pain} label={"Боли ЦА"} tooltip={"Узнай, с какими проблемами сталкивается твоя целевая аудитория. Какие из них сможет решить твой проект? Опиши их подробно в этом окне"}></TextArea>
									{/*<Input text={auditory.pain} label="Боли ЦА"></Input>*/}
								</div>

							</div>
							<div className={styles.column2}>
								<div className={styles.row1}>
									<TextArea value={auditory.description} label={"Портрет ЦА"} tooltip={"Опиши свою целевую аудиторию, упоминая пол, возраст, интересы и уровень дохода"}></TextArea>
								</div>
							</div>
						</div>
					</div>
				)) : <div>
					<Header></Header>
					<div  className={styles.frame}>
						<div className={styles.column1}>
							<div className={styles.row1}>
								<Input text="" label="Возраст ЦА" image={womanHead}></Input>
							</div>
							<div className={styles.row1}>
								<TextArea value={""} label={"Боли ЦА"} tooltip={"Узнай, с какими проблемами сталкивается твоя целевая аудитория. Какие из них сможет решить твой проект? Опиши их подробно в этом окне"}></TextArea>
							</div>
						</div>
						<div className={styles.column2}>
							<div className={styles.row1}>
								<TextArea value={""} label={"Портрет ЦА"} tooltip={"Опиши свою целевую аудиторию, упоминая пол, возраст, интересы и уровень дохода"}></TextArea>
							</div>
						</div>
					</div>
				</div>}
				<button onClick={submit}>Сохранить</button>
			</div>
		</>
	);
};
