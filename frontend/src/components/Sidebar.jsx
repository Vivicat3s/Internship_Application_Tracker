import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-logo">InternTrack</h2>

      <ul className="sidebar-menu">
        <li>
          <Link to="/home">🏠 Home</Link>
        </li>

        <li>
          <Link to="/dashboard">📊 Dashboard</Link>
        </li>

        

        <li>
          <Link to="/about">ℹ️ About</Link>
        </li>

        <li>
          <Link to="/contact">📞 Contact</Link>
        </li>

        <li>
          <Link to="/">🚪 Logout</Link>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;