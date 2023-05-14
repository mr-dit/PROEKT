import React, { useEffect, useState } from "react";
import styles from "./NoteItem.module.css";
import NoteService from "../../services/NoteService";
import deleteBucket from "../../icons/delete.png";

const NoteItem = ({ note, handleDeleteNotes }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, []);

  useEffect(() => {
    const textarea = document.querySelectorAll("textarea");
    textarea.forEach((ta) => {
      ta.style.height = "27px";
      ta.style.height = ta.scrollHeight + "px";
    });
  }, [text]);

  const handleDelete = async (e) => {
    e.preventDefault();
    handleDeleteNotes(note._id);
    await NoteService.delete(note._id);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    await NoteService.update(note._id, title, text);
  };

  return (
    <>
      {note ? (
        <div key={note._id} className={styles.note}>
          <form>
            <input
              className={styles.title}
              name={`title`}
              type="text"
              placeholder="Заголовок"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(e) => handleChange(e)}
              maxLength={21}
            />
            <textarea
              className={styles.text}
              id="11"
              name="text"
              placeholder="Начни писать любой текст..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={(e) => handleChange(e)}
              maxLength={300}
            />
            <div className={styles.rowButton}>
              {/*<button type="submit" onClick={(e) => handleChange(e)}>*/}
              {/*  <img src={diskette} alt=""/>*/}
              {/*</button>*/}
              <button type="submit" onClick={(e) => handleDelete(e)}>
                <img src={deleteBucket} alt="" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default NoteItem;

// const submit = async () => {
//     const name = document.getElementsByName("name")[0].value;
//     const typeProject = document.getElementsByName("typeProject")[0].value;
//     const description = document.getElementsByName("text")[0].value;
//
//     // await ProjectService.update(_id, name, typeProject, description)
//     const res = await ProjectService.update(
//       _id,
//       name,
//       typeProject,
//       description
//     );
//     if (res.status === 200) {
//         alert("Сохранено!");
//     }
// };
