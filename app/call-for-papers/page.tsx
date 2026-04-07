import Link from 'next/link';

export default function CallForPapersPage() {
  const tracks = [
    "Sustainable Infrastructure Development",
    "Advances in Structural Engineering & Materials",
    "Resilient Transportation Systems",
    "Water & Environmental Engineering Innovations",
    "Smart & Green Building Technologies",
    "Geotechnical Engineering for Sustainability",
    "Urban Planning & Climate Resilient Infrastructure",
    "Infrastructure Asset Management & Sustainability"
  ];

  return (
    <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Call for Papers</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-10 text-foreground-muted">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 ring-1 ring-primary/30">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Submit Your Research</h2>
          <p className="text-lg max-w-3xl mx-auto mb-4">
            We invite researchers, academicians, and industry professionals to submit original, unpublished research papers for the International Conference on Resilient Infrastructure and Sustainable Engineering (MACE RISE '26).
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-[rgba(0,0,0,0.1)] pb-2 text-center md:text-left">Conference Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center p-4 bg-surface rounded-xl border border-[rgba(0,0,0,0.05)] hover:border-primary/30 transition-colors">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-4 shrink-0 shadow-inner">
                  {index + 1}
                </span>
                <span className="text-foreground font-medium">{track}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="p-6 bg-surface-light rounded-2xl border border-[rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Templates & Downloads</h3>
              <p className="text-sm mb-6">Format your submission correctly using our official guidelines and provided templates. Abstracts should not exceed 500 words.</p>
            </div>
            <div className="space-y-3">
              <a href="/Abstract_Template.docx" download className="w-full inline-flex items-center justify-center px-4 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Download Abstract Template
              </a>
              <a href="#" className="w-full inline-flex items-center justify-center px-4 py-3 border-2 border-[rgba(0,0,0,0.05)] text-foreground-muted font-semibold rounded-xl hover:bg-surface transition-colors cursor-not-allowed">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Paper Template (Coming Soon)
              </a>
            </div>
          </div>
          
          <div className="p-6 bg-surface-light rounded-2xl border border-[rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Submission Guidelines</h3>
              <ul className="list-disc list-inside space-y-3 text-sm">
                <li>Submissions must be original and not currently under review elsewhere.</li>
                <li>Abstracts should not exceed 500 words.</li>
                <li>All papers will undergo a rigorous peer-review process.</li>
                <li>Accepted papers will be published in ISBN-indexed conference proceedings.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-[rgba(0,0,0,0.1)] pb-2 text-center md:text-left">Registration Fees</h3>
          <div className="overflow-x-auto rounded-xl border border-[rgba(0,0,0,0.1)] bg-surface-light/30 max-w-3xl mx-auto md:mx-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-light text-foreground-muted">
                  <th className="py-4 px-6 font-semibold border-b border-[rgba(0,0,0,0.1)]">Category</th>
                  <th className="py-4 px-6 font-semibold border-b border-[rgba(0,0,0,0.1)] text-right">Fee (INR)</th>
                </tr>
              </thead>
              <tbody className="bg-surface">
                <tr className="border-b border-[rgba(0,0,0,0.05)] hover:bg-surface-light/50 transition">
                  <td className="py-4 px-6 text-foreground">Regular Attendee/ Indian Research Scholar</td>
                  <td className="py-4 px-6 text-foreground font-medium text-right">1000</td>
                </tr>
                <tr className="border-b border-[rgba(0,0,0,0.05)] hover:bg-surface-light/50 transition">
                  <td className="py-4 px-6 text-foreground">ASCE/BAI/ICI/IGS Student Member</td>
                  <td className="py-4 px-6 text-foreground font-medium text-right">750</td>
                </tr>
                <tr className="border-b border-[rgba(0,0,0,0.05)] hover:bg-surface-light/50 transition">
                  <td className="py-4 px-6 text-foreground">International Research Scholar</td>
                  <td className="py-4 px-6 text-foreground font-medium text-right">3000</td>
                </tr>
                <tr className="hover:bg-surface-light/50 transition">
                  <td className="py-4 px-6 text-foreground">Industry Delegate/ Other</td>
                  <td className="py-4 px-6 text-foreground font-medium text-right">2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-[rgba(0,0,0,0.1)]">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Us?</h3>
          <p className="mb-6 max-w-2xl mx-auto">Registration will open shortly. Prepare your abstracts using the template and secure your place at this year's conference to be part of the future of sustainable engineering.</p>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_-WsmnbvHWTZc7mr3kk-A8rOyoywgwUr3L-NgbvisxUwAKg/viewform?usp=publish-editor" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-primary to-primary-dark shadow-[0_4px_15px_rgba(28,64,78,0.3)] hover:shadow-[0_8px_25px_rgba(28,64,78,0.4)] transition-all hover:-translate-y-1">
            Register Now
          </Link>
        </div>

      </div>
    </div>
  );
}
