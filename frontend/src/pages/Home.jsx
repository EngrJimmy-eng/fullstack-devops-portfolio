import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-300 via-blue-400 to-gray-700 px-6 md:px-12">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            JimmyTech
          </h1>

          <p className="max-w-lg">
            Build. Secure. Deploy. Modern web solutions and DevSecOps systems.
          </p>

          <div className="flex gap-4">
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-6 py-3 rounded">
                Contact Us
              </button>
            </Link>

            <Link to="/projects">
              <button className="border border-white px-6 py-3 rounded">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-gray-600">
            We build secure, scalable, and modern web applications using React,
            Node.js, and DevSecOps practices.
          </p>
        </div>
      </section>

{/* PROJECTS SECTION */}
<section className="py-16 px-6 md:px-12 bg-white">
  <div className="max-w-6xl mx-auto space-y-10">

    {/* TITLE */}
    <div className="text-center">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <p className="text-gray-600 mt-2">
        A preview of my recent work
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* PROJECT 1 */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
        <img
          src="/cloud.jpg"
          alt="Cloud Project"
          className="h-40 w-full object-cover"
        />
        <div className="p-4 font-semibold">
          Cloud Infrastructure
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
        <img
          src="/devops-v2.jpg"
          alt="Security Panel"
          className="h-40 w-full object-cover"
        />
        <div className="p-4 font-semibold">
          Security Panel
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
        <img
          src="/fullstack-website.jpg"
          alt="Business Website"
          className="h-40 w-full object-cover"
        />
        <div className="p-4 font-semibold">
          Business Website
        </div>
      </div>

    </div>

    {/* VIEW ALL BUTTON */}
    <div className="text-center mt-10">
      <Link to="/projects">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Projects
        </button>
      </Link>
    </div>

  </div>
</section>

      

    </div>
  )
}
