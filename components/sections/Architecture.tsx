"use client";

import { motion } from "framer-motion";

const flow = [
  {
    name: "Devices",
    sub: "Telemetry Sources",
    icon: "📡",
  },
  {
    name: "Kafka / IoT",
    sub: "Streaming Layer",
    icon: "⚡",
  },
  {
    name: "DynamoDB",
    sub: "Storage",
    icon: "🗄️",
  },
  {
    name: "Lambda",
    sub: "Processing",
    icon: "⚙️",
  },
  {
    name: "Dashboards",
    sub: "Visualization",
    icon: "📊",
  },
];

export default function Architecture() {
  return (
    <section className="py-10 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6"
            style={{
              background: "#EEF2FF",
              color: "#4338CA",
              border: "1.5px solid #C7D2FE",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#6366F1",
                display: "inline-block",
              }}
            />
            System Design
          </p>

          <h2 className="text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Architecture Thinking
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Example industrial real-time data flow built using event-driven
            cloud-native architecture.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
bg-white
rounded-[40px]
p-10
border border-slate-100
shadow-[0_30px_80px_rgba(15,23,42,.08)]
"
        >
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {flow.map((item, index) => (
              <div key={item.name} className="relative">
                <div
                  className="
group
bg-slate-50
hover:bg-cyan-50
rounded-3xl
p-8
border border-slate-200
text-center
hover:-translate-y-2
transition-all
"
                >
                  <div
                    className="
w-16 h-16
mx-auto mb-6
rounded-2xl
bg-gradient-to-br
from-cyan-500
to-indigo-500
text-white
text-3xl
flex items-center justify-center
shadow-lg
group-hover:scale-110
transition
"
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-slate-500">{item.sub}</p>
                </div>

                {index !== flow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 text-cyan-500 text-3xl font-light">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10">
            <div
              className="
rounded-[32px]
bg-slate-950
p-10
text-green-400
shadow-2xl
overflow-auto
"
            >
              <pre className="text-lg leading-10 font-mono">
                {`Devices
↓
Kafka / AWS IoT Core
↓
SQS
↓
DynamoDB + GSIs
↓
Glue Aggregations
↓
Reporting APIs
↓
Lambda
↓
Dashboards`}
              </pre>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Streaming Ingestion
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Telemetry ingestion through Kafka and AWS IoT pipelines with
                  scalable event processing.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Analytics Layer
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Aggregation pipelines compute OEE, KPIs and reporting
                  datasets.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Cloud Scale
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Designed for high-volume industrial workloads and distributed
                  storage patterns.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
mt-16
rounded-[36px]
p-12
bg-gradient-to-r
from-cyan-500
to-indigo-500
text-white
text-center
shadow-2xl
"
          >
            <h3 className="text-5xl font-bold mb-6">Event-Driven by Design</h3>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Architecting resilient pipelines for streaming data, real-time
              analytics and scalable cloud services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
