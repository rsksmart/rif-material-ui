import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { blue, orange } from '@mui/material/colors'

export const themeFont = 'Quicksand, sans-serif'

let theme = createTheme({
  palette: {
    primary: blue,
    secondary: orange
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: `
          font-family: ${themeFont};
        `,
        h1: `
          font-style: normal;
          font-weight: bold;
          font-size: 62px;
          line-height: 77px;

          color: #FFFFFF;

          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `,
        h2: `
          font-style: normal;
          font-weight: normal;
          font-size: 34px;
          line-height: 42px;

          color: #FFFFFF;

          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `,
        h3: `
          font-style: normal;
          font-weight: normal;
          font-size: 27px;
          line-height: 42px;

          color: #FFFFFF;

          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        fullWidth: true
      },
      styleOverrides: {
        root: {
          fontFamily: themeFont
        },
        contained: {
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 12,
          paddingLeft: 40,
          paddingRight: 40,
          minHeight: 74,
          fontWeight: 'bold',
          fontSize: '21px',
          textTransform: 'none'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides:
      `
        html {
            height: 100%;
            min-height: 100%;
            font-family: ${themeFont};
        },
        body {
            background-color: #aef7d8;
            background-image: linear-gradient(#0190f7,#aef7d8);
            background-repeat: no-repeat;
        }
      `
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
