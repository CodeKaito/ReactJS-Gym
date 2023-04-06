import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo2 from '../assets/images/Logo2.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px='20px' >
      <Link>
        <img src={Logo2} alt="logo" style={{ width: '200px', height:'200px' }}/>
      </Link>

      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to='/' style={{ textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #5c5b5b' }}>Home</Link>
        <a href='#exercises' style={{ textDecoration:'none', color:'#5c5b5b' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
