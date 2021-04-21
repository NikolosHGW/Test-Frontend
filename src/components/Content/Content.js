import React from "react";
import { Route, Switch } from "react-router";
import Details from "../Details/Details";
import PersonalArea from "../PersonalArea/PersonalArea";
import './styles/index.css';

function Content() {
  return (
    <section className="Content">
      <Switch>
        <Route exact path="/">
          <PersonalArea />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </section>
  );
}

export default React.memo(Content);
