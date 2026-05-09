import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const API = "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/contact", form);

      console.log(res.data);
      alert("Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow space-y-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center">
          Contact Me
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

        {/* SOCIAL LINKS */}
        <div className="text-center space-y-4 mt-6">

          <h2 className="text-xl font-semibold">
            Connect with me
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/2347032951395"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://www.facebook.com/ikenna.ndumele.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/ndumeleikenna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-8 text-center">

          <h3 className="text-xl font-semibold mb-3">
            Get in Touch
          </h3>

          <p className="text-gray-600 mb-2">
            📍 Nigeria | Open to Remote Work
          </p>

          <p className="text-gray-600">
            📧{" "}
            <a
              href="mailto:ndumeleikenna@gmail.com"
              className="text-blue-500 hover:underline"
            >
              ndumeleikenna@gmail.com
            </a>
          </p>

        </div>

      </div>

    </section>
  );
}
