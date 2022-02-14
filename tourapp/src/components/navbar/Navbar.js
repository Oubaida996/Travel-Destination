import { Link } from "react-router-dom";

function Navbar(props) {
    return (
      <nav className="navbar">
          <h1>Tour App</h1>
          <div className="links">
              <Link style={{color :"white" , margin:"10px" }} to="/" >Home</Link>
              
          </div>
      </nav>

    );
}

export default Navbar