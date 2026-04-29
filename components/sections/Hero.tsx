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
bg-black
border border-slate-200
shadow
font-medium
mb-8
"
          >
            IoT Software Engineer • AWS • Backend Developer
          </p>

          <h1
            className="
text-7xl lg:text-8xl
font-black
tracking-tight
leading-[1.05]
text-slate-900
"
          >
            Building
            <span className="block bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Scalable Cloud Systems
            </span>
          </h1>

          <p
            className="
mt-10
text-2xl
leading-relaxed
text-slate-600
max-w-2xl
"
          >
            I design real-time industrial data platforms, DynamoDB-backed APIs
            and AWS data pipelines processing millions of records.
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

          {/* <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-4xl font-bold text-slate-900">400+</h3>
              <p className="text-slate-500 mt-2">Assets Managed</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-4xl font-bold text-slate-900">10M+</h3>
              <p className="text-slate-500 mt-2">Records Processed</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-4xl font-bold text-slate-900">42ms</h3>
              <p className="text-slate-500 mt-2">Latency</p>
            </div>
          </div> */}
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

            <pre className="text-slate-800 text-lg leading-10 font-mono overflow-auto">
              {`
$ telemetry-status

System: ACTIVE
Assets: 400+
Pipelines: Running
Records/day: 10M+
Latency: 42ms
Status: Healthy
`}
            </pre>
          </div>

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
            <p className="text-sm opacity-90 mb-2">Current Focus</p>

            <h3 className="text-2xl font-bold">Python Backend Engineering</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
