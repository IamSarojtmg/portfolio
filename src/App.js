import "./App.css";
import { NavigationBar } from "./components/navigationBar";
import { Body } from "./components/body";

function App() {
  return (
    <section className="background">
      {/* <section className="container"> */}
        <div className="App">
          <NavigationBar />
        </div>
      {/* </section> */}
    </section>
  );
}

export default App;
