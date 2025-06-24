import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        display: flex;
        min-height: 100vh;
    }

    :root {
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    
    #root {
        width: 100%;
    }
`

export default GlobalStyle
