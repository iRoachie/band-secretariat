import React from 'react'
import { DateTime } from '../../../../../server/src/generated/prisma'

interface ItemsProps {
  icon: string
  value: string | DateTime
}

const Item: React.SFC<ItemsProps> = ({ value, icon }) => (
  <div className="flex items-center">
    <i className={`icon ${icon} text-lg`} />
    <p className="ml-3 text-base">{value}</p>
  </div>
)

export default Item
