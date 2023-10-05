import "./App.css";
import { MyRoutes } from "./routes/routes";
import NewNavBar from "./components/NewNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NewNavBar />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
