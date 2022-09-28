import "./App.css";
import { Login } from "./components/state/Login";
import { User } from "./components/state/User";
import {ThemeContextProvider} from './components/context/ThemeContext'
import { Box } from "./components/context/Box";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
