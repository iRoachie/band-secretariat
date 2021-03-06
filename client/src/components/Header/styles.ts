import styled from 'styled-components'
import { Theme, media } from '../../config'

const HeaderLeft = styled.section.attrs({
  className: 'flex flex-1 h-16 items-center',
})``

const HeaderRight = styled.section.attrs({
  className: 'relative pl-5 sm:pl-10',
})`
  &::before {
    content: '';
    width: 1px;
    background: rgba(0, 0, 0, 0.12);
    height: 30px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

const NavItem = styled.li.attrs({
  className:
    'h-full inline-flex items-center relative pr-4 sm:p-0 font-semibold text-lg',
})`
  color: rgba(255, 255, 255, 0.56);

  a.active {
    color: #fff;
  }

  @media ${media.small} {
    color: rgba(0, 0, 0, 0.56);

    a {
      height: 100%;
      vertical-align: middle;
      display: flex;
      align-items: center;
      padding: 0 1.25rem;

      &.active {
        color: ${Theme.primary};

        &::after {
          display: block;
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0;
          bottom: -2px;
          background: ${Theme.primary};
        }
      }
    }
  }
`

const Account = styled.p.attrs({
  className: 'font-medium text-md mb-0',
})`
  color: rgba(0, 0, 0, 0.54);
`

const DesktopNav = styled.nav.attrs({
  className: 'shadow fixed z-20 bg-white h-16 w-full pin-t',
})``

const MobileNav = styled.nav.attrs({
  className: 'flex items-center sm:hidden bg-primary h-10 fixed w-full z-10',
})`
  top: 4rem;
`

export { DesktopNav, NavItem, HeaderLeft, HeaderRight, Account, MobileNav }
