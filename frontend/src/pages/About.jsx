import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

  return (
    <div>

      <Navbar />

      <section className="about">

        <h2>About InternTrack</h2>

        <p>
          InternTrack helps students manage internship applications,
          track interview progress, and organize job opportunities
          in one simple dashboard.
        </p>

        <p>
          The platform provides tools to monitor application status,
          upcoming deadlines, and internship offers so students can
          stay organized throughout the job search process.
        </p>

      </section>

      <Footer />

    </div>
  );

}

export default About;