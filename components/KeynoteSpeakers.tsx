const speakers = [
  { 
    name: "Dr. Ram V G", 
    role: "Assistant Professor", 
    org: "Department of Civil Engineering, IIT Palakkad",
    image: "/Dr. Ram VG.jpg.jpeg"
  },
  { 
    name: "Yuvaraj Dhandapani", 
    role: "Lecturer", 
    org: "Institute of Functional Surface, School of Mechanical Engineering, University of Leeds, UK",
    image: "/DR. YUVARAJ DHANDAPANI.jpg.jpeg"
  },
  { 
    name: "Dr. A.V. Rahul", 
    role: "Assistant Professor", 
    org: "Civil & Environmental Engineering, IIT Tirupati",
    image: "/Dr. AV Rahul.jpg.jpeg"
  },
  { 
    name: "Deepak Kumar Kamde", 
    role: "Assistant Professor", 
    org: "Department of Civil Engineering, IIT Delhi",
    image: "/Deepak Kumar Kamde.jpg.jpeg"
  },
  { 
    name: "Anusha S. Basavaraj", 
    role: "Assistant Professor", 
    org: "Department of Civil and Infrastructure Engineering, IIT Jodhpur",
    image: "/ANUSHA SHIMOGA BASAVARAJ.jpg.jpeg"
  }
];

export default function KeynoteSpeakers() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">Keynote Speakers</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-foreground-muted max-w-3xl mx-auto">Meet our distinguished keynote speakers who will be sharing their invaluable insights and latest research findings.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] glass-panel p-8 rounded-3xl flex flex-col items-center text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-[6px] border-secondary"
          >
            <div className="w-40 h-40 rounded-full bg-surface border-4 border-white shadow-xl overflow-hidden shrink-0 mb-6 relative ring-4 ring-primary/20">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{speaker.name}</h3>
            <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{speaker.role}</p>
            <p className="text-sm text-foreground-muted leading-relaxed font-medium">{speaker.org}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
