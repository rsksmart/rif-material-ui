import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import { InputLabel, InputLabelProps, InputBaseProps, FormHelperText } from '@mui/material'
import { styled } from '@mui/material/styles'
import { themeFont } from '../assets/theme'

interface StyledInputLabelProps extends InputLabelProps {
  isFocused?: boolean;
}

const StyledInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== 'isFocused'
})<StyledInputLabelProps>(({ theme, isFocused }) => ({
  fontFamily: themeFont,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '22px',
  lineHeight: '47px',
  color: isFocused ? theme.palette.primary.main : '#3F3F3F',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  top: 'auto'
}))

const StyledInput = styled(InputBase)({
  padding: 0,
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
})

const StyledPaper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '12px',
  minHeight: 74,
  paddingLeft: 20,
  paddingRight: 20
})

const StyledFormHelperText = styled(FormHelperText)({
  fontFamily: themeFont,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '12px',
  color: '#3F3F3F',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  margin: 0,
  lineHeight: 0
})

const StyledVerticalGroup = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  paddingLeft: 15,
  paddingRight: 10
})

interface ITextFieldWithLabelProps extends InputBaseProps {
  key: string
  label: string,
  helperText?: string,
  error?: boolean,
  children?: React.ReactNode
}

const TextFieldWithLabel = ({ key, label, placeholder, autoFocus, onFocus, onBlur, helperText, error, children, ...otherProps }: ITextFieldWithLabelProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocusBlur = (focused: boolean) => (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(focused)
    if (focused && onFocus) {
      onFocus(event)
    }
    if (!focused && onFocus) {
      onBlur(event)
    }
  }

  return (
    <StyledPaper>
      <StyledInputLabel isFocused={isFocused} htmlFor={`input-${key}`}>{label}</StyledInputLabel>
      <StyledVerticalGroup>
        <StyledInput
          key={key}
          id={`input-${key}`}
          sx={{ flex: 1 }}
          placeholder={placeholder}
          inputProps={{ 'aria-label': label }}
          onFocus={handleFocusBlur(true)}
          onBlur={handleFocusBlur(false)}
          autoFocus={autoFocus}
          {...otherProps}
        />
        <StyledFormHelperText error={error}>{helperText}</StyledFormHelperText>
      </StyledVerticalGroup>
      {children}
    </StyledPaper>
  )
}

export default TextFieldWithLabel
