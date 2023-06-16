import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CreateProjectDataPage } from "./pages/CreateProjectDataPage/CreateProjectDataPage";
import { MyProjectPage } from "./pages/MyProjectPage/MyProjectPage";
import { ProjectMyIdeasPage } from "./pages/ProjectMyIdeasPage/ProjectMyIdeasPage";
import { UpdateProjectDataPage } from './pages/UpdateProjectDataPage/UpdateProjectDataPage'
import {ProjectAuditoryPage} from './pages/projectAuditoryPage/ProjectAuditoryPage'
import { ProjectResourcesPage } from './pages/ProjectResourcesPage/ProjectResourcesPage'
import { ProjectEducationPage } from './pages/projectEducationPage/ProjectEducationPage'
import { ProjectPromotionPage } from './pages/projectPromotionPage/ProjectPromotionPage'


export const useRoutes = () => {
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

        <Route
          path="/projectAuditory/:_id"
          element={<ProjectAuditoryPage></ProjectAuditoryPage>}
        ></Route>
        <Route
          path="/projectResource/:_id"
          element={<ProjectResourcesPage></ProjectResourcesPage>}
        ></Route>

        <Route
          path="/projectEducation/:_id"
          element={<ProjectEducationPage></ProjectEducationPage>}
        ></Route>

        <Route
          path="/projectPromotion/:_id"
          element={<ProjectPromotionPage></ProjectPromotionPage>}
        ></Route>



        <Route path="*" element={<Navigate to="/myProject" replace />} />
      </Routes>
    );
};
