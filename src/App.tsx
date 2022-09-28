import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";


function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id)=> {
        console.log('Button clicked', event, id)
      }}/>
      <Input value= '' handleChange={(event)=> {
        console.log('Button clicked', event)
      }}/>
      <Container styles={{ border : '1px solid black', padding: '1rem'}}></Container>
    </div>
  );
}

export default App;
