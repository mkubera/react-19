import logo from "./logo.svg";
import "./App.css";
import Lorem from "./Lorem";

function App() {
  const title = "Dzis Reactujemy";
  const loremText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum sequi possimus aut, earum ipsam fuga ipsum! Dolorem eligendi commodi sed. Deserunt illum quis officiis nam velit iusto! Autem, aspernatur!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title ? title.toUpperCase() : "No title"}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <Lorem color="blue" text={loremText} pd={20} />
    </div>
  );
}

export default App;
