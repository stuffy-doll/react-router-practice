const { Redirect, useHistory } = require("react-router-dom");

function Stocks() {
  let loggedIn = true;
  const history = useHistory();
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };
  console.log(history);
  if (loggedIn === false) {
    return <Redirect to="/not-logged-in"></Redirect>;
  }
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
