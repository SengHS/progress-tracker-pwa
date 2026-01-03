'use client'

import { useEffect } from 'react'
import { registerServiceWorker } from './sw-register'

export function ServiceWorkerProvider() {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return null
}
