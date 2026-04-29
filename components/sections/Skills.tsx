"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Cloud Infrastructure",
    icon: "☁️",
    color: "from-indigo-500 to-blue-500",
    skills: ["AWS Lambda", "DynamoDB", "AWS Glue", "S3", "CloudWatch"],
  },
  {
    title: "Backend Engineering",
    icon: "⚙️",
    color: "from-cyan-500 to-sky-500",
    skills: ["Python", "FastAPI", "gRPC", "Kafka", "REST APIs"],
  },
  {
    title: "Data Engineering",
    icon: "📊",
    color: "from-emerald-500 to-teal-500",
    skills: [
      "Polars",
      "Pandas",
      "ETL Pipelines",
      "Data Modeling",
      "Aggregation",
    ],
  },
];

const stats = [
  {
    value: "3.5+",
    label: "Years Experience",
  },
  {
    value: "700+",
    label: "Assets Managed",
  },
  {
    value: "10M+",
    label: "Records Processed",
  },
  {
    value: "AWS",
    label: "Cloud Focused",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-3 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p
            className="
inline-block
px-6 py-3
rounded-full
bg-black
border border-slate-200
shadow
font-medium
mb-6
"
          >
            Technical Stack
          </p>

          <h2
            className="
text-6xl
font-bold
tracking-tight
mb-6
text-slate-900
"
          >
            Engineering Expertise
          </h2>

          <p
            className="
text-xl
text-slate-600
max-w-3xl
mx-auto
leading-relaxed
"
          >
            Designing scalable cloud systems, backend services and high-volume
            data platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
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
"
            >
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`
w-16 h-16
rounded-2xl
bg-gradient-to-br
${group.color}
text-white
text-3xl
flex items-center justify-center
shadow-lg
group-hover:rotate-6
group-hover:scale-110
transition
`}
                >
                  {group.icon}
                </div>

                <div className="w-20 h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-r ${group.color}`}
                  />
                </div>
              </div>

              <h3
                className="
text-4xl
font-semibold
tracking-tight
mb-10
text-slate-900
"
              >
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
flex items-center justify-between
bg-slate-50
hover:bg-cyan-50
rounded-2xl
px-5 py-4
hover:-translate-y-1
transition
"
                  >
                    <span className="font-medium text-slate-700">{skill}</span>

                    <span
                      className="
w-8 h-8
rounded-full
bg-emerald-100
text-emerald-600
font-bold
flex items-center justify-center
"
                    >
                      ✓
                    </span>
                  </div>
                ))}
              </div>

              {/* <div
                className="
mt-8
pt-6
border-t border-slate-100
flex justify-between items-center
"
              >
                <span className="text-slate-500">Production Ready</span>

                <span
                  className="
text-cyan-600
font-semibold
group-hover:translate-x-2
transition
inline-block
"
                >
                  Explore →
                </span>
              </div> */}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-24">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
group
bg-white
rounded-3xl
p-8
text-center
shadow-xl
border border-slate-100
hover:shadow-2xl
transition-all
"
            >
              <h3
                className="
text-5xl
font-bold
text-slate-900
mb-3
group-hover:text-cyan-600
transition
"
              >
                {item.value}
              </h3>

              <p className="text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* <div
          className="
mt-20
bg-gradient-to-r
from-cyan-500
to-indigo-500
rounded-[36px]
p-14
text-white
shadow-2xl
text-center
"
        >
          <h3 className="text-5xl font-bold mb-6">Built for Scale</h3>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
            Cloud-native engineering focused on reliability, performance and
            industrial-scale data systems.
          </p>
        </div> */}
      </div>
    </section>
  );
}
