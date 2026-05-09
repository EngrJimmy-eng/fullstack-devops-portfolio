import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow bg-white relative">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <img src="/logo.jpg" className="h-14 w-auto object-contain" />
        <span className="font-bold text-lg whitespace-nowrap">JimmyTech</span>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* HAMBURGER / X BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 ml-auto"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>

        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>

        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* MOBILE MENU (animated) */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 p-4 md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

    </nav>
  )
}
