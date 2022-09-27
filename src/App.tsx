import "./App.css";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Status status="error"/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leaonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Karol" isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
