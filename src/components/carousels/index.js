import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ShopMen from '../../assets/men.jpg'
import ShopWomen from '../../assets/women.jpg'

const CarouselComponent = () => {
  const imgMaxWIdth = { maxHeight: '100%' }
  return (
    <Carousel className='mt-0'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={imgMaxWIdth}
          src={ShopMen}
          alt='Second slide'
        />
        <Carousel.Caption>
          <Button size='lg' as={Link} to='/registration'>
            Shop Men
          </Button>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={imgMaxWIdth}
          src={ShopWomen}
          alt='Third slide'
        />

        <Carousel.Caption>
          <Button as={Link} to='/shop/women' size='lg' variant='danger'>
            Shop Women
          </Button>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent
