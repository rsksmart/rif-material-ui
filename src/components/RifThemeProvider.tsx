import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../assets/theme'

const RifThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default RifThemeProvider
