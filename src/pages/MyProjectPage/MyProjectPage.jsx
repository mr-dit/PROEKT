import { Menu } from "../../components/Menu/Menu";
import { Header } from "../../components/Header/Header";
import { BlockCreateProject } from "../../components/BlockCreateProject/BlockCreateProject";
import styles from "./MyProjectPage.module.css";
import { useEffect, useState } from "react";
import ProjectService from "../../services/ProjectService";
import { BlockProject } from "../../components/BlockProject/BlockProject";

export const MyProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    async function fetchData() {
      const res = await ProjectService.getProjects();

      setProjects(res.data);
    }
    fetchData();
	const button = document.getElementById("myProject");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    button.style.color = "#8700DA";
  }, []);


  return (
    <>
      <Menu></Menu>
      <div className={styles.mainPage}>
        <Header></Header>
        <div className={styles.project_row}>
          {projects.map((project) => (
            <BlockProject
              key={project._id}
              _id={project._id}
              name={project.name}
              img={`${serverUrl}/uploads/${project.iconPath}`}
              cover={`${serverUrl}/uploads/${project.coverPath}`}
            ></BlockProject>
          ))}

          <BlockCreateProject></BlockCreateProject>
        </div>
      </div>
    </>
  );
};
