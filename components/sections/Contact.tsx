export default function Contact() {
  return (
    <section id="contact" className="py-10 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="
uppercase
tracking-[4px]
text-cyan-600
font-medium
mb-6
"
        >
          Contact
        </p>

        <h2
          className="
text-7xl
font-bold
tracking-tight
leading-tight
mb-8
text-slate-900
"
        >
          Let's Build
          <span className="text-cyan-500"> Something.</span>
        </h2>

        <p
          className="
text-xl
text-slate-600
max-w-3xl
mx-auto
leading-relaxed
mb-14
"
        >
          Open to backend, cloud and data engineering opportunities,
          collaborations and product building.
        </p>

        <div
          className="
flex
justify-center
gap-6
flex-wrap
"
        >
          <a
            href="mailto:ayyanararul5012@gmail.com"
            className="
px-10 py-5
rounded-2xl
text-white
font-semibold
bg-gradient-to-r
from-cyan-500
to-indigo-500
shadow-[0_10px_35px_rgba(59,130,246,.30)]
hover:-translate-y-1
transition
"
          >
            📧 Email Me
          </a>

          <a
            href="https://github.com/ARUL-5800"
            target="_blank"
            className="
px-10 py-5
rounded-2xl
bg-white
border border-slate-200
shadow-lg
text-slate-800
font-medium
hover:-translate-y-1
hover:shadow-xl
transition
"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arulselvam-a-523054251"
            target="_blank"
            className="
px-10 py-5
rounded-2xl
bg-white
border border-slate-200
shadow-lg
text-slate-800
font-medium
hover:-translate-y-1
hover:shadow-xl
transition
"
          >
            💼 LinkedIn
          </a>
        </div>

        {/* <div
          className="
mt-20
grid md:grid-cols-3
gap-8
"
        >
          <div
            className="
bg-white
rounded-3xl
p-8
shadow-lg
border border-slate-100
"
          >
            <h3 className="text-3xl font-bold text-slate-900">Cloud</h3>

            <p className="text-slate-500 mt-3">AWS • Serverless • Data</p>
          </div>

          <div
            className="
bg-white
rounded-3xl
p-8
shadow-lg
border border-slate-100
"
          >
            <h3 className="text-3xl font-bold text-slate-900">Backend</h3>

            <p className="text-slate-500 mt-3">Python • APIs • gRPC</p>
          </div>

          <div
            className="
bg-white
rounded-3xl
p-8
shadow-lg
border border-slate-100
"
          >
            <h3 className="text-3xl font-bold text-slate-900">IoT Data</h3>

            <p className="text-slate-500 mt-3">Streaming • Analytics</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
