import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Recidencies from "./components/Recidencies/Recidencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";

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
        <Contact />
        <GetStarted />
      </div>
    </>
  );
};

export default App;
