import React from 'react'
import Box from '@mui/material/Box'
import SubHeader from '../common/subHeader'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './styles.css'

export default function NewStaff({title}) {
  return (
    <Box
        sx={{
          width: 1000,
          height: 400,
          backgroundColor: '#FFFFFF',
        }}
        style={{ marginLeft: 200, marginTop: 40, alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <SubHeader title={title} />
        
      </Box>
  )
}
