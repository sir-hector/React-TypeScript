import "./App.css";
import {ThemeContextProvider} from './components/context/ThemeContext'
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import {List} from './components/generics/List'
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";


function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile}></Private>
      {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)}></List>

      <List items={[1,2,3]} onClick={(item) => console.log(item)}></List> */}

      <List items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne'
        }
      ]} onClick={(item) => console.log(item)}></List>

      <RandomNumber value={10} isPositive></RandomNumber>
      <Toast position='center'></Toast>
    </div>
  );
}

export default App;
