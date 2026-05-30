import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public pages with layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Route>

      {/* Admin routes (no layout) */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />

    </Routes>
  );
}
