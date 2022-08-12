import Discovery from "./components/Discovery";
import APIButtons from "./APIButtons";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ width: "90vw" }}>
      <header className="App-header">
        <UserDetails style={{ width: "90vw" }} />
        <Discovery style={{ width: "90vw" }} />
        <APIButtons />
      </header>
    </div>
  );
}

export default App;
