import logo from "./logo.svg";
import "./App.css";
import Discovery from "./Discovery";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div className="App" style={{ width: "90vw" }}>
      <header className="App-header">
        <UserDetails style={{ width: "90vw" }} />
        <Discovery style={{ width: "90vw" }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
