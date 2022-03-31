import React from 'react'
import Box from '@mui/material/Box'
import SubHeader from '../common/subHeader'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import '../NewStaff/styles.css'

export default function NewStaff({ title }) {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const dropdownOptions = [
    {
      items: 'item 1'
    },
    {
      items: 'item 2'
    },
    {
      items: 'item 3'
    }
  ]

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff',
      }}
      style={{ marginLeft: 200, marginTop: 100 ,paddingTop:100, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <SubHeader title={title}/>
      <div className='newStaffContainer'>
          <span className='custom-input-label'>Name</span>
          <Grid item xs={10} >
            <TextField
              // fullWidth
              variant='outlined'
              
              placeholder='First Name'
              className='textField'
              type="text"
            />
          </Grid>

          <span className='custom-input-label'>Last Name</span>
          <Grid xs={10}>
            <TextField
              id="outlined"
              placeholder='Last Name'
              type="text"
              className='textField'
            />
          </Grid>

          <span className='custom-input-label'>Email</span> 
          <Grid xs={10}>
            <TextField
              id="outlined"
              type="email"
              placeholder='Email'
              className='textField'

            />
          </Grid>


          <span className='custom-input-label'>Phone Number</span> 

          <Grid xs={10}>
            <TextField
              id="outlined-required"
              placeholder='Phone Number'
              className='textField'
              type="number"
            />
          </Grid>

          <span className='custom-input-label'>Start Date</span> 
          <Grid xs={10} style={{width :950}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={2} >
                <DesktopDatePicker
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        {/* </Grid> */}

        {/* <Grid container spacing={2} style={{ paddingTop: 35 }} > */}
        <span className='custom-input-label'>Work Role</span> 
          <Grid xs={10}>
            <Stack spacing={3} sx={{ width: 950 }}>
              <Autocomplete
                options={dropdownOptions.map((option) => option.items)}
                renderInput={(params) => <TextField {...params} placeholder="Select"/>}
              />
            </Stack>
          </Grid>

          <span className='custom-input-label'>Community Center</span> 
          <Grid xs={10}>
            <Stack spacing={2} sx={{ width: 950 }}>
              <Autocomplete
                options={dropdownOptions.map((option) => option.items)}
                renderInput={(params) => <TextField {...params} placeholder="Select" />}
              />
            </Stack>
          </Grid>

        {/* </Grid> */}


      </div>

    </Box>
  )
}
