import React, { useEffect, useState } from "react";
import { MenuProject } from "../../components/MenuProject/MenuProject";
import { Header } from "../../components/Header/Header";
import styles from "./ProjectMyIdeasPage.module.css";
import NoteForm from "../../components/NoteForm/NoteForm";
// import NoteList from "../../components/NoteList/NoteList";
import {notes as noteData} from '../../components/NoteList/notes'
import NoteItem from "../../components/NoteItem/NoteItem";
import { useParams } from 'react-router-dom'

export const ProjectMyIdeasPage = () => {
    const {_id} = useParams()
    const [notes, setNotes] = useState(noteData);
    console.log(notes)



    useEffect(() => {
        const button = document.getElementById("myIdeas");
        button.style.backgroundColor = "#F4F4F4"
        button.style.borderRadius = "12px"
        button.style.color = "#8700DA"
    }, [])

    return (
        <>
            <MenuProject _id={_id}></MenuProject>
            <div className={styles.mainPage}>
                <Header></Header>
                <div className={styles.frame}>
                    <div>
                        Ваши заметки
                        <div className={styles.table}>
                            <NoteForm setNotes={setNotes} />
                            {notes ? notes.map(note => <NoteItem key={note.id} note={note}></NoteItem>) : <div></div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
