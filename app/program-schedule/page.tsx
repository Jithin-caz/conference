export default function ProgramSchedulePage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Programme Schedule</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 text-center text-foreground-muted">
        <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h2 className="text-2xl font-bold text-foreground">Conference Itinerary</h2>
        <p className="text-lg pb-2">
          The programme schedule for both offline and online presentations is now available. Let's explore the tracks and sessions planned for the robust three-day event.
        </p>
        
        <div className="mt-8">
          <a
            href="/schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-full shadow-sm text-base font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Schedule PDF
          </a>
        </div>

      </div>
    </div>
  );
}
