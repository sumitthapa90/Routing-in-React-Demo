import React from "react";
import { NavLink } from "react-router-dom";

class Aside extends React.Component {
  render() {
    return (
      <>
        <aside>
          <ul>
            <NavLink className="link" activeClassName="active" to="/" exact>
              <li>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </li>
            </NavLink>

            <li>
              <NavLink className="link" activeClassName="active" to="/articles">
                <i className="fab fa-autoprefixer"></i>
                <span>Articles</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="active" to="/people">
                <i className="fas fa-users"></i>
                <span>People</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="active" to="/books">
                <i className="fas fa-book"></i>
                <span>Books</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="active" to="/help">
                <i className="fas fa-headset"></i>
                <span>Help & Support</span>
              </NavLink>
            </li>
          </ul>
        </aside>
      </>
    );
  }
}

export default Aside;
