import { Routes, Route } from "react-router-dom";
import Docs from "./Docs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Docs />} />
    </Routes>
  );
};

export default AppRoutes;
