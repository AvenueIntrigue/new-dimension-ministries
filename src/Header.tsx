
import Logo from "./assets/NDC-Logo-3.png";
import DarkLogo from "./assets/NDC-Logo-Dark.png";
import { Link } from "react-router-dom";


function Header() {

 


  return (

    <div>

     

    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid  ">
        <Link className="navbar-brand" to="/">
        <picture>
            <source srcSet={DarkLogo} media="(prefers-color-scheme: dark)"/>
          <img src={Logo} alt="Logo" width="50%" height="auto" className="logo d-inline-block align-text-top" />
          </picture>
        </Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/#about"><h1>ABOUT</h1></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#ministries"><h1>MINISTRIES</h1></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/give"><h1>GIVE</h1></Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </div>

  )

}

export default Header;