import GlobalStyle, { lightTheme, darkTheme }   from "./theme/globalStyles"
import { useAppSelector, useAppDispatch } from '../shared/reduxHooks'
import { ThemeProvider } from "styled-components";
import { useEffect } from 'react';


function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme)

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && dispatch({type: 'setTheme', data: localTheme})
  }, [dispatch])

  return (
    <ThemeProvider theme={theme.theme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyle />
      <button type="button" onClick={() => dispatch({type: "theme" })}  >Dark mode</button>
     <h1>Hello</h1>
    </ThemeProvider>
  );
}
 
export default App;
