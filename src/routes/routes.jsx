import React from "react";

import Home from "../component/home/Home";
import ProductPage from "../component/product-page/ProductPage";
import Facilities from "../component/facilities-page/Facilities";
import Events from "../component/events-page/Events";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/products" render={() => <ProductPage />} />
        <Route path="/facilities" render={() => <Facilities />} />
        <Route path="/events" render={() => <Events />} />
      </Switch>
    </Router>
  );
}
