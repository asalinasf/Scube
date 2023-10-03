import "./App.css";
import { MyRoutes } from "./routes/routes";
import NavBar from "./components/NavBar";
import NewNavBar from "./components/NewNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NewNavBar />
      {/* <NavBar /> */}
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
