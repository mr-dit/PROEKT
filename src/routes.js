import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CreateProjectDataPage } from "./pages/CreateProjectDataPage/CreateProjectDataPage";
import { MyProjectPage } from "./pages/MyProjectPage/MyProjectPage";
import { ProjectMyIdeasPage } from "./pages/ProjectMyIdeasPage/ProjectMyIdeasPage";
import AuthPage  from './pages/AuthPage/AuthPage'
import { UpdateProjectDataPage } from './pages/UpdateProjectDataPage/UpdateProjectDataPage'

// import {useNavigate} from 'react-router-dom';
// const navigate = useNavigate();

export const useRoutes = (isAuthenticated) => {
  if (true) {
    return (
      <Routes>
        <Route
          path="/myProject"
          element={<MyProjectPage></MyProjectPage>}
        ></Route>

        <Route
          path="/projectDataPage"
          element={<CreateProjectDataPage></CreateProjectDataPage>}
        ></Route>
        <Route
          path="/projectDataPage/:_id"
          element={<UpdateProjectDataPage></UpdateProjectDataPage>}
        ></Route>

        <Route
          path="/projectMyIdeas/:_id"
          element={<ProjectMyIdeasPage></ProjectMyIdeasPage>}
        ></Route>

        <Route path="*" element={<Navigate to="/myProject" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage></AuthPage>}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
