import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
const { Route, Switch, Link } = require("react-router-dom");

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className={"comp nav"}>
        <ul>
          <li>
            <a href="/movies">Anchor</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
