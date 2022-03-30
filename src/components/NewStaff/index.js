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
import './styles.css'

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
        height: 400,
        backgroundColor: '#FFFFF',
      }}
      style={{ marginLeft: 200, marginTop: 40, alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <SubHeader title={title} />
      <div className='mainContainer'>
        <Grid container spacing={2}>
          <Grid xs={4} >
            <TextField
              id="outlined-required"
              label="First Name"
              // defaultValue="First Name"
              placeholder='First Name'
              className='textField'
              type="text"
            />
          </Grid>

          <Grid xs={4}>
            <TextField
              id="outlined-required"
              label="Last Name"
              placeholder='Last Name'
              type="text"
              className='textField'


            />
          </Grid>

          <Grid xs={4}>
            <TextField
              id="outlined-required"
              label="Email"
              type="email"
              placeholder='Email'
              className='textField'

            />
          </Grid>



          <Grid xs={4} style={{ paddingTop: 20 }}>
            <TextField
              id="outlined-required"
              label="Phone Number"
              placeholder='Phone Number'
              className='textField'
              type="number"
            />
          </Grid>

          <Grid xs={5} style={{ paddingTop: 20 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Start Date"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ paddingTop: 35 }} >
          <Grid xs={4}>
            <Stack spacing={3} sx={{ width: 195 }}>
              <Autocomplete
                id="work-role"
                Work Role
                options={dropdownOptions.map((option) => option.items)}
                renderInput={(params) => <TextField {...params} label="Work Role" />}
              />
            </Stack>
          </Grid>

          <Grid xs={4}>
            <Stack spacing={2} sx={{ width: 405 }}>
              <Autocomplete
                id="work-role"
                Work Role
                options={dropdownOptions.map((option) => option.items)}
                renderInput={(params) => <TextField {...params} label="Community Center" />}
              />
            </Stack>
          </Grid>

        </Grid>


      </div>

    </Box>
  )
}
