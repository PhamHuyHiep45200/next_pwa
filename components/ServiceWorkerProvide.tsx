"use client"
import React, { useEffect } from 'react'

function ServiceWorkerProvide({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);
  return (
    <>
      {children}
    </>
  )
}

export default ServiceWorkerProvide
