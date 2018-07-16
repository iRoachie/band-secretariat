import React from 'react'
import { DateInput } from '@blueprintjs/datetime'
import styled from 'styled-components'
import moment from 'moment'

import { Label } from '../Input/styles'

interface ChangeProps {
  error: boolean
  hasValue: boolean
  required?: boolean
}

const Picker = styled(DateInput as any).attrs({
  className: 'block',
})<ChangeProps>`
  & > span {
    display: block;
  }

  input {
    height: 3.7rem;
    font-size: 1.125rem;
    display: block;
    box-shadow: none;
    border-width: 1.125px;
    border-style: solid;
    border-color: ${({ error }) => (error ? 'var(--error)' : '#ccc')};
    padding: ${({ hasValue }) =>
      hasValue ? '1.65rem 0.8rem 0.6rem' : '1.125rem 0.8rem'};
    transition: 250ms ease-in-out;
    color: var(--text-primary-1);

    &:disabled {
      background-color: #f7f7f7;
      cursor: not-allowed;
      color: #9b9b9b;
    }

    &:focus {
      border-color: ${({ error }) =>
        error ? 'var(--error)' : 'var(--primary)'};
      box-shadow: none;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.56);
    }
  }
`

interface Props {
  value: Date | null
  label: string
  disabled?: boolean
  errorMessage?: string
  onChange?: (selectedDate: Date, isUserChange: boolean) => void
}

const DatePicker: React.SFC<Props> = ({ label, errorMessage, ...rest }) => {
  const hasError = !!errorMessage
  const hasValue = rest.value !== null || hasError

  return (
    <article className="relative mb-6">
      <Label hasValue={hasValue} error={hasError}>
        {errorMessage || label}
      </Label>

      <Picker
        {...rest}
        hasValue={hasValue}
        formatDate={(date: any) => moment(date).format('DD-MM-YYYY')}
        parseDate={(str: any) => new Date(str)}
        placeholder={label}
        popoverProps={{ position: 'bottom' }}
        error={hasError}
      />
    </article>
  )
}

export default DatePicker
