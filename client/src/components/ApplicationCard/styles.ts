import styled from 'styled-components'
import { Theme } from '../../config'
import { ApplicationStatus } from '../../../../server/src/generated/prisma'

interface StatusProps {
  status: ApplicationStatus
}

const Status = styled.span.attrs({
  className: 'p-1 font-bold text-xs text-right',
})`
  white-space: nowrap;
  background: ${(props: StatusProps) => {
    return Theme.status[props.status.toLowerCase()]
  }};
  color: ${(props: StatusProps) => {
    if (props.status === 'APPLIED' || props.status === 'ASSIGNED') {
      return 'rgba(0,0,0,.87)'
    }

    return '#fff'
  }};
`

const Avatar = styled.img.attrs({
  className: 'relative h-32 w-32',
})`
  right: -1px;
`

const CardBody = styled.div.attrs({
  className: 'px-4 py-3 flex-1 bg-white',
})`
  border: 1px solid rgba(0, 0, 0, 0.12);
`

const Name = styled.p.attrs({
  className: 'text-xl relative mr-2 mb-0',
})`
  top: -4px;
`

export { Status, Avatar, CardBody, Name }
