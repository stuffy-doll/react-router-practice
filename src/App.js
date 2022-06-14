import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
const { Route, Switch, NavLink } = require("react-router-dom");
const { movies } = require("./data/movieData");

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className={"comp nav"}>
        <ul>
          <li>
            <NavLink
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              exact={true}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              to="/stocks"
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
              to="/movies"
            >
              Movies
            </NavLink>
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
          <Movies movies={movies} />
        </Route>
        <Route path="/not-logged-in">
          <h1>You must be logged in to enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
