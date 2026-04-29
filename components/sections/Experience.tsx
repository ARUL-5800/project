"use client";

const jobs = [
  {
    period: "Dec 2022 — Present",
    role: "Software Engineer",
    company: "Petrus Technologies (LMW Group)",
    points: [
      "Designed and developed RESTful APIs using Python and Flask for real-time industrial IoT monitoring.",
      "Built serverless backends with AWS Lambda and DynamoDB for high-frequency machine data ingestion.",
      "Implemented ETL pipelines using AWS Glue for KPI dashboards and analytics.",
      "Integrated EC2, S3, SNS and DynamoDB to build scalable cloud solutions.",
      "Managed DynamoDB and MongoDB for real-time and batch operations.",
      "Automated deployments, testing and operational tasks using Python.",
      "Delivered requirement-accurate APIs with minimal revisions, improving reliability.",
    ],
  },
  {
    period: "Sep 2021 — Dec 2022",
    role: "Quality Assurance Engineer",
    company: "L.G. Balakrishnan & Bros Ltd.",
    points: [
      "Executed QA processes in mechanical production systems.",
      "Worked with engineering teams validating workflows and data accuracy.",
      "Gained foundational exposure to manufacturing systems and industrial IoT data flows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl font-bold tracking-tight">
            Where I've been
            <span className="text-cyan-500"> building.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_.8fr] gap-20">
          {/* LEFT TIMELINE */}
          <div className="relative border-l border-slate-300 ml-4">
            {jobs.map((job) => (
              <div key={job.role} className="pl-10 mb-24 relative">
                <div
                  className="
absolute
-left-4
top-1
w-7 h-7
rounded-full
bg-cyan-500
border-4 border-white
shadow-lg
"
                />

                <p
                  className="
uppercase
tracking-[6px]
text-cyan-700
font-medium
mb-2
text-m
"
                >
                  {job.period}
                </p>

                <h3 className="text-5xl font-bold mb-3 text-slate-900">
                  {job.role}
                </h3>

                <p className="text-2xl text-slate-500 mb-10">{job.company}</p>

                <ul className="space-y-7">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="
flex gap-4
text-lg
leading-relaxed
text-slate-700
"
                    >
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE CARD */}
          <div>
            <div
              className="
sticky top-32
bg-white/90
backdrop-blur-xl
rounded-[34px]
p-10
shadow-[0_20px_60px_rgba(15,23,42,.08)]
border border-slate-200
"
            >
              <p
                className="
uppercase
tracking-[4px]
text-cyan-600
text-sm
mb-8
"
              >
                Education
              </p>

              <h3
                className="
text-4xl
font-bold
leading-tight
mb-6
text-slate-900
"
              >
                B.E, Mechanical Engineering
              </h3>

              <p className="text-xl text-slate-500 mb-10">
                SVS College of Engineering, Coimbatore
              </p>

              <p
                className="
tracking-[4px]
text-cyan-600
mb-14
"
              >
                2017 — 2021
              </p>

              <div
                className="
border-t
border-slate-200
pt-10
"
              >
                <p
                  className="
uppercase
tracking-[4px]
text-sm
text-cyan-600
mb-6
"
                >
                  Recognition
                </p>

                <div
                  className="
rounded-3xl
bg-gradient-to-r
from-indigo-50
to-cyan-50
p-8
border border-indigo-100
"
                >
                  <h4 className="text-2xl font-bold mb-3 text-slate-900">
                    🏆 Spotlight Award
                  </h4>

                  <p className="text-slate-700 leading-relaxed">
                    Awarded in April 2025 for backend development excellence,
                    high-quality API delivery and strong ownership in cloud
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
