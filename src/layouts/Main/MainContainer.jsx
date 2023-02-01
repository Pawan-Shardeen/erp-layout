import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainContainer() {
  return (
    <main id="sec-base-body">
        <Outlet />
    </main>
  )
}
