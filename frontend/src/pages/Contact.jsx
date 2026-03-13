import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  return (
    <div>

      <Navbar />

      <section className="contact">

        <h2>Contact Us</h2>

        <p>
          If you have any questions or suggestions about InternTrack,
          feel free to reach out to us.
        </p>

        <p>Email: support@interntrack.com</p>

        <p>Phone: +91 9876543210</p>

      </section>

      <Footer />

    </div>
  );

}

export default Contact;