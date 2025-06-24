import { RouterProvider } from "react-router";

import router from './router';
import { ThemeProvider } from "styled-components";
import theme from "./common/theme";
import GlobalStyle from "./global-styles.ts";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
