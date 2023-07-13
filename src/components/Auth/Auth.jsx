import { useContext, useState } from "react";
import { Context } from "../../index";
import styles from "./Auth.module.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { store } = useContext(Context);

  const handleError = (e) => {
    setError(true);
    setErrorMsg(e.message);
  };

  return (
    <>
      {error && <div className="error-message">{errorMsg}</div>}

      <form className={styles.form}>
        <input
          onChange={(e) => {
            setError(false);
            setEmail(e.target.value);
          }}
          value={email}
          className={styles.input}
          type="email"
          placeholder="Почта"
          required
        />
        <input
          onChange={(e) => {
            setError(false);
            setPassword(e.target.value);
          }}
          value={password}
          className={styles.input}
          type="password"
          minLength={6}
          placeholder="Пароль"
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            store.login(email, password).catch((error) => handleError(error));
          }}
          className={styles.loginBtn}
        >
          Войти
        </button>
      </form>
    </>
  );
};
