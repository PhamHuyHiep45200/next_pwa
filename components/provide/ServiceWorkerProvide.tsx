"use client"
import { ChildrenProps } from '@/models/ProvideType';
import React, { useEffect } from 'react'

function ServiceWorkerProvide({ children }: ChildrenProps) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        // eslint-disable-next-line no-console
        .then((registration) => console.log('scope is: ', registration.scope));
    }
    console.log('ok');

  }, []);
  return (
    <>
      {children}
    </>
  )
}

export default ServiceWorkerProvide
