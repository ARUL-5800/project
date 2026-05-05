"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
w-full
z-70
backdrop-blur-xl
bg-white/70
border-b border-slate-200
"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a
          href="#"
          className="
text-2xl
font-black
tracking-tight
text-slate-900
"
        >
          ARULSELVAM
          <span className="text-cyan-500"> A</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="
text-slate-600
font-medium
hover:text-cyan-600
transition
"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="
text-slate-600
font-medium
hover:text-cyan-600
transition
"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="
text-slate-600
font-medium
hover:text-cyan-600
transition
"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="
text-slate-600
font-medium
hover:text-cyan-600
transition
"
          >
            Contact
          </a>

          <a
            href="https://wa.me/917092295012"
            target="_blank"
            className="
w-12 h-12
flex items-center justify-center
rounded-2xl
bg-green-500
text-white
shadow
text-xl
hover:scale-105
transition
"
          >
            💬
          </a>

          <a
            href="tel:+917092295012"
            className="
ml-0
px-1.5 py-3
rounded-full
bg-gradient-to-r
from-cyan-500
to-indigo-500
text-white
font-semibold
shadow-lg
hover:-translate-y-1
transition
"
          >
            Let's Talk 📞
          </a>
        </div>

      </div>
    </motion.nav>
  );
}
