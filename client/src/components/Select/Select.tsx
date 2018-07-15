import React from 'react'

import { Field, Label, Container, DropArrow } from './styles'
import { Value } from '../../types'

interface Option {
  label: string
  value: Value
}

interface SelectProps {
  disabled?: boolean
  label?: string
  value?: string | number
  options: Option[]
  errorMessage?: string
  onChange(value: Value): void
}

interface InputState {
  focused: boolean
}

export class Input extends React.Component<SelectProps, InputState> {
  static defaultProps: Partial<SelectProps> = {
    errorMessage: '',
    value: '',
    onChange: () => null,
  }

  state = {
    focused: false,
  }

  focus = () => {
    this.setState({ focused: true })
  }

  blur = () => {
    this.setState({ focused: false })
  }

  select = (value: Value) => {
    this.blur()
    this.props.onChange(value)
  }

  render() {
    const { label, options, errorMessage, ...rest } = this.props

    const hasValue = this.state.focused || rest.value !== ''
    const hasError = errorMessage !== ''

    return (
      <Container>
        <Label hasValue={hasValue} error={hasError}>
          {errorMessage || label}
        </Label>

        <Field
          {...rest}
          hasValue={hasValue}
          error={hasError}
          onFocus={this.focus}
          onBlur={this.blur}
          onChange={({ target }) => this.select(target.value)}
        >
          <option />
          {options.map(a => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </Field>

        <DropArrow />
      </Container>
    )
  }
}

export default Input
