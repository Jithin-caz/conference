import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-light border-t border-[rgba(0,0,0,0.05)] mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/conf_logo.png" alt="MACE RISE Logo" width={48} height={48} className="object-contain drop-shadow-sm" />
              <h3 className="text-xl font-heading font-bold text-foreground">MACE RISE '26</h3>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-md">
              International Conference on Resilient Infrastructure and Sustainable Engineering. 
              Organized by the Department of Civil Engineering, Mar Athanasius College of Engineering.
            </p>
            <p className="mt-4 text-sm text-foreground-muted text-gradient font-medium italic">
              "Shaping Resilient & Sustainable Infrastructure for Tomorrow"
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 tracking-wider text-sm uppercase">Registration</h4>
            <p className="text-sm text-foreground-muted mb-4">Secure your spot at MACE RISE '26 today.</p>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoHoXHR0_e9yIXGOWdDI_V63EGEp72DNhWzZ_9-YSuczknnw/viewform?usp=preview" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Register Now
            </Link>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 tracking-wider text-sm uppercase">Contact</h4>
            <address className="not-italic text-sm text-foreground-muted space-y-2">
              <p>Mar Athanasius College of Engineering</p>
              <p>Kothamangalam, Kerala, India, 686666</p>
             <div className="pt-2 space-y-1">
                <p className="font-medium text-foreground">Dr. Alka Abraham</p>
                <p>Programme Coordinator</p>
                <p>Ph. No: <a href="tel:9446067323" className="hover:text-primary transition-colors">99468 04776</a></p>
              </div>
              <div className="pt-2 space-y-1">
                <p className="font-medium text-foreground">Prof. Basil Jaimon</p>
                <p>Programme Coordinator</p>
                <p>Ph. No: <a href="tel:9446067323" className="hover:text-primary transition-colors">9446067323</a></p>
              </div>
              
              <p className="pt-2">Email: <a href="mailto:ce.rise@mace.ac.in" className="hover:text-primary transition-colors">ce.rise@mace.ac.in</a></p>
            </address>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-[rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} MACE RISE '26 | Mar Athanasius College of Engineering
          </p>
          <div className="text-sm text-foreground-muted">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
