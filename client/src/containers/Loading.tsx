import React from 'react'
import styled from 'styled-components'
import { Spin, Icon } from 'antd'

const Loading = () => (
  <Content>
    <Spin indicator={<Icon type="loading" style={{ fontSize: 32 }} spin />} />
  </Content>
)

const Content = styled.div.attrs({
  className:
    'flex items-center justify-center fixed w-full h-full z-30 pin-t pin-l',
})`
  background: hsla(0, 0%, 100%, 70%);
`

// tslint:disable-next-line:no-empty
const LoadingContext = React.createContext({ show: () => {}, hide: () => {} })

interface Props {
  children: React.ReactNode
}

interface State {
  loading: boolean
}

class LoadingProvider extends React.Component<Props, State> {
  state = {
    loading: false,
  }

  show = () => {
    this.setState(() => ({ loading: true }))
  }

  hide = () => {
    this.setState(() => ({ loading: false }))
  }

  render() {
    return (
      <LoadingContext.Provider
        value={{
          show: this.show,
          hide: this.hide,
        }}
      >
        {this.state.loading && <Loading />}
        {this.props.children}
      </LoadingContext.Provider>
    )
  }
}

const LoadingConsumer = LoadingContext.Consumer

export { LoadingConsumer, LoadingProvider }
