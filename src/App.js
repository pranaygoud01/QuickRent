import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="h-fit w-full  overflow-x-hidden" id="home">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
