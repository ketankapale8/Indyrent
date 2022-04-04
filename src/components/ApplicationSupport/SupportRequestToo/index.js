import React , {useState} from 'react'
import Box from '@mui/material/Box'
// import SubHeader from '../common/subHeader'
import './styles.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';


export default function SupportRequestTool() {
    const [email , setEmail] = useState('');
    const [appId , setAppId] = useState('');

  return (
    <div className='newStaffContainer'>
    <span className='custom-input-label'>Staff Email Address</span>
    <Grid item xs={10} item >
      <TextField
        variant='outlined'
        value={email}
        placeholder='Staff Email address'
        className='textField'
        type="text"
        onChange={(e)=>setEmail(e.target.value)}
      />
    </Grid>

    <span className='custom-input-label'>Enter AppId</span>
    <Grid xs={10} item>
      <TextField
        id="outlined"
        value={appId}
        placeholder='Enter AppId'
        type="text"
        className='textField'
        onChange={(e)=>setAppId(e.target.value)}
      />
    </Grid>
</div>
  )
}
