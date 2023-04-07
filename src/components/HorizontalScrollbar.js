import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'

import { ScrollMenu } from 'react-horizontal-scrolling-menu'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
        {data.map((item) => 
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} margin='0 40px'>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar