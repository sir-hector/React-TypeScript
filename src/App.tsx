import "./App.css";
import { CustomButton } from "./components/html/Button";
import Text from "./components/polymorphic/Text";

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log('Clicked')} >Primary Button</CustomButton>
      <Text as='h1' size="lg">Heading</Text>
      <Text as='a' size="lg">Heading</Text>
    </div>
  );
}

export default App;
