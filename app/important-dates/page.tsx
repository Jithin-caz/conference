export default function ImportantDatesPage() {
  const dates = [
    { event: 'Start of Abstract Submission', date: 'April 6, 2026', past: false },
    { event: 'Abstract Submission Deadline', date: 'April 25, 2026', past: false },
    { event: 'Notification of Acceptance', date: 'April 23, 2026', past: false },
    { event: 'Full paper Submission Deadline', date: 'May 1, 2026 (Optional)', past: false },
    { event: 'Conference Dates', date: 'May 07 - 08, 2026 (Hybrid Mode)', past: false },
  ];

  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Important Dates</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl">
        <div className="relative border-l border-[rgba(0,0,0,0.1)] ml-4">
          {dates.map((item, index) => (
            <div key={index} className="mb-10 ml-8 relative group">
              <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-11 ring-4 ring-[#060913] transition-colors duration-300 ${item.past ? 'bg-surface-light text-foreground-muted' : 'bg-primary text-white group-hover:scale-110 shadow-[0_0_10px_rgba(14,165,233,0.5)]'}`}>
                {item.past ? (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                )}
              </span>
              <h3 className={`flex items-center mb-1 text-lg font-semibold ${item.past ? 'text-foreground-muted line-through opacity-70' : 'text-foreground'}`}>
                {item.event}
              </h3>
              <time className={`block mb-2 text-sm font-normal leading-none ${item.past ? 'text-foreground-muted opacity-70' : 'text-primary'}`}>
                {item.date}
              </time>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
