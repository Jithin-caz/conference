interface InfoProps {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
  imageOnRight?: boolean;
}

export default function InfoSection({ title, content, imageUrl, imageOnRight = false }: InfoProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-16 items-center ${imageOnRight ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Content Side */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground relative">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full"></span>
              {title}
            </h2>
            <div className="text-foreground-muted text-lg leading-relaxed space-y-6">
              {content}
            </div>
          </div>

          {/* Image/Visual Side */}
          <div className="flex-1 w-full relative">
            {/* Decorative background for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-[40px] transform -rotate-6 scale-105"></div>
            
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel group">
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-surface-light flex items-center justify-center">
                  {/* Placeholder geometric pattern */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  <div className="text-6xl text-primary/50 font-heading font-bold rotate-[-10deg] group-hover:rotate-0 transition-all duration-500">
                    MACE
                  </div>
                </div>
              )}
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,9,19,0.8)] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
