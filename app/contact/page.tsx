export default function ContactPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Contact Us</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col justify-center">
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
                <a href="mailto:ce.rise@mace.ac.in" className="text-sm text-primary hover:text-primary-dark transition-colors">
                  ce.rise@mace.ac.in
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
                  <strong className="text-foreground font-medium">Prof. Basil Jaimon</strong><br/>
                  Programme Coordinator<br/>
                  <a href="tel:9446067323" className="hover:text-primary transition-colors">9446067323</a>
                </p>
                <p className="text-sm text-foreground-muted">
                  <strong className="text-foreground font-medium">Prof. Alka Abraham </strong><br/>
                  Programme Coordinator<br/>
                  <a href="tel:9446067323" className="hover:text-primary transition-colors">99468 04776</a>
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
