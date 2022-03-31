import React from 'react'
import Box from '@mui/material/Box'
import SubHeader from '../common/subHeader'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './styles.css'

export default function CloseExistingStaff({ title }) {
  return (
    <>
      <Box
        sx={{
          width: 1000,
          height: 400,
          backgroundColor: '#FFFFFF',
        }}
        style={{ marginLeft: 200, marginTop: 40, alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <SubHeader title={title} />
        <div className='mainContainer'>
          {/* <Typography variant='h5' style={{fontWeight:'bold'}} >Email</Typography> */}
          <span className='custom-input-label'>Email</span>
          <TextField  id="outlined-basic" variant="outlined" style={{paddingBottom:20 , width:350 }} placeholder="Email"/>
          <Stack spacing={2} direction="row">
            <Button variant="contained" className='Homebutton'>Submit</Button>
          </Stack>
        </div>
      </Box>
    </>
  )
}
