import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-surfce mix-blend-multiply opacity-50"></div>
        {/* Animated grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border !border-[rgba(0,0,0,0.1)] mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
          <span className="text-sm font-medium tracking-wide text-foreground-muted">07 - 08 May 2026 &bull; Kothamangalam, Kerala</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-foreground tracking-tight mb-6 leading-tight">
          International Conference on <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
             Resilient Infrastructure <br className="hidden md:block"/> and Sustainable Engineering
          </span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto font-medium">
          Shaping Resilient & Sustainable Infrastructure for Tomorrow.
        </p>

        <div className="mt-4 text-base text-foreground-muted max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <Image src="/clglogo.png" alt="MACE Logo" width={64} height={64} className="object-contain" />
          <p className="text-center md:text-left">
            Organized by Mar Athanasius College of Engineering <br/>
            (Govt. Aided, Autonomous Institution, Estd. in 1961)
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/registration"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Register Now
          </Link>
          <Link
            href="/call-for-papers"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-foreground glass hover:bg-[rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
          >
            Call for Papers
          </Link>
        </div>

        {/* Status Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-[rgba(0,0,0,0.1)] pt-12 text-left">
          <div>
            <p className="text-3xl font-heading font-bold text-foreground">50+</p>
            <p className="text-sm text-foreground-muted uppercase tracking-wider">Speakers</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-foreground">200+</p>
            <p className="text-sm text-foreground-muted uppercase tracking-wider">Attendees</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-foreground">15+</p>
            <p className="text-sm text-foreground-muted uppercase tracking-wider">Workshops</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-foreground">3</p>
            <p className="text-sm text-foreground-muted uppercase tracking-wider">Days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
