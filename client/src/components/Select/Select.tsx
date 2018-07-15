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

export class Select extends React.Component<SelectProps> {
  static defaultProps: Partial<SelectProps> = {
    errorMessage: '',
    value: '',
    onChange: () => null,
  }

  select = (value: Value) => {
    this.props.onChange(value)
  }

  render() {
    const { label, options, errorMessage, ...rest } = this.props

    const hasValue = rest.value !== ''
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
          onChange={({ target }) => this.select(target.value)}
        >
          <option value="" disabled selected>
            {label}
          </option>

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

export default Select
