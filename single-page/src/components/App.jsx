import "../App.css";
import Hero from "./Hero";
import IntroVisual from "./IntroVisual";
import Team from "./Team";
import Form from "./Form";

function App() {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <Hero />
      <IntroVisual />
      <Team />
      <Form />
    </div>
  );
}

export default App;
