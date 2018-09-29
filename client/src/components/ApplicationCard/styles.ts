import styled from 'styled-components'
import { Theme } from '../../config'
import { ApplicationStatus } from '../../../../server/src/generated/prisma'

interface StatusProps {
  status: ApplicationStatus
}

const Status = styled.span.attrs({
  className: 'p-1 font-bold text-xs text-right absolute',
})`
  top: 0.5rem;
  left: 0.5rem;
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
  className: 'h-auto w-64',
})`
  min-height: 15rem;
`

export { Status, Avatar }
