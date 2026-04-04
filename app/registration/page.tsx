'use client';

export default function RegistrationPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">Registration</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 max-w-2xl mx-auto text-center">
        
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-500 p-4 rounded-xl mb-8">
          <p className="font-semibold">Notice: Registration fees and details will be announced soon.</p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Participant Registration</h2>
        <p className="text-foreground-muted">
          Registration for MACE RISE '26 will open shortly. Please check back later for fee details and to access the registration form.
        </p>

        <form className="mt-8 space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground-muted">Full Name</label>
            <input type="text" id="name" className="w-full bg-surface border border-[rgba(0,0,0,0.1)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" placeholder="John Doe" disabled />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground-muted">Email Address</label>
            <input type="email" id="email" className="w-full bg-surface border border-[rgba(0,0,0,0.1)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" placeholder="john@example.com" disabled />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-foreground-muted">Participation Category</label>
            <select id="category" className="w-full bg-surface border border-[rgba(0,0,0,0.1)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" disabled>
              <option>Student</option>
              <option>Faculty/Academician</option>
              <option>Industry Professional</option>
            </select>
          </div>
          
          <button type="submit" disabled className="w-full py-4 rounded-xl font-bold bg-surface-light text-foreground-muted cursor-not-allowed border border-[rgba(0,0,0,0.05)] shadow-none">
            Registration Coming Soon
          </button>
        </form>
      </div>
    </div>
  );
}
