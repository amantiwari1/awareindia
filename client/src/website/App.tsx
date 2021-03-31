import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import PeopleRank from './pages/PeopleRank';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home}  />
        <Route exact path="/peoplerank"  component={PeopleRank}  />
      </Switch>
    </ThemeProvider>
  );
}
export default App;