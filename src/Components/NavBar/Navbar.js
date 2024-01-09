import { Link } from "react-router-dom";
import { BsHouseGearFill } from "react-icons/bs";
// import navbarImage from "../../assets/images/hero-img.jpg"
import "./NavBar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__link-container">
          <BsHouseGearFill />
          <Link className="navbar__link" to="/">
            <p>Browse Catagories</p>
          </Link>
          <Link className="navbar__link" to="/">
            <p>Blog</p>
          </Link>
          <Link className="navbar__link" to="/">
            <p>Write a Review</p>
          </Link>
          <Link className="navbar__link" to="/">
            <p>Costs and Financing</p>
          </Link>
        </div>
        <div className="navbar__link-login">
          <Link className="navbar__link" to="/">
            <p>Log In</p>
          </Link>
          <Link className="navbar__link" to="/">
            <p>Sign Up</p>
          </Link>
          <Link className="navbar__link" to="/">
            <button className="navbar__button">ARE YOU A HOME PRO</button>
          </Link>
        </div>
      </div>
      <div>
      <h1 className="navbar__title">Get matched with local pros for your next project.</h1>
        <h3>Quickly get quotes from verified and reviewed pros</h3>
      </div>
     
    </header>
  );
}

export default Navbar;
