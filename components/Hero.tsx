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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Image 
          src="/conf_logo.png" 
          alt="MACE RISE Logo" 
          width={180} 
          height={180} 
          className="object-contain mb-8 drop-shadow-xl animate-fade-in-up" 
        />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,0,0,0.1)] mb-8 animate-fade-in-up shadow-sm" style={{ animationDelay: '0.1s' }}>
          <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
          <span className="text-sm tracking-wide text-slate-800 font-semibold drop-shadow-sm">07 - 08 May 2026 (Hybrid Mode) &bull;MACE Kothamangalam, Kerala</span>
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
            Organized by Mar Athanasius College of Engineering 
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_-WsmnbvHWTZc7mr3kk-A8rOyoywgwUr3L-NgbvisxUwAKg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
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
       
      </div>
    </section>
  );
}
