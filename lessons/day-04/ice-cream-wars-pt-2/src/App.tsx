import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header name="Nate" />
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
