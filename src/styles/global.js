import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;

    body {
      background: ${theme.colors.background};
      display: flex;
      flex-direction: column;
      height: 100%;

      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        height: 100%;
        padding: 15px;
      }

      .todoapp {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        box-shadow: ${theme.boxShadow}
      }
    }
  }
`}
`