import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Home(){

return(

<>
<Navbar/>

{/* HERO */}

<section className="hero">

<h1>Track Your Internship Applications</h1>

<p>
Manage your internship applications, interviews, and deadlines
in one powerful dashboard.
</p>

<button className="hero-btn">Get Started</button>

</section>


{/* FEATURES */}

<section className="features">

<h2>Why Use InternTrack?</h2>

<div className="features-grid">

<div className="feature-card">

<h3>📊 Application Tracking</h3>

<p>Track every internship application easily.</p>

</div>

<div className="feature-card">

<h3>⏰ Deadline Alerts</h3>

<p>Never miss internship deadlines.</p>

</div>

<div className="feature-card">

<h3>📁 Organized Dashboard</h3>

<p>Manage all internships in one place.</p>

</div>

</div>

</section>


{/* COMPANIES */}

<section className="companies">

<p className="trusted-text">
Trusted by students applying to internships at
</p>

<h2>Companies Hiring Interns</h2>

<div className="logo-slider">

<div className="logo-track">

<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
<img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" />

</div>

</div>

</section>

<Footer/>

</>

)

}

export default Home