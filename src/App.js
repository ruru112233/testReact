import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page1DetailA } from "./components/Page1DetailA";
import { Page1DetailB } from "./components/Page1DetailB";
import { Page2 } from "./components/Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
