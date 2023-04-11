import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material/';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  
  return (
    <Box id='exercises' sx={{ mt: { lg: '110px'}} } mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises