import React, { useEffect, useState } from "react";
import styles from "./NoteForm.module.css";

const clearData = {
  title: "",
  text: "",
};

const NoteForm = ({ setNotes }) => {
  const [data, setData] = useState(clearData);

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.style.height = "27px";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [data.text]);

  const createNote = (e) => {
    e.preventDefault();
    setNotes((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    setData(clearData);
  };

  return (
    <div className={styles.noteForm}>
      <form>
        <input
          className={styles.title}
          type="text"
          placeholder="Заголовок"
          value={data.title}
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          maxLength={22}
        />
        <textarea
          className={styles.text}
          placeholder="Начни писать любой текст..."
          value={data.text}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              text: e.target.value,
            }))
          }
          maxLength={300}
        />
        <button type="submit" onClick={(e) => createNote(e)}>
          +
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
