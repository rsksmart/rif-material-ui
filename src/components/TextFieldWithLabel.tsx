import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import { InputLabel } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ITextFieldWithLabelProps {
    label: string,
    placeholder: string,
}

const StyledInputLabel = styled(InputLabel)({
  color: '#fff',
  boxShadow: 'none',
  lineHeight: '29px',
  fontWeight: 'bold',
  fontSize: '23px',
  textTransform: 'none',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
})

const TextFieldWithLabel = ({ label, placeholder }: ITextFieldWithLabelProps) => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <StyledInputLabel>{label}</StyledInputLabel>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': label }}
      />
    </Paper>
  )
}

export default TextFieldWithLabel
