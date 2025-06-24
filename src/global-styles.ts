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
        height: 100%;
        color: ${({ theme }) => theme.colors.whiteDark};
        font-family: 'Inter', sans-serif;
    }
    
    #root {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.blackDark};

    }
`

export default GlobalStyle
