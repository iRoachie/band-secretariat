import firebase from 'firebase/app'
import 'firebase/storage'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_api_key,
  projectId: process.env.REACT_APP_FIREBASE_project_id,
  storageBucket: process.env.REACT_APP_FIREBASE_storage_bucket,
}

export default firebase.initializeApp(config)
