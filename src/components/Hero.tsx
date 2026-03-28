import profileImage from "../assets/bg.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="group relative min-h-screen bg-cover bg-fixed"
        style={{ backgroundImage: `url(${profileImage})`, backgroundPositionY: "-50px" }}
        aria-label="Sivachandran portrait background"
        role="img"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/10 to-slate-950/100" />
        <div className="absolute inset-0 z-10 flex flex-col justify-between">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
            <div className="text-left text-white">
              <h1 className="mt-4 font-display uppercase text-[130px] font-semibold leading-tight [letter-spacing:10px]">
                Sivachandran<span className="text-[20px] text-slate-300">NKK</span>
              </h1>
              <div className="max-w-2xl">
                <p className="mt-6 text-lg text-slate-200">
                  I build AI solutions, Python systems, and full-stack cloud
                  applications that turn ambitious ideas into reliable, scalable products.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                  >
                    Connect
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
                    target="_blank"
                    className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 font-display text-slate-200 text-[30px]">
            Agentic AI &#x2022; Vibe Coder &#x2022; Pythonista &#x2022; TypeScriptist &#x2022; Spread <b className="text-[firebrick]">❤</b>
          </div>
        </div>
      </div>
    </section>
  );
}
