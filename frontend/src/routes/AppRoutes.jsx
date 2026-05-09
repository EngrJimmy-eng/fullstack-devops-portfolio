import { Routes, Route } from "react-router-dom"
import MainLayout from "../components/MainLayout"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Projects from "../pages/Projects"
import ProjectDetail from "../pages/ProjectDetail"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
<Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}
