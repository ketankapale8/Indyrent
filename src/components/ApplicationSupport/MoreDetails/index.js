import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

export default function MoreDetails() {
  return (
    <div>
      <h3 style={{fontWeight:'bold' , display:'flex', flexDirection:'row', paddingLeft:'420px', alignContent:'center'}}>Please Provide More details</h3>
        <TextareaAutosize
      aria-label="empty textarea"
      style={{ width: 1100 , height:50 , marginLeft:30 }}
      />
      <Stack direction="row" alignItems="left" spacing={2} style={{paddingLeft:'30px'}}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Choose File
        </Button>
        <span style={{paddingLeft:'10px'}}>No file chosen</span>
      </label>
      </Stack>
    </div>
  )
}
