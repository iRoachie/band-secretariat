import styled from 'styled-components'
import {
  Select as AntdSelect,
  Input as AntdInput,
  DatePicker as AntdDatePicker,
} from 'antd'

const Select = styled(AntdSelect).attrs({
  size: 'large',
})``

const SelectOption = AntdSelect.Option

const Input = styled(AntdInput).attrs({
  size: 'large',
})``

const InputTextArea = styled(AntdInput.TextArea)`
  font-size: 1rem !important;
`

const DatePicker = styled(AntdDatePicker).attrs({
  size: 'large',
})`
  width: 100%;
`

export { Select, SelectOption, Input, InputTextArea, DatePicker }
