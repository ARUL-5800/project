"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-8 flex items-center px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
inline-block
px-6 py-3
rounded-full
bg-white
border border-slate-200
shadow
font-medium
mb-5
text-slate-700
"
          >
            Backend Engineer • AWS • Distributed Systems
          </p>

          <h1 className="text-6xl lg:text-7xl font-black tracking-[0.01em] leading-[1.1] text-slate-900">
            Powering
            <span className="block leading-[1.25] bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Real-Time Data Systems
            </span>
          </h1>

          <p
            className="
mt-8
text-xl
leading-relaxed
text-slate-600
max-w-2xl
"
          >
            I build real-time backend systems and cloud pipelines that process
            millions of records, power industrial platforms, and deliver
            reliable, scalable performance.
          </p>

          <div className="flex gap-5 flex-wrap mt-12">
            <a
              href="#projects"
              className="
px-8 py-5
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-indigo-500
text-white
font-semibold
shadow-[0_10px_35px_rgba(59,130,246,.35)]
hover:-translate-y-1
transition
"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
px-8 py-5
rounded-2xl
bg-white
border border-slate-200
shadow-lg
font-semibold
text-slate-800
hover:-translate-y-1
transition
"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div
            className="
bg-white
rounded-[36px]
p-10
border border-slate-100
shadow-[0_30px_80px_rgba(15,23,42,.08)]
"
          >
            <div className="flex gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* ABOUT ME CONTENT */}
            <div className="text-slate-700 text-lg leading-8 space-y-5">
              <p className="text-xl font-semibold text-slate-900">
                👋 Welcome to my portfolio
              </p>

              <p>
                I’m{" "}
                <span className="font-semibold text-slate-900">
                  ArulSelvam
                </span>
                , a Backend Engineer focused on building scalable cloud-native
                systems.
              </p>

              <p>
                With experience in Python, AWS, and real-time industrial
                platforms, I design APIs, process high-volume data streams, and
                build reliable backend architectures.
              </p>

              <p>
                I enjoy solving complex engineering problems and creating
                systems that perform efficiently at scale.
              </p>
            </div>
          </div>

          {/* FLOATING CARD */}
          <div
            className="
absolute
-bottom-20
-right-8
bg-gradient-to-r
from-cyan-500
to-indigo-500
text-white
rounded-3xl
p-8
shadow-2xl
"
          >
            <p className="text-sm opacity-90 mb-2">What I Build</p>
            <h3 className="text-2xl font-bold">Scalable Backend & Data Systems</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
