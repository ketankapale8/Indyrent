import React from 'react'
import Box from '@mui/material/Box'
import SubHeader from '../common/subHeader'


export default function ApplicationSupport({title}) {
  return (
    <>
    <Box
       sx={{
        width: 1000,
        height: 400,
        backgroundColor: '#EAEAEA',
      }}
      style={{marginLeft:200,marginTop:30,alignContent:'center',display:'flex',flexDirection:'column' ,justifyContent:'center'}}
    >
    <SubHeader title={title}/>
    </Box>
    
    </>
  )
}
