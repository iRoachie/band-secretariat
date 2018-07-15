import styled from 'styled-components'
import { Theme } from '../../config'

interface ChangeProps {
  error: boolean
  hasValue: boolean
}

const Label = styled.label.attrs({
  className: 'pointer-events-none absolute z-10',
})`
  color: rgba(var(--primary), 0.8);
  transform: translateX(0.825rem) translateY(-50%);
  top: 50%;
  transition: top var(--transitionSpeed), transform var(--transitionSpeed),
    font-size var(--transitionSpeed) ease-in-out;
  font-size: 1.125rem;

  ${({ error }: ChangeProps) => error && `color: ${Theme.error}`};
  ${({ hasValue }: ChangeProps) =>
    hasValue &&
    `
    top: 15%;
    transform: translateX(0.825rem) translateY(0);
    font-size: 0.825rem;
    font-weight: 500;
    `};
`

const Container = styled.article.attrs({
  className: 'mb-6 relative',
})`
  --transitionSpeed: 250ms;
`

const Field = styled.input.attrs({
  className: 'relative w-full overflow-visible outline-none text-lg rounded',
})`
  padding: ${({ hasValue }: ChangeProps) =>
    hasValue ? ' 1.65rem 0.825rem 0.65rem' : '1.125rem 0.825rem'};
  border: 1.125px solid #cccccc;
  transition: var(--transitionSpeed) border-color,
    var(--transitionSpeed) box-shadow;

  &:disabled {
    background: #f7f7f7;
    cursor: not-allowed;
    color: #9b9b9b;
  }

  &:focus {
    border-color: var(--primary);
  }

  ${({ error }: ChangeProps) =>
    error &&
    `
    border-color: ${Theme.error};

  &:focus {
    border-color: ${Theme.error};
  }
    `};
`

export { Label, Container, Field }
