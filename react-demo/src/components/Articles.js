import React from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/data.json";

class Articles extends React.Component {
  render() {
    return (
      <>
        <div className="container-box">
          <h1>Articles</h1>
          <ul>
            {articlesData.map((article) => {
              return (
                <>
                  <Link to={`/articles/${article.slug}`}>
                    <li>
                      <h2>{article.title}</h2>
                      <p>{article.author}</p>
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Articles;
