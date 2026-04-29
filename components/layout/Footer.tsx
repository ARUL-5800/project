"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    setTimeout(() => {
      const mailtoLink = `mailto:ayyanararul125@gmail.com?subject=New Portfolio Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

      window.location.href = mailtoLink;

      toast.success("Message sent successfully 🚀");

      form.reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-10 px-8">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[5px] text-cyan-600 font-medium mb-8">
              Contact
            </p>

            <h2 className="text-7xl font-bold leading-tight tracking-tight mb-8 text-slate-900">
              Let's build
              <br />
              something <span className="text-cyan-500">good.</span>
            </h2>

            <p className="text-2xl text-slate-600 leading-relaxed max-w-xl mb-14">
              Have a role, project idea, or want to discuss cloud engineering
              and IoT systems? My inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div
                  className="
w-14 h-14
rounded-2xl
bg-gradient-to-br
from-white
to-cyan-50
border border-slate-200
shadow-[0_8px_24px_rgba(15,23,42,.08)]
flex items-center justify-center
text-xl
text-cyan-600
"
                >
                  📩
                </div>

                <p className="text-xl text-slate-800 font-medium">
                  ayyanararul5012@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div
                  className="
w-14 h-14
rounded-2xl
bg-gradient-to-br
from-white
to-indigo-50
border border-slate-200
shadow-[0_8px_24px_rgba(15,23,42,.08)]
flex items-center justify-center
text-xl
text-indigo-600
"
                >
                  📞
                </div>

                <p className="text-xl text-slate-800 font-medium">
                  +91 70922 95012
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div
                  className="
w-14 h-14
rounded-2xl
bg-gradient-to-br
from-white
to-emerald-50
border border-slate-200
shadow-[0_8px_24px_rgba(15,23,42,.08)]
flex items-center justify-center
text-xl
text-emerald-600
"
                >
                  📍
                </div>

                <p className="text-xl text-slate-800 font-medium">
                  Coimbatore, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[38px] p-10 border border-slate-200 shadow-[0_20px_70px_rgba(15,23,42,.08)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* NAME */}
              <div>
                <label className="block uppercase tracking-[4px] text-sm text-cyan-600 mb-4">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-zinc-800 bg-white text-black placeholder:text-zinc-500 px-6 py-5 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block uppercase tracking-[4px] text-sm text-cyan-600 mb-4">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-zinc-800 bg-white text-black placeholder:text-zinc-500 px-6 py-5 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block uppercase tracking-[4px] text-sm text-cyan-600 mb-4">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl border border-zinc-800 bg-white text-black placeholder:text-zinc-500 px-6 py-5 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* BUTTON */}
              <button
                disabled={loading}
                className={`
w-full rounded-full py-5 text-lg font-semibold text-white
bg-gradient-to-r from-cyan-500 to-indigo-500
shadow-[0_10px_35px_rgba(59,130,246,.35)]
transition flex items-center justify-center gap-3
${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}
`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message ✈"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 pt-10 border-t border-slate-200 text-center text-slate-500">
          © 2026 Arul Selvam
        </div>
      </div>
    </section>
  );
}
