import { Link } from 'react-router-dom';
import { BsHouseGearFill } from "react-icons/bs";
import "./NavBar.scss";


function Navbar() {
  return (
    <section className="navbar">
<BsHouseGearFill />
      <div className="navbar__link-container">
       <Link to='/'>
       <p>Browse Catagories</p>
       </Link>
       <Link to='/'>
       <p>Blog</p>
       </Link>
       <Link to='/'>
       <p>Write a Review</p>
       </Link>
       <Link to='/'>
       <p>Costs and Financing</p>
       </Link>
       <div className="navbar__link-login">
       <Link to='/'>
       <p>Log In</p>
       </Link>
       <Link to='/'>
       <p>Sign Up</p>
       </Link>
       <Link to='/'>
       <button>ARE YOU A HOME PRO</button>
       </Link>
       </div>
      </div>
    </section>
  );
}

export default Navbar;