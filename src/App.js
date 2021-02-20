import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Facebook from "./Facebook/facebook";
import Google from "./Google/google";
import Amazon from "./Amazon/amazon";
import Apple from "./Apple/apple";
import Home from "./Home/home";
import Join from "./Join/join";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Boycott Big Tech</Link>
            </li>
            <li>
              <Link to="/Facebook">Facebook</Link>
            </li>
            <li>
              <Link to="/Google">Google</Link>
            </li>
            <li>
              <Link to="/Apple">Apple</Link>
            </li>
            <li>
              <Link to="/Amazon">Amazon</Link>
            </li>
            <li>
              <Link to="/join">Join Us</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Facebook">
            <Facebook />
          </Route>
          <Route path="/Google">
            <Google />
          </Route>
          <Route path="/Apple">
            <Apple />
          </Route>
          <Route path="/Amazon">
            <Amazon />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
