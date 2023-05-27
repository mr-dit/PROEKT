import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectMyIdeasPage.module.css";
import NoteForm from "../../components/NoteForm/NoteForm";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useParams } from "react-router-dom";
import NoteService from "../../services/NoteService";

export const ProjectMyIdeasPage = () => {
  const { _id } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await NoteService.getNotes(_id);
      setNotes(res.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const button = document.getElementById("myIdeas");
    button.style.backgroundColor = "#F4F4F4";
    button.style.borderRadius = "12px";
    button.style.color = "#8700DA";
  }, []);

  const handleDeleteNotes = (deletedNoteId) => {
    setNotes(notes.filter((note) => note._id !== deletedNoteId));
  };
  const handleUpdateNotes = (dataNote) => {
    setNotes((prevState) => [...prevState, dataNote]);
  };

  return (
    <>
      <MenuProject _id={_id}></MenuProject>
      <div className={styles.mainPage}>
        <Header></Header>
        <div className={styles.frame}>
          <div>
            Запиши все идеи, которые возникли в процессе работы
            <div className={styles.table}>
              {notes ? (
                notes.map((note) => (
                  <NoteItem
                    key={note._id}
                    note={note}
                    handleDeleteNotes={handleDeleteNotes}
                  ></NoteItem>
                ))
              ) : (
                <div></div>
              )}
              <NoteForm handleUpdateNotes={handleUpdateNotes} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
