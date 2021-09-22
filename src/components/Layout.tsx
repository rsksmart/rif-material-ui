import React, { useState } from 'react'
import {
  AppBar,
  Container,
  Hidden,
  Link,
  LinkTypeMap,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import logoRif from '../assets/logo-rif-full.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'

import ContentWrapper from './ContentWrapper'
import { OverridableComponent } from '@mui/material/OverridableComponent'

const LinksWrapper = styled(Container)({
  display: 'flex',
  gap: '60px',
  alignItems: 'center'
})

const MenuLink: OverridableComponent<LinkTypeMap<{}, 'a'>> = styled(Link)({
  fontWeight: 'bold',
  fontSize: '21px',
  lineHeight: '26px',
  textAlign: 'center',
  color: '#fff',
  cursor: 'pointer'
})

const BigToolbar = styled(Toolbar)({
  minHeight: 151
})

interface IMenuItem {
  href?: string,
  to?: string,
  label: string
}

interface ILayoutProps {
  routerLinkComponent?: React.ElementType,
  menu?: IMenuItem[]
}

const Layout: React.FC<ILayoutProps> = ({ children, menu, routerLinkComponent }) => {
  const hasMenu = menu && routerLinkComponent

  return (
      <ContentWrapper maxWidth="lg">
        <AppBar position="fixed" style={{ boxShadow: 'none', background: 'transparent' }}>
          <BigToolbar>
            <LinksWrapper>
              <img style={{ paddingTop: 36, paddingBottom: 36 }} src={logoRif} alt="rBench" />
              {hasMenu && (
                <Hidden mdDown>
                  {menu.map((item, index) => (
                    <MenuLink key={`desktop-menu-${index}`} component={routerLinkComponent} to={item.to} href={item.href}>
                      {item.label}
                    </MenuLink>
                  ))}
                </Hidden>
              )}
              {hasMenu && (
                <Hidden mdUp>
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                    <MobileMenu routerLinkComponent={routerLinkComponent} menu={menu} />
                  </div>
                </Hidden>
              )}
            </LinksWrapper>
          </BigToolbar>
        </AppBar>
        <BigToolbar />
        {children}
      </ContentWrapper>
  )
}

export default Layout

const MobileMenu: React.FC<ILayoutProps> = ({ routerLinkComponent, menu }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)

  return <>
      <div>
        <IconButton
          aria-label="menu"
          color="inherit"
          onClick={() => setDrawerOpened(true)}
          size="large">
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        anchor={'right'}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        PaperProps={{
          style: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }
        }}
      >
        <Box
          sx={{
            width: 150
          }}
          role="presentation"
          onClick={() => setDrawerOpened(false)}
        >
          <List>
            {menu.map((item, index) => (
              <ListItem
                key={`desktop-menu-${index}`}
                button
                component={routerLinkComponent}
                to={item.to}
                href={item.href}
                style={{ textAlign: 'center' }}
              >
                <ListItemText sx={{
                  fontWeight: 'bold',
                  fontSize: 18
                }} primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
}
