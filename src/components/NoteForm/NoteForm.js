import React, { useEffect, useState } from "react";
import styles from "./NoteForm.module.css";
import ProjectService from "../../services/ProjectService";
import NoteService from "../../services/NoteService";
import { useParams } from "react-router-dom";

const clearData = {
  title: "",
  text: "",
};

const NoteForm = ({ handleUpdateNotes }) => {
  const { _id } = useParams();
  const [data, setData] = useState(clearData);

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.style.height = "27px";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [data.text]);

  const submit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("inputTitle").value;
    const text = document.getElementById("textareaText").value;

    const res = await NoteService.create(_id, title, text);
    handleUpdateNotes(res.data.note);
    setData(clearData);
  };

  return (
    <div className={styles.noteForm}>
      <form>
        <input
          className={styles.title}
          id="inputTitle"
          name="title"
          type="text"
          placeholder="Заголовок"
          value={data.title}
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          maxLength={21}
        />
        <textarea
          className={styles.text}
          id="textareaText"
          name="text"
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
        <button type="submit" onClick={(e) => submit(e)}>
          +
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
