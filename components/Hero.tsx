import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16"
      style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Glow Effects inside the background - kept for dynamic feel, but removed dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,0,0,0.1)] mb-8 animate-fade-in-up shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
          <span className="text-sm tracking-wide text-slate-800 font-semibold drop-shadow-sm">07 - 08 May 2026 &bull; Kothamangalam, Kerala</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 tracking-tight mb-6 leading-tight [text-shadow:0_0_30px_rgb(255_255_255/100%),0_0_10px_rgb(255_255_255/80%)]">
          International Conference on <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary [text-shadow:0_0_20px_rgb(255_255_255/60%)]">
             Resilient Infrastructure <br className="hidden md:block"/> and Sustainable Engineering
          </span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-bold [text-shadow:0_1px_15px_rgb(255_255_255/100%),0_1px_2px_rgb(255_255_255/100%)]">
          Shaping Resilient & Sustainable Infrastructure for Tomorrow.
        </p>

        <div className="mt-4 text-base text-slate-800 font-semibold max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 [text-shadow:0_1px_10px_rgb(255_255_255/100%)]">
          <div className="bg-white/80 p-2 rounded-xl backdrop-blur-sm shadow-sm border border-black/5">
             <Image src="/clglogo.png" alt="MACE Logo" width={64} height={64} className="object-contain" />
          </div>
          <p className="text-center md:text-left">
            Organized by Mar Athanasius College of Engineering <br/>
            (Govt. Aided, Autonomous Institution, Estd. in 1961)
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/registration"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-primary to-primary-dark shadow-[0_4px_20px_rgba(28,64,78,0.3)] hover:shadow-[0_8px_30px_rgba(28,64,78,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Register Now
          </Link>
          <Link
            href="/call-for-papers"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-primary glass hover:bg-[rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
          >
            Call for Papers
          </Link>
        </div>

        {/* Status Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-black/10 pt-12 text-left bg-white/30 backdrop-blur-sm rounded-3xl p-6 shadow-sm border">
          <div>
            <p className="text-3xl font-heading font-bold text-slate-900 drop-shadow-sm">50+</p>
            <p className="text-sm text-slate-700 font-bold uppercase tracking-wider">Speakers</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-slate-900 drop-shadow-sm">200+</p>
            <p className="text-sm text-slate-700 font-bold uppercase tracking-wider">Attendees</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-slate-900 drop-shadow-sm">15+</p>
            <p className="text-sm text-slate-700 font-bold uppercase tracking-wider">Workshops</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-slate-900 drop-shadow-sm">3</p>
            <p className="text-sm text-slate-700 font-bold uppercase tracking-wider">Days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
