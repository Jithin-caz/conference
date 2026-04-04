import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <>
      <NewsTicker />
      <Hero />
      
      {/* Introduction Note about CMT */}
      <section className="py-12 bg-surface-light/30 border-y border-[rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-foreground-muted italic leading-relaxed">
            "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided for free by Microsoft and they bore all expenses, including costs for 
            Azure cloud services as well as for software development and support."
          </p>
        </div>
      </section>

      {/* About Sections */}
      <InfoSection 
        title="About the Institution"
        imageUrl="/clglogo.png"
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
        imageOnRight={false}
        content={
          <>
            <p>
              The Mechanical Engineering Department, established in 1961, is one of the best in the state and 
              among the few pioneering engineering institutes across India. Renowned for its academic excellence, 
              cutting-edge facilities, and highly qualified faculty, the department has upheld a legacy of 
              producing world-class mechanical engineers.
            </p>
            <p>
              With the advent of transformative technologies like electric vehicles, robotics, sustainable 
              energy systems, and artificial intelligence, these programs have evolved to play a pivotal role 
              in shaping the future of engineering. Graduates from the department enjoy excellent career 
              prospects across industries such as automotive, aerospace, energy, manufacturing, and AI.
            </p>
          </>
        }
      />
    </>
  );
}
