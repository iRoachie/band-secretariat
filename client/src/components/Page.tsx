import React from 'react'
import styled from 'styled-components'
import { Theme } from '../config'

const Header = styled.header.attrs({
  className: 'py-6',
})`
  background: #fcfcfd;
  border-bottom: 1px solid ${Theme.border};
`

const Container = styled.div`
  animation: appear 400ms;

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

interface Props {
  renderHeader?: React.ReactNode
}

const Page: React.SFC<Props> = ({ renderHeader, children }) => (
  <main className="relative">
    <Container>
      {renderHeader && (
        <Header>
          <div className="container">{renderHeader}</div>
        </Header>
      )}

      <div className="container mt-6">{children}</div>
    </Container>
  </main>
)

export default Page
