import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <>
      <NewsTicker />
      <Hero />
      

      {/* Keynote Speaker Section */}
      <InfoSection 
        title="Keynote Speaker"
        imageOnRight={true}
        content={
          <>
            <h3 className="text-2xl font-bold text-foreground mb-1">Dr. Madhavi Latha Gali</h3>
            <p className="text-primary font-medium mb-4 text-lg">Professor, Indian Institute of Science Bangalore</p>
            <p>
              We are honored to welcome Dr. Madhavi Latha Gali as our keynote speaker for MACE RISE '26. She is a renowned Professor at the Indian Institute of Science Bangalore, contributing significantly to the fields of Geotechnical and Civil Engineering.
            </p>
          </>
        }
      />

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
        imageUrl="/mace.jpg"
        imageOnRight={false}
        content={
          <>
            <p className="mb-4">
              The Civil Engineering Department comprises well-qualified faculty and technical staff dedicated to imparting quality education. The department offers a comprehensive B.Tech programme in Civil Engineering, alongside specialized M.Tech programmes in Structural Engineering & Construction Management, and Computer Aided Structural Engineering. To foster academic and research excellence, we are equipped with state-of-the-art facilities—including a Research Centre, a well-stocked library, and specialized laboratories for CAD, Concrete, Environmental, Geotechnical, Masonry, and Structural Engineering.
            </p>
            <p>
              Beyond the classroom, the department emphasizes practical exposure through technical visits, expert talks, and industry projects. We provide robust training, career guidance, and internship opportunities to enhance student employability. Furthermore, strong alumni support and active participation in social services like NSS provide students with valuable industry insights and foster a sense of community responsibility. Overall, we are committed to empowering students with the knowledge and practical skills needed to succeed as responsible Civil Engineers.
            </p>
          </>
        }
      />
    </>
  );
}
