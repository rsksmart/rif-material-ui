import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const ContentWrapper = styled(Container)({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px'
}, { maxWidth: 'lg' })

export default ContentWrapper
