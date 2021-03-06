import { Link, LinkTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { styled } from '@mui/material/styles'

const BigLink: OverridableComponent<LinkTypeMap> = styled(Link)({
  color: '#fff',
  boxShadow: 'none',
  lineHeight: '29px',
  fontWeight: 'bold',
  fontSize: '23px',
  textTransform: 'none',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
})

export default BigLink
