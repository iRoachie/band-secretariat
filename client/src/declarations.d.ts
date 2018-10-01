declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module '@atlaskit/button'

declare var process: {
  env: {
    NODE_ENV: string
    REACT_APP_GRAPH_ENDPOINT: string
    REACT_APP_FIREBASE_api_key: string
    REACT_APP_FIREBASE_project_id: string
    REACT_APP_FIREBASE_storage_bucket: string
  }
}
