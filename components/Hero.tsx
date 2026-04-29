"use client";

import { motion } from "framer-motion";

export default function Hero() {
return (
<section className="min-h-screen flex items-center justify-between px-12">

<div className="max-w-4xl">

<p className="mb-6 text-sm border px-4 py-2 rounded-full inline-block">
IoT Software Engineer • AWS • Distributed Systems
</p>

<h1 className="text-7xl font-black leading-tight">
Building
<span className="block text-zinc-500">
Scalable Cloud Systems
</span>
</h1>

<p className="mt-8 text-xl text-zinc-400 max-w-2xl">
I design real-time industrial data platforms,
DynamoDB-backed APIs, and AWS data pipelines
processing millions of records.
</p>

<div className="flex gap-4 mt-10">
<button className="px-6 py-3 rounded-2xl border">
View Projects
</button>
<button className="px-6 py-3 rounded-2xl bg-white text-black">
Contact Me
</button>
</div>

</div>

<div className="border rounded-3xl p-8">
<pre>{`
Telemetry: ACTIVE
Assets: 400+
Records: 10M+
Latency: 42ms
`}</pre>
</div>

</section>
)
}