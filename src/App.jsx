import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Recidencies from "./components/Recidencies/Recidencies";
import Value from "./components/Value/Value";

const App = () => {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Recidencies />
        <Value />
      </div>
    </>
  );
};

export default App;
