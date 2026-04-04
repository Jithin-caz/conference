export default function ContactPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Contact Us</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-foreground-muted mb-8 text-sm leading-relaxed">
            Have questions about the conference, paper submission, or registration? 
            Our organizing committee is here to help. Reach out to us via email or visit our campus.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">Address</h3>
                <p className="text-sm text-foreground-muted">
                  Mar Athanasius College of Engineering,<br/>
                  Kothamangalam, Kerala 686666, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">Email Support</h3>
                <a href="mailto:info@nce3mace.com" className="text-sm text-primary hover:text-primary-dark transition-colors">
                  info@nce3mace.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">Phone Inquiry</h3>
                <p className="text-sm text-foreground-muted">
                  +91-XXXX-XXX-XXX<br/>
                  Mon-Fri, 9am-5pm IST
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-2 rounded-3xl overflow-hidden min-h-[400px]">
          {/* Using a placeholder for Google Maps embed or similar visual */}
          <div className="w-full h-full bg-surface border border-[rgba(0,0,0,0.05)] rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="p-6 text-center relative z-10 transition-transform duration-500 group-hover:scale-105">
              <div className="mb-4 inline-block w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto ring-4 ring-[rgba(0,0,0,0.02)]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-foreground font-bold text-xl mb-2">Campus Map</h3>
              <p className="text-foreground-muted text-sm max-w-[200px] mx-auto">Interactive map embed goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
