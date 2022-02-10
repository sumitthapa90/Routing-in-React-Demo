import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container-box">
          <h2>Welcome to Home Page</h2>
          <nav>
            <ul className="main-page ">
              <li>
                <Link to="/articles"> ARTICLES PAGE</Link>
              </li>

              <li>
                <Link to="/books"> BOOKS PAGE</Link>
              </li>

              <li>
                <Link to="/people"> PEOPLE PAGE</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Home;
