import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-light border-t border-[rgba(0,0,0,0.05)] mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/clglogo.png" alt="MACE Logo" width={48} height={48} className="object-contain drop-shadow-sm" />
              <h3 className="text-xl font-heading font-bold text-foreground">MACE RISE '26</h3>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-md">
              International Conference on Resilient Infrastructure and Sustainable Engineering. 
              Organized by Mar Athanasius College of Engineering.
            </p>
            <p className="mt-4 text-sm text-foreground-muted text-gradient font-medium italic">
              "Shaping Resilient & Sustainable Infrastructure for Tomorrow"
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 tracking-wider text-sm uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-primary transition-colors">Call for Papers</Link></li>
              <li><Link href="/program-schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 tracking-wider text-sm uppercase">Contact</h4>
            <address className="not-italic text-sm text-foreground-muted space-y-2">
              <p>Mar Athanasius College of Engineering</p>
              <p>Kothamangalam, Kerala, India, 686666</p>
              <p className="pt-2">Email: <a href="mailto:info@macerise26.com" className="hover:text-primary transition-colors">info@macerise26.com</a></p>
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
