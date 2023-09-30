import "./App.css";
import { MyRoutes } from "./routes/routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
