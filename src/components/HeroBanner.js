import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

import HeroBannerImage from '../assets/images/banner2.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px'}, ml: { sm: '50px' }}} position='relative' p='20px'>
        <Typography color='#3A1212' fontWeight='600' fontSize='20px' >
            FITNESS CLUB
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }}} mb='20px' mt='30px'>
            Harder, Faster <br />and Stronger.
        </Typography>

        <Button variant='contained' href='#exercises' sx={{ backgroundColor: '#303030'}}>Let's get start</Button>

        <Typography fontWeight={600} color='#303030' sx={{ opacity: 0.4, display: { lg: 'block', xs: 'none' } }} fontSize='200px'> Exercises </Typography>

        <img src={HeroBannerImage} alt="" className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner