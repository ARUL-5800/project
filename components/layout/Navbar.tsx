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
            href="#contact"
            className="
ml-3
px-6 py-3
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
            Let's Talk
          </a>
        </div>

        {/* mobile button */}
        {/* <button
          className="
md:hidden
w-12 h-12
rounded-2xl
bg-white
border border-slate-200
shadow
text-xl
"
        >
          ☰
        </button> */}
      </div>
    </motion.nav>
  );
}
