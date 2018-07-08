declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module 'tabler-react'

declare var process: {
  env: {
    NODE_ENV: string
    REACT_APP_GRAPH_ENDPOINT: string
  }
}
