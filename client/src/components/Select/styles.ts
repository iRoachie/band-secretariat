import styled from 'styled-components'
import { Label, Container, Field as Input } from '../Input/styles'

const Select = Input.withComponent('select')
const Field = styled(Select)`
  -webkit-appearance: none;
`

const DropArrow = styled.i.attrs({
  className: 'icon ion-ios-arrow-down absolute text-xl pointer-events-none',
})`
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`

export { Label, Container, Field, DropArrow }
