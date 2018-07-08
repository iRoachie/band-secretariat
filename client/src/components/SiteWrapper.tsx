import React from 'react'
import { Site } from 'tabler-react'
import { NavLink } from 'react-router-dom'

import Logo from '../assets/band-logo.png'

const navBarItems = [
  {
    value: 'Applications',
    to: '/',
    icon: 'file',
    LinkComponent: NavLink,
  },
]

const SiteWrapper: React.SFC<{}> = ({ children }) => (
  <Site.Wrapper
    headerProps={{
      alt: 'Barbados Pathfinder Band',
      href: '/',
      imageURL: Logo,
    }}
    navProps={{ itemsObjects: navBarItems }}
    footerProps={{
      copyright: (
        <React.Fragment>
          Copyright © 2018
          <a href="."> Barbados Pathfinder Band</a>.
        </React.Fragment>
      ),
      links: null,
    }}
  >
    {children}
  </Site.Wrapper>
)

export default SiteWrapper
