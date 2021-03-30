import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
}
export default App;