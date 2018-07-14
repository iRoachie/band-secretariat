import React from 'react'
import styled from 'styled-components'
import ATButton from '@atlaskit/button'
import { Theme } from '../config'

interface Props extends React.HTMLProps<any> {
  appearance?: 'primary'
  iconBefore?: string
  iconAfter?: string
}

const Container = styled.article`
  display: inline-block;
`

const Content = styled(ATButton)`
  font-family: inherit;
  background: ${(props: Props) =>
    props.appearance === 'primary' && Theme.primary};

  &:hover {
    background: ${(props: Props) =>
      props.appearance === 'primary' && '#21c1b2'};
  }

  &:active {
    background: ${(props: Props) =>
      props.appearance === 'primary' && '#16897e'};
  }
`

const Icon = styled.i`
  font-size: 20px;
`

const IconBefore = styled(Icon)`
  margin-right: 4px;
`

const IconAfter = styled(Icon)`
  margin-left: 4px;
`

const Button: React.SFC<Props> = ({
  appearance,
  iconBefore,
  iconAfter,
  children,
  className,
  ...rest
}) => (
  <Container className={className}>
    <Content
      appearance={appearance}
      iconBefore={iconBefore && <IconBefore className={`icon ${iconBefore}`} />}
      iconAfter={iconAfter && <IconAfter className={`icon ${iconAfter}`} />}
      {...rest}
    >
      {children}
    </Content>
  </Container>
)

export default Button
