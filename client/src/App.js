import "./App.css";
import { NavBar } from "./components/navbar/Navbar";
import { Shop } from "./components/shop/Shop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container" style={{ marginTop: "150px" }}>
        <Shop />
      </div>
    </div>
  );
}

export default App;
