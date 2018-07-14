import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Theme, media } from '../../config'

const Content = styled.header`
  background-color: #fff;
  height: 60px;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  height: inherit;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: inherit;
`

const HeaderRight = styled.ul`
  position: relative;
  padding-left: 20px;

  @media ${media.small} {
    padding-left: 40px;
  }

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

const Logo = styled.img`
  height: inherit;
  border-radius: 8px;
  min-width: 40px;
`

const LogoLink = styled(Link)`
  height: 40px;
`

const NavItems = styled.ul`
  display: none;
  margin-left: 15px;
  height: inherit;

  @media ${media.small} {
    display: block;
    margin-left: 40px;
  }
`

const NavItem = styled(NavLink)`
  color: rgba(255, 255, 255, 0.56);
  height: inherit;
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0 15px;
  font-weight: 600;

  &.active {
    color: #fff;
  }

  @media ${media.small} {
    padding: 0 20px;
    color: rgba(0, 0, 0, 0.56);

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
`

const Account = styled.p`
  color: rgba(0, 0, 0, 0.26);
  font-weight: 600;
  font-size: 0.9rem;
`

const MobileNav = styled.nav`
  background-color: ${Theme.primary};
  height: 40px;

  @media ${media.small} {
    display: none;
  }
`

export {
  Content,
  Container,
  Logo,
  NavItems,
  NavItem,
  LogoLink,
  HeaderLeft,
  HeaderRight,
  Account,
  MobileNav,
}
