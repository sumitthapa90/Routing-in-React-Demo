import React from "react";
import Home from "./Home";
import Articles from "./Articles";
import Help from "./Help";
import Books from "./Books";
import People from "./People";
import Article from "./Article";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/articles/:slug" component={Article} />

          <Route path="/people">
            <People />
          </Route>

          <Route path="/books">
            <Books />
          </Route>

          <Route path="/help">
            <Help />
          </Route>

          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </>
    );
  }
}

export default Main;
