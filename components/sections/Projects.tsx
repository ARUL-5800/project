"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Industrial OEE Data Platform",
    desc: "Built aggregation pipelines for industrial telemetry, KPI computation and scalable OEE analytics.",
    stack: ["Python", "AWS Glue", "DynamoDB", "MongoDB", "gRPC", "FastAPI"],
    metric: "10M+ Records",
    icon: "⚡",
  },
  {
    title: "High Scale Reporting Engine",
    desc: "Optimized query-heavy reporting APIs for industrial data and operational dashboards.",
    stack: ["Lambda", "FastAPI", "DynamoDB", "Polars", "AWS Glue", "CloudWatch", "GSI"],
    metric: "700+ Assets",
    icon: "🚀",
  },
  {
    title: "Real-Time Monitoring System",
    desc: "Event-driven monitoring, alerts and streaming telemetry dashboards.",
    stack: ["Kafka", "SQS", "SNS", "Alert"],
    metric: "24/7 Streaming",
    icon: "📡",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-0 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="inline-block px-6 py-3 rounded-full bg-black border border-slate-200 shadow mb-6 font-medium">
            Featured Work
          </p>

          <h2 className="text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Selected Projects
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cloud systems, backend engineering and industrial-scale data
            platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.45 }}
              className="
group
bg-white
rounded-[32px]
p-8
border border-slate-100
shadow-[0_20px_60px_rgba(15,23,42,.08)]
hover:shadow-[0_30px_80px_rgba(59,130,246,.15)]
hover:ring-2
hover:ring-cyan-100
transition-all
duration-300
cursor-pointer
"
            >
              <div className="flex justify-between items-center mb-8">
                <div
                  className="
w-16 h-16 rounded-2xl
bg-gradient-to-br from-cyan-500 to-indigo-500
flex items-center justify-center
text-white text-2xl
shadow-lg
group-hover:rotate-6
group-hover:scale-110
transition
"
                >
                  {project.icon}
                </div>

                <span className="text-sm font-semibold px-4 py-2 rounded-full bg-cyan-50 text-cyan-700">
                  {project.metric}
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight mb-5 text-slate-900">
                {project.title}
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="
px-4 py-2
rounded-xl
bg-slate-50
border border-slate-200
text-slate-700
font-medium
hover:bg-cyan-50
hover:border-cyan-200
hover:-translate-y-1
transition
"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <span className="text-slate-500">Case Study</span>

                <span className="text-cyan-600 font-semibold group-hover:translate-x-2 transition inline-block">
                  View →
                </span>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-20 bg-white rounded-[36px] p-12 shadow-2xl border border-slate-100 text-center">
          <h3 className="text-5xl font-bold mb-6 text-slate-900">
            Built for Scale
          </h3>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience building cloud-native systems handling telemetry,
            streaming data and high-volume workloads.
          </p>
        </div> */}
      </div>
    </section>
  );
}
