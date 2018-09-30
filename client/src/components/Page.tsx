import React from 'react'
import styled from 'styled-components'
import { Theme, media } from '../config'

const Header = styled.header.attrs({
  className: 'py-6 fixed w-full z-10',
})`
  background: #fcfcfd;
  border-bottom: 1px solid ${Theme.border};
  top: 6.5rem;

  @media ${media.small} {
    top: 4rem;
  }
`

const Container = styled.div`
  animation: appear 400ms;
  position: relative;
  top: 6.5rem;

  @media ${media.small} {
    top: 4rem;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Content = styled.div`
  margin-top: 8.5rem;

  @media ${media.small} {
    margin-top: 6.5rem;
  }
`

interface Props {
  renderHeader: React.ReactNode
}

const Page: React.SFC<Props> = ({ renderHeader, children }) => (
  <main className="relative">
    <Container>
      {renderHeader && (
        <Header>
          <div className="container">{renderHeader}</div>
        </Header>
      )}

      <Content className="container">{children}</Content>
    </Container>
  </main>
)

export default Page
