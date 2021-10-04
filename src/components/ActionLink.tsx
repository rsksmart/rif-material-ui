import { Link, LinkTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { styled } from '@mui/material/styles'

const ActionLink: OverridableComponent<LinkTypeMap> = styled(Link)({
  color: '#6F6F6F',
  boxShadow: 'none',
  lineHeight: '21px',
  fontWeight: 'bold',
  fontSize: '17px',
  textTransform: 'none',
  textDecorationColor: 'transparent',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
})

export default ActionLink
