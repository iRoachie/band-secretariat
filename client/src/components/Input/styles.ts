import styled, { css } from 'styled-components'

interface ChangeProps {
  error: boolean
  hasValue: boolean
  required?: boolean
}

const Required = styled.span.attrs({
  className: 'absolute text-2xl',
})`
  right: 0.625rem;
  top: 1.4rem;
  color: var(--primary);
`

const Label = styled.label.attrs({
  className: 'pointer-events-none absolute z-10 font-semibold bg-white',
})<ChangeProps>`
  left: 0.825rem;
  top: 1px;
  padding-top: 0.625rem;
  padding-bottom: 0.125rem;
  transition: 200ms ease-in-out;
  font-size: 0.825rem;
  width: calc(100% - 0.825rem - 0.825rem);
  opacity: ${({ hasValue }) => (hasValue ? 1 : 0)};
  color: ${({ error }) => (error ? 'var(--error)' : 'var(--text-primary-1)')};
  -webkit-font-smoothing: subpixel-antialiased;
`

const Container = styled.article.attrs({
  className: 'mb-6 relative',
})``

const InputStyles = css<ChangeProps>`
  padding: ${({ hasValue }) =>
    hasValue ? '1.65rem 0.8rem 0.6rem' : '1.125rem 0.8rem'};
  border-width: 1.125px;
  border-style: solid;
  transition: 250ms ease-in-out;
  border-color: ${({ error }) => (error ? 'var(--error)' : '#ccc')};
  padding-right: ${({ required }) => (required ? '1.5rem' : '.8rem')};
  min-height: 3.7rem;

  &:disabled {
    background-color: #f7f7f7;
    cursor: not-allowed;
    color: #9b9b9b;
  }

  &:focus {
    border-color: ${({ error }) => (error ? 'var(--error)' : 'var(--primary)')};
  }
`

const Field = styled.input.attrs({
  className: 'relative w-full outline-none text-base rounded bg-white',
})<ChangeProps>`
  ${InputStyles};
`

const TextAreaField = styled.textarea.attrs({
  className: 'relative w-full outline-none text-base rounded bg-white',
})`
  ${InputStyles};
`

export { Label, Container, Field, TextAreaField, Required }
