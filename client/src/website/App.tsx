import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import PeopleRank from './pages/PeopleRank';
import SinglePeopleInfo from './templates/SinglePeopleInfo'
import ListofWebsite from './pages/ListofWebsite';
import Listofdeparment from './pages/Listofdeparment';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home}  />
        <Route exact path="/peoplerank"  component={PeopleRank}  />
        <Route exact path="/SinglePeopleInfo"  component={SinglePeopleInfo}  />
        <Route exact path="/listofgovtwebsite"  component={ListofWebsite}  />
        <Route exact path="/listofdeparment"  component={Listofdeparment}  />
      </Switch>
    </ThemeProvider>
  );
}
export default App;