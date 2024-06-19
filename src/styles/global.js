import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
    font-family: '';
  }

  body, input, button, textarea{
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  outline: none;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_800} inset !important;
    -webkit-text-fill-color: white !important;
}
&::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 20px;
      height: 96px;
    }

  a, ul{
    color: ${({ theme }) => theme.COLORS.WHITE};
    list-style-type: none;
    text-decoration: none;
  }
  svg, a, button, link, Link{
    cursor: pointer;
  }
  a:hover, button:hover{
        filter: brightness(0.9);
  }
`
