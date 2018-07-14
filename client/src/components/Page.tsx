import React from 'react'
import styled from 'styled-components'
import { Theme } from '../config'

const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background: #fcfcfd;
  border-bottom: 1px solid ${Theme.border};
`

const Content = styled.div`
  margin-top: 30px;
`

interface Props {
  renderHeader?: React.ReactNode
}

const Page: React.SFC<Props> = props => (
  <main>
    {props.renderHeader && (
      <Header>
        <div className="container">{props.renderHeader}</div>
      </Header>
    )}

    <Content className="container">{props.children}</Content>
  </main>
)

export default Page
