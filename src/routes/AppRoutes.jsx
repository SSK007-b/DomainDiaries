import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import ArticleDetails from "../pages/ArticleDetails";
// import About from "../pages/About";

export default function AppRoutes({ mode, toggleMode }) {
  return (
    <Routes>
      <Route element={<MainLayout mode={mode} toggleMode={toggleMode} />}>
        <Route path="DomainDiaries/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}
