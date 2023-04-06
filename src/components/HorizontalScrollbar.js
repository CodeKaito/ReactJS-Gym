import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
        {data.map((item) => 
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} margin='0 40px'>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
        )}
    </div>
  )
}

export default HorizontalScrollbar