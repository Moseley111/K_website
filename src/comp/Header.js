import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="header-div">
        {/* <div className="top-icon dark-dark-grey rndColour"> */}
        <div className="top-icon rndColour">

        <h1 className="title">
          <Link to={PathConstants.HOME}>Kev</Link>
        </h1>
        <div className="slide-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close Menu" : "Open Menu"}
        </div>
        </div>
          <nav className={`slide-menu ${menuOpen ? "open" : "closed"} dark-dark-grey rndColour`}>
            <ul className="slide-menu_list">
              <li className="slide-menu_item dark-grey ">
                <Link className="slide-menu_link" to={PathConstants.ABOUT}>About</Link>
              </li>
            </ul>
          </nav>
        
      </div>
    </header>
  );
};
