import React from 'react'
import {
  HeaderLeft,
  LogoLink,
  Content,
  Container,
  Logo,
  NavItems,
  NavItem,
  HeaderRight,
  Account,
  MobileNav,
} from './styles'

import logo from '../../assets/band-logo.png'

const items = [
  { to: '/applications', title: 'Applications' },
  { to: '/members', title: 'Members' },
]

const Header = () => (
  <>
    <Content>
      <Container className="container">
        <HeaderLeft>
          <LogoLink to="/">
            <Logo src={logo} />
          </LogoLink>

          <NavItems>
            {items.map(a => (
              <NavItem to={a.to} key={a.title}>
                {a.title}
              </NavItem>
            ))}
          </NavItems>
        </HeaderLeft>

        <HeaderRight>
          <Account>Kyle Roach</Account>
        </HeaderRight>
      </Container>
    </Content>

    <MobileNav>
      {items.map(a => (
        <NavItem to={a.to} key={a.title}>
          {a.title}
        </NavItem>
      ))}
    </MobileNav>
  </>
)

export default Header
