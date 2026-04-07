import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import InfoSection from "@/components/InfoSection";
import KeynoteSpeakers from "@/components/KeynoteSpeakers";

export default function Home() {
  return (
    <>
      <NewsTicker />
      <Hero />
      

      {/* About Sections */}
      <InfoSection 
        title="About MACE RISE"
        imageUrl="/conf_logo.png"
        imageOnRight={false}
        content={
          <>
            <p className="mb-4">
              MACE RISE 2026 (Resilient Infrastructure and Sustainable Engineering) is an International Conference organized by the Department of Civil Engineering, Mar Athanasius College of Engineering, Kothamangalam, to be held on May 07 & 08, 2026 (Hybrid Mode). The conference aims to bring together academicians, researchers, industry professionals, and students from across the globe to share knowledge, innovations, and recent advancements across all domains of civil engineering. It provides a dynamic platform for exploring emerging trends, sustainable practices, and technological developments in infrastructure and the built environment.
            </p>
            <p className="mb-4">
              The conference emphasizes interdisciplinary collaboration and promotes research addressing real-world challenges in construction, transportation, water resources, geotechnical engineering, and environmental sustainability. Through keynote lectures, technical paper presentations, and interactive discussions, it seeks to inspire innovative solutions for resilient infrastructure. Participants are invited to submit abstracts (up to 500 words) by April 6 2026, and accepted papers will be published in ISBN-indexed conference proceedings. We warmly invite all to be part of this prestigious event and contribute to shaping the future of civil engineering.
            </p>
          </>
        }
      />

      {/* Tracks Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Sustainable Infrastructure Development",
            "Advances in Structural Engineering & Materials",
            "Resilient Transportation Systems",
            "Water & Environmental Engineering Innovations",
            "Smart & Green Building Technologies",
            "Geotechnical Engineering for Sustainability",
            "Urban Planning & Climate Resilient Infrastructure",
            "Infrastructure Asset Management & Sustainability"
          ].map((track, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary/80">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-4 shrink-0 shadow-inner">
                {index + 1}
              </span>
              <p className="text-foreground font-medium text-sm leading-tight">{track}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Keynote Speakers Section */}
      <KeynoteSpeakers />
      <InfoSection 
        title="About the Institution"
        imageUrl="/mace.jpg"
        imageOnRight={true}
        content={
          <>
            <p>
              Mar Athanasius College of Engineering pioneered engineering education in central Kerala in 1961. 
              Managed by Mar Athanasius College Association, Aided by the Government of Kerala, the college 
              was the first engineering college in Asia under Christian management.
            </p>
            <p>
              The college is affiliated to APJ Abdul Kalam Technological University. MACE, as it is popularly 
              known, has grown by leaps and bounds since. It now has six full-fledged departments apart from 
              the two auxiliary departments of Mathematics and Science and Humanities.
            </p>
          </>
        }
      />

      <InfoSection 
        title="About the Department"
        images={[
          "/gallery/519A7714-scaled.jpg",
          "/gallery/519A8511-scaled.jpg",
          "/gallery/DSC05472-scaled.jpg",
          "/gallery/DSC05554-scaled.jpg",
          "/gallery/DSC05625-scaled.jpg",
          "/gallery/DSC05721-scaled.jpg",
          "/gallery/GT-scaled.jpg"
        ]}
        imageOnRight={false}
        content={
          <>
            <p className="mb-4">
              The Civil Engineering Department has a team of well-qualified teachers and technical staff who constantly strive to impart quality technical education in undergraduate and post-graduate programmes. The department offers an undergraduate programme in Civil Engineering and a post-graduate programme in Structural Engineering and Construction Management, and Computer Aided Structural Engineering. To support academic excellence, the department is equipped with state-of-the-art facilities, including a Research Centre, specialized laboratories such as CAD Lab, Concrete Research Lab, Environmental Engineering Lab, Geotechnical Engineering Lab, Masonry Lab, Structural Engineering Lab, and Surveying Lab, as well as a well-stocked department library.
            </p>
            <p>
              In addition to classroom training, the department places strong emphasis on providing students with practical exposure through technical visits, expert talks, and industry projects, designed to give students hands-on experience and insight into real-world engineering challenges.
            </p>
          </>
        }
      />

      {/* Gallery Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Gallery</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground-muted">Glimpses of Mar Athanasius College of Engineering</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 group/gallery">
          {[
            "519A7714-scaled.jpg",
            "519A8511-scaled.jpg",
            "DSC05472-scaled.jpg",
            "DSC05554-scaled.jpg",
            "DSC05625-scaled.jpg",
            "DSC05721-scaled.jpg",
            "GT-scaled.jpg"
          ].map((img, index) => (
            <div key={index} className="break-inside-avoid relative rounded-2xl overflow-hidden group/item shadow-sm hover:!shadow-xl hover:!opacity-100 hover:!blur-none border border-[rgba(0,0,0,0.05)] transition-all duration-500 group-hover/gallery:opacity-50 group-hover/gallery:blur-[2px]">
              <img 
                src={`/gallery/${img}`} 
                alt={`MACE Gallery Image ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover/item:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
