import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCgbK9LhhE-3KPbFReMJLJvL5EzB4ej03A',
  authDomain: 'monportfolio-13284.firebaseapp.com',
  projectId: 'monportfolio-13284',
  storageBucket: 'monportfolio-13284.firebasestorage.app',
  messagingSenderId: '430532162933',
  appId: '1:430532162933:web:2b403c55e5de1269280f3c',
  measurementId: 'G-XMGQLXRZM6',
}

export const app = initializeApp(firebaseConfig)

export const initAnalytics = async () => {
  if (typeof window === 'undefined') {
    return null
  }

  const supported = await isSupported()
  return supported ? getAnalytics(app) : null
}

