import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import SubHeader from '../common/subHeader';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import './styles.css'

export default function Home({title}) {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          width: 1000,
          height: 400,
          backgroundColor: '#ffffff',
        }}
        style={{ marginLeft: 200, marginTop: 30, paddingTop:70, alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div>
        <SubHeader title={title}  />

          <Stack spacing={2} direction="column" className='boxContainer'>
            <Button className='Homebutton' variant="contained" onClick={() => navigate('/application-support')} >APPLICATION SUPPORT</Button>
            <Button className='Homebutton' variant="contained" onClick={() => navigate('/new-staff')} >REGISTER NEW STAFF</Button>
            <Button className='Homebutton' variant="contained" onClick={() => navigate('/close-existing-staff')} >CLOSE AN EXISTING STAFF</Button>
          </Stack>
        </div>
      </Box>

    </>
  )
}
