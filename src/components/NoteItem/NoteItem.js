import React, {useEffect, useState} from 'react';
import styles from "./NoteItem.module.css"
const NoteItem = ({note}) =>{

    return (
      <div key={note.id} className={styles.note}>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
      </div>
    );
}

export default NoteItem