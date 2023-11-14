'use client'

import { SessionProvider } from "next-auth/react"


const SessionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionLayout;