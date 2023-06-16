import React, { useContext, useEffect } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
// import UserService from "./services/UserService";
import AuthPage  from "./pages/AuthPage/AuthPage";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useRoutes } from './routes'

const App = () => {
  const routes = useRoutes();
  const { store } = useContext(Context);
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);


  if (store.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!store.isAuth) {
    return (
        <div className="container">
          <AuthPage />
        </div>
    );
  }

  return (
    <Router>
      <div className="container">{routes}</div>
    </Router>
  );
};

export default observer(App);

// import React from "react";
// import { BrowserRouter as Router} from "react-router-dom";
// import { useRoutes } from "./routes";
// import AuthPage from "./pages/AuthPage/AuthPage";
//
//
//
// function App() {
//   const routes = useRoutes();
//   const token = localStorage.getItem("token");
//
//   // if (!token) {
//   //   return <AuthPage/>;
//   // }
//
//
//
//   return (
//     <Router>
//       <div className="container">{routes}</div>
//     </Router>
//   );
// }
//
// export default App;
