const speakers = [
  { 
    name: "Dr. Madhavi Latha Gali", 
    role: "Professor", 
    org: "Indian Institute of Science Bangalore",
  },
  { 
    name: "Speaker Two", 
    role: "Designation", 
    org: "Organization / University",
  },
  { 
    name: "Speaker Three", 
    role: "Designation", 
    org: "Organization / University",
  },
  { 
    name: "Speaker Four", 
    role: "Designation", 
    org: "Organization / University",
  },
  { 
    name: "Speaker Five", 
    role: "Designation", 
    org: "Organization / University",
  }
];

export default function KeynoteSpeakers() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Keynote Speakers</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">Meet our distinguished keynote speakers who will be sharing their invaluable insights and latest research findings.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary/80"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 ring-4 ring-[rgba(0,0,0,0.02)] overflow-hidden shrink-0">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{speaker.name}</h3>
            <p className="text-xs font-semibold text-primary mb-2">{speaker.role}</p>
            <p className="text-xs text-foreground-muted">{speaker.org}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
