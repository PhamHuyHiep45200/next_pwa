"use client"
import { ChildrenProps } from '@/models/ProvideType'
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

function StoreProvide({ children }: ChildrenProps) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvide