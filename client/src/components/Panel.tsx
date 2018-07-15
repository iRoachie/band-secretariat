import React from 'react'
import styled from 'styled-components'
import { Theme } from '../config'

const Content = styled.section.attrs({
  className: 'bg-white p-4 rounded mb-4',
})`
  border: 1px solid ${Theme.border};
`

const Title = styled.h4.attrs({
  className: 'font-semibold uppercase mb-8',
})``

interface Props {
  title: string
}

const Panel: React.SFC<Props> = ({ title, children }) => (
  <Content>
    <Title>{title}</Title>
    {children}
  </Content>
)

export default Panel
