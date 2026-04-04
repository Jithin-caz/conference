export default function AboutPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">About Us</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Mar Athanasius College of Engineering</h2>
          <p className="text-foreground-muted leading-relaxed">
            Mar Athanasius College of Engineering pioneered engineering education in central Kerala in 1961. Managed by Mar Athanasius College Association and aided by the Government of Kerala, it was the first engineering college in Asia under Christian management. Affiliated to APJ Abdul Kalam Technological University, the institution has six full-fledged departments and continues to grow by leaps and bounds.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Mechanical Engineering Department</h2>
          <p className="text-foreground-muted leading-relaxed">
            Established in 1961, the Mechanical Engineering Department is recognized among the best in the state and pioneering in India. Known for academic excellence, state-of-the-art facilities, and experienced faculty, it has consistently produced world-class professionals who make their mark globally in industries ranging from aerospace and automotive to artificial intelligence and sustainable energy.
          </p>
        </div>
      </div>
    </div>
  );
}
