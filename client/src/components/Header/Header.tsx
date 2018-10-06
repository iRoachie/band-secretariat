import React from 'react'
import {
  DesktopNav,
  NavItem,
  HeaderLeft,
  HeaderRight,
  Account,
  MobileNav,
} from './styles'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/band-logo.png'

const items = [
  { to: '/applications', title: 'Applications' },
  { to: '/members', title: 'Members' },
]

const Header = () => (
  <>
    <DesktopNav>
      <div className="container items-center flex justify-between">
        <HeaderLeft>
          <Link to="/" className="h-10">
            <img
              src={logo}
              className="rounded-lg h-full w-10"
              alt="Barbados Pathfinder Band"
            />
          </Link>

          <ul className="h-full ml-10 hidden sm:block">
            {items.map(a => (
              <NavItem key={a.title}>
                <NavLink to={a.to}>{a.title}</NavLink>
              </NavItem>
            ))}
          </ul>
        </HeaderLeft>

        <HeaderRight>
          <Account>Kyle Roach</Account>
        </HeaderRight>
      </div>
    </DesktopNav>

    <MobileNav>
      <div className="container">
        {items.map((a, index) => (
          <NavItem key={a.title} className={index === 0 ? 'pl-0' : 'pl-4'}>
            <NavLink to={a.to}>{a.title}</NavLink>
          </NavItem>
        ))}
      </div>
    </MobileNav>
  </>
)

export default Header
