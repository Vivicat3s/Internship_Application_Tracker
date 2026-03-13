import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="navbar">

<h2 className="logo">InternTrack</h2>

<div className="nav-links">

<Link to="/home">Home</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/">Logout</Link>

</div>

</nav>

)

}

export default Navbar