import React, { useEffect, useState } from 'react'
import styles from "./TimeResource.module.css";
import { TextArea } from '../TextArea/TextArea'
import ResourceTimeService from '../../services/ResourceTimeService'


export const TimeResource = ({_id}) => {
	const [timeData, setTimeData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const res = await ResourceTimeService.getResourceTimeById(_id);
			if (res.data.length > 0) {
				setTimeData(res.data);
			}
		}
		fetchData();
	}, [_id]);


	const submit = async () => {
		const list = document.getElementsByName("text")[0].value;
		const time = document.getElementsByName("text")[1].value;
		const events = document.getElementsByName("text")[2].value;

		const res = await ResourceTimeService.update(
			_id,
			list,
			time,
			events
		);
		if (res.status === 200) {
			alert("Сохранено!");
		}
	};


	return (
		<>
			{timeData.length !== 0 ? ( timeData.map((td) => (
			<div key={td._id} className={styles.frame}>
				<div className={styles.column}>
					<TextArea value={td.list} label={"Список задач"} tooltip={"Напиши план работы на время реализации проекта "}></TextArea>
					<TextArea value={td.time} label={"Время реализации"} tooltip={"Сколько займет каждый этап? Совет: ставь дедлайны, так твой проект быстрее реализуется"}></TextArea>
					<button onClick={submit}>Сохранить</button>
				</div>
				<div className={styles.column}>
					<TextArea value={td.events} label={"Мероприятия"} tooltip={"Какие мероприятия, связанные с проектом ты планируешь? Обозначь даты "}></TextArea>
				</div>
			</div>
				))
			) : (
				<div className={styles.frame}>
					<div className={styles.column}>
						<TextArea label={"Список задач"} tooltip={"Напиши план работы на время реализации проекта "}></TextArea>
						<TextArea label={"Время реализации"} tooltip={"Сколько займет каждый этап? Совет: ставь дедлайны, так твой проект быстрее реализуется"}></TextArea>
						<button onClick={submit}>Сохранить</button>
					</div>
					<div className={styles.column}>
						<TextArea label={"Мероприятия"} tooltip={"Какие мероприятия, связанные с проектом ты планируешь? Обозначь даты "}></TextArea>
					</div>
				</div>
			)}

		</>
	);
};
