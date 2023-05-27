import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectResourcesPage.module.css";
import { useParams } from "react-router-dom";
import { FinanceResource } from "../../components/FinanceResource/FinanceResource";
import money from "../../icons/money.svg";
import work from "../../icons/work.svg";
import clock from "../../icons/clocks.svg";
import activeMoney from '../../icons/greenMoney.svg'
import activeWork from '../../icons/blueWork.svg'
import activeClock from "../../icons/activeClock.svg"
import { WorkResource } from '../../components/WorkResource/WorkResource'
import { TimeResource } from '../../components/TimeResource/TimeResource'

export const ProjectResourcesPage = () => {
  const { _id } = useParams();
  const [activeComponent, setActiveComponent] = useState("component1");
	const [activeImage, setActiveImage] = useState('money');

  const handleButtonClick = (component , image) => {
    setActiveComponent(component);
		setActiveImage(image);
  };



  useEffect(() => {
    const button = document.getElementById("resources");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    button.style.color = "#8700DA";
  }, []);


  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
          <div>
            <Header></Header>
            <div className={styles.frame}>
              <div className={styles.rowButton}>
                <button
                  onClick={() => {
                    handleButtonClick("component1", 'money');
                  }}
                >
                  <img src={activeImage === 'money' ? activeMoney : money} alt="" />
                  Финансовые
                </button>
                <button onClick={() => handleButtonClick("component2", "work")}>
                  <img src={activeImage === 'work' ? activeWork : work} alt="" />
                  Трудовые
                </button>
                <button onClick={() => handleButtonClick("component3", "clock")}>
                  <img src={activeImage === 'clock' ? activeClock : clock} alt="" />
                  Временной
                </button>
              </div>
              {activeComponent === "component1" && <FinanceResource _id={_id} />}
              {activeComponent === 'component2' && <WorkResource _id={_id}/>}
              {activeComponent === 'component3' && <TimeResource _id={_id}/>}
            </div>
          </div>
      </div>
    </>
  );
};
