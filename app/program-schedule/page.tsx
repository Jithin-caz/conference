export default function ProgramSchedulePage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Program Schedule</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 text-center text-foreground-muted">
        <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h2 className="text-2xl font-bold text-foreground">Conference Itinerary</h2>
        <p className="text-lg pb-6">
          The program schedule for both offline and online presentations is now available. Let's explore the tracks and sessions planned for the robust three-day event.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-[rgba(0,0,0,0.02)] rounded-xl border border-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.05)] transition duration-300">
            <h3 className="text-xl font-bold text-foreground mb-2">Offline Presentations</h3>
            <p className="text-sm mb-4">Venue: Main Auditorium</p>
            <button className="px-6 py-2 bg-surface text-primary border border-primary/50 hover:bg-primary hover:text-white rounded-full transition duration-300 text-sm font-semibold">
              View Schedule PDF
            </button>
          </div>
          
          <div className="p-6 bg-[rgba(0,0,0,0.02)] rounded-xl border border-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.05)] transition duration-300">
            <h3 className="text-xl font-bold text-foreground mb-2">Online Presentations</h3>
            <p className="text-sm mb-4">Venue: Virtual Room A & B</p>
            <button className="px-6 py-2 bg-surface text-primary border border-primary/50 hover:bg-primary hover:text-white rounded-full transition duration-300 text-sm font-semibold">
              Get Meeting Links
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
