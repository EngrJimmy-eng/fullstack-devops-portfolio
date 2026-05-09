import { useParams, Link } from "react-router-dom"
import projects from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <div className="p-10">Project not found</div>
  }

  return (
    <section className="py-16 px-6 md:px-12 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* BACK */}
        <Link to="/projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold">
          {project.title}
        </h1>

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg shadow"
        />

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg">
          {project.description}
        </p>

        {/* 🔥 TECH STACK (BIG BADGES) */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-black transition"
            target="_blank"
          >
            View GitHub
          </a>

          <a
            href={project.demo}
            className="border px-5 py-2 rounded hover:bg-gray-100 transition"
            target="_blank"
          >
            Live Demo
          </a>
        </div>

      </div>
    </section>
  )
}
