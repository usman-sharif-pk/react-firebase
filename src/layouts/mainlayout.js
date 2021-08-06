import React from 'react'
import { Container } from 'react-bootstrap'

import Footer from '../components/footer'
import Header from '../components/header'

const MainLayout = props => {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  )
}

export default MainLayout
