import React, { createContext } from 'react'
import ReactDOM from "react-dom/client";
import "./bootstrap-reboot.min.css.map";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/VelaSans-Bold.woff2";
import "./fonts/VelaSans-SemiBold.woff2";
import Store from "./store/store";

export const store = new Store();
export const Context = createContext({
  store,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        store,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
