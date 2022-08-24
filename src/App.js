import Discovery from "./components/Discovery";
// import APIButtons from "./APIButtons";
import UserDetails from "./components/UserDetails";
import "./App.css";
import NewPod from "./components/NewPod";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App" style={{ width: "90vw" }}>
      <header className="App-header">
        <UserDetails style={{ width: "90vw" }} />
        <Discovery style={{ width: "90vw" }} />
        {/* <APIButtons /> */}
        <NewPod />
        <UserProfile />
      </header>
    </div>
  );
}

export default App;
