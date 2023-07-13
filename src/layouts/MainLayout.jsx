import React from 'react'
import { Outlet } from 'react-router-dom'
import { MDBContainer } from 'mdb-react-ui-kit'

function MainLayout() {
  return (
    <MDBContainer
      fluid
      className='pb-2'
      style={{ minHeight: '100vh' }}
    >
      <Outlet />
    </MDBContainer>
  )
}

export default MainLayout