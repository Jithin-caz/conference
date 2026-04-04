export default function CallForPapersPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Call for Papers</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 text-center text-foreground-muted">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 ring-1 ring-primary/30">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground">Submit Your Research</h2>
        <p className="text-lg">
          We invite researchers, academicians, and industry professionals to submit original, unpublished research papers for the National Conference on Energy, Environment and Engineering.
        </p>
        <p>
          Topics of interest include but are not limited to Sustainable Materials, Renewable Energy Systems, Robotics, Thermal Management, and Automation.
        </p>
        
        <div className="mt-8 p-6 bg-surface-light rounded-xl border border-[rgba(0,0,0,0.05)] text-left">
          <h3 className="text-xl font-bold text-foreground mb-4 border-b border-[rgba(0,0,0,0.1)] pb-2">Submission Guidelines</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground-muted mt-4 text-sm">
            <li>Submissions must be original and not currently under review elsewhere.</li>
            <li>Papers must follow the standard IEEE formatting template.</li>
            <li>Abstracts should not exceed 250 words.</li>
            <li>Use the Microsoft CMT service for all submissions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
