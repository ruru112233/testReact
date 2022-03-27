import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Page1 />
      <Page2 />
    </div>
  );
}
