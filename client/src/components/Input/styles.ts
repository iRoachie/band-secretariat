import styled from 'styled-components'
import { Theme } from '../../config'

interface ChangeProps {
  error: boolean
  hasValue: boolean
}

const transitionSpeed = '250ms'

const Label = styled.label.attrs({
  className: 'pointer-events-none absolute z-10',
})<ChangeProps>`
  color: rgba(var(--primary), 0.8);
  transform: translateX(0.825rem) translateY(-50%);
  top: 50%;
  transition: top ${transitionSpeed}, transform ${transitionSpeed},
    font-size ${transitionSpeed} ease-in-out;
  font-size: 1.125rem;

  ${({ error }) => error && `color: ${Theme.error}`};
  ${({ hasValue }) =>
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
})``

const Field = styled.input.attrs({
  className: 'relative w-full overflow-visible outline-none text-lg rounded',
})<ChangeProps>`
  padding: ${({ hasValue }) =>
    hasValue ? '1.65rem 0.825rem 0.65rem' : '1.125rem 0.825rem'};
  border: 1.125px solid #cccccc;
  transition: ${transitionSpeed} border-color, ${transitionSpeed} box-shadow,
    ${transitionSpeed} background-color;
  background-color: ${({ hasValue }) => (hasValue ? '#fff' : ' #f8f8f8')};

  &:disabled {
    background-color: #f7f7f7;
    cursor: not-allowed;
    color: #9b9b9b;
  }

  &:focus {
    border-color: var(--primary);
    background-color: #fff;
  }

  ${({ error }) =>
    error &&
    `
    border-color: ${Theme.error};

  &:focus {
    border-color: ${Theme.error};
  }
    `};
`

export { Label, Container, Field }
