import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/">Page1</Link>
        <br />
        <Link to="/">Page2</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
}
