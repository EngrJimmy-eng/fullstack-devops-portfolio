import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import projects from "../data/projects"

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Projects
          </h1>
          <p className="text-gray-600 mt-2">
            A showcase of our work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${project.slug}`}>

              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 space-y-3">

                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-sm text-blue-600">
                    View Details →
                  </span>

                </div>

              </motion.div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}
