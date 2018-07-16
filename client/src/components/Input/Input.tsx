import React, { ChangeEvent, InputHTMLAttributes } from 'react'

import { Field, Label, Container, Required } from './styles'

export interface InputProps extends InputHTMLAttributes<any> {
  label?: string
  errorMessage?: string
  onChangeText?(value: string): void
}

interface InputState {
  focused: boolean
}

export class Input extends React.Component<InputProps, InputState> {
  static defaultProps: InputProps = {
    errorMessage: '',
    value: '',
    onChangeText: () => null,
  }

  state = {
    focused: false,
  }

  clear = () => {
    this.props.onChangeText!('')
  }

  updateText = (event: ChangeEvent<any>) => {
    this.props.onChangeText!(event.target.value)
  }

  render() {
    const { label, errorMessage, onChangeText, required, ...rest } = this.props

    const hasError = !!errorMessage
    const hasValue = rest.value !== '' || hasError

    return (
      <Container>
        <Label hasValue={hasValue} error={hasError}>
          {errorMessage || label}
        </Label>

        <Field
          type="text"
          {...rest}
          hasValue={hasValue}
          error={hasError}
          onChange={this.updateText}
          placeholder={label}
          required={required}
        />

        {required && <Required>*</Required>}
      </Container>
    )
  }
}

export default Input
