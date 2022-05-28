import React from 'react'

type Props = {
  children: React.ReactNode
}

export const LayoutWrapper: React.VFC<Props> = ({ children }) => {
  return (
    <div className={'max-w-screen-xl mx-auto px-5'}>
      { children }
    </div>
  )
}