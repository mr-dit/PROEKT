// import React, {useEffect, useState} from "react";
// import styles from "./NoteList.module.css";
//
// import NoteItem from "../NoteItem/NoteItem";
// import NoteForm from "../NoteForm/NoteForm";
//
// const NoteList = () => {
//     return (
//         <div>
//             {noteData.map(note => <NoteItem key={note.id} note={note}></NoteItem>)}
//         </div>
//     )
// }
//
// export default NoteList



// import React, {useEffect, useState} from "react";
// import styles from "./NoteList.module.css";
// import {notes as noteData} from './notes'
// const NoteList = ({ /*notes,*/ handleNoteUpdate }) => {
//   const [notes, setNotes] = useState(noteData)
//
//
//   const [editableNoteId, setEditableNoteId] = useState(null);
//   const [text, setText] = useState('')
//
//   useEffect(() => {
//     const textarea = document.querySelector("textarea");
//     textarea.style.height = "27px";
//     textarea.style.height = textarea.scrollHeight + "px";
//   }, [text]);
//   const handleNoteClick = (id) => {
//     setEditableNoteId(id);
//   };
//
//   const handleNoteBlur = () => {
//     setEditableNoteId(null);
//   };
//
//   return (
//     <>
//       {notes.map((note) => (
//         <div className={styles.note} key={note.id}>
//           {editableNoteId === note.id ? (
//             <input
//               className={styles.title}
//               placeholder="Заголовок"
//               type="text"
//               value={note.title}
//               onChange={(e) =>
//                 handleNoteUpdate(note.id, e.target.value, note.text)
//               }
//               onBlur={handleNoteBlur}
//             />
//           ) : (
//             <input
//               className={styles.title}
//               placeholder="Заголовок"
//               onClick={() => handleNoteClick(note.id)}
//               onChange={(e) =>
//                   handleNoteUpdate(note.id, e.target.value, note.text)
//               }
//               value={note.title}
//             />
//           )}
//           {editableNoteId === note.id ? (
//             <textarea
//               className={styles.text}
//               placeholder="Начни писать любой текст..."
//               value={note.text}
//               onChange={(e) =>{
//                 handleNoteUpdate(note.id, note.title, e.target.value)
//                 setText(e.target.value)
//               }}
//               onBlur={handleNoteBlur}
//             />
//           ) : (
//             <textarea
//               className={styles.text}
//               placeholder="Начни писать любой текст..."
//               value={note.text}
//               onClick={() => handleNoteClick(note.id)}
//               onChange={(e) =>{
//                 handleNoteUpdate(note.id, note.title, e.target.value)
//                 setText(e.target.value)
//               }}
//             ></textarea>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };
//
// export default NoteList;
//
//
