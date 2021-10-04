import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

export const themeFont = 'Quicksand, sans-serif'

let theme = createTheme({
  palette: {
    primary: blue
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
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        fullWidth: true
      },
      styleOverrides: {
        root: {
          justifyContent: 'center'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          paddingLeft: 15,
          paddingRight: 15
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'filled',
        disableUnderline: true
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true
      },
      styleOverrides: {
        root: {
          backgroundColor: '#F3F3F3 !important',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '12px',
          minHeight: 61
        },
        input: {
          padding: 0,
          paddingLeft: 15,
          paddingRight: 10,
          fontFamily: themeFont,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '27px',
          lineHeight: '34px',
          color: '#3F3F3F',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px #F3F3F3 inset'
          }
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true
      },
      styleOverrides: {
        filled: {
          fontFamily: themeFont,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '22px',
          lineHeight: '47px',
          color: '#3F3F3F',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          top: 'auto'
        }
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
        },
        outlined: {
          minHeight: 36,
          paddingLeft: 20,
          paddingRight: 20,
          border: '1px solid #008FF7',
          borderRadius: '30px',
          fontSize: '12px',
          fontWeight: 'bold',
          textTransform: 'none'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        html {
          height: 100%;
          min-height: 100%;
          font-family: ${themeFont};
        },
        body {
          font-family: ${themeFont};
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
