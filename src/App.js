import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
const { Route, Switch, NavLink } = require("react-router-dom");

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className={"comp nav"}>
        <ul>
          <li>
            <NavLink exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/stocks">Stocks</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
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
