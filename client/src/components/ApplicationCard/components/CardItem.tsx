import React from 'react'
import { DateTime } from '../../../../../server/src/generated/prisma'
import styled from 'styled-components'

interface ItemsProps {
  icon: string
  value: string | DateTime
}

const Item: React.SFC<ItemsProps> = ({ value, icon }) => (
  <Content className="flex items-center">
    <i className={`icon ${icon} text-lg`} />
    <p className="ml-3 text-base mb-0">{value}</p>
  </Content>
)

const Content = styled.div`
  color: hsl(0, 0%, 25%);
`

export default Item
