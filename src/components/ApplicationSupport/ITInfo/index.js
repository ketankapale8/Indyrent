import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ItInfo() {
  const [value, setValue] = React.useState('option1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        style={{paddingLeft:'30px'}}
      >
        <FormControlLabel value="option1" control={<Radio />} label="Return an app to Intake and unlock agency form" />
        <p>
        Example: Returns an app to intake workflow and opens the agency form to allow staff revisions
        </p>
        <FormControlLabel value="option2" control={<Radio />} label="Resend tenant self funding application invite" />
        <p>
        Example: Sends an invitation for tenant self-funding to a tenant who has misplaced or never received the tenant self-funding invitation.
        </p>
        <FormControlLabel value="option3" control={<Radio />} label="Unlock tenant for tenant self funding application" />
        <p>
        Example: Unlocks a tenant self-funding application to allow for tenant revisions
        </p>
        <FormControlLabel value="option4" control={<Radio />} label="Reverse tenant self funding and allow landlord participation" />
        <p>
        Example: Allows landlord participation after the 21 day window
        </p>
        <FormControlLabel value="option5" control={<Radio />} label="Resend additional funding application invite" />
        <p>
        Example: Sends an invitation for additional funding to a tenant who has misplaced or never received the additional funding invitation.
        </p>
        <FormControlLabel value="option6" control={<Radio />} label="Unlock tenant for additional funding application" />
        <p>
        Example: Unlocks additional funding to allow for tenant revisions. Please deny the application in Vasion before sending this request.
        </p>
        <FormControlLabel value="option7" control={<Radio />} label="Change tenant email address" />
        <FormControlLabel value="option8" control={<Radio />} label=" Send to evictions" />
        <p>
        Example: Sends an app to the evictions work flow. For use by leadership and the eviction team only.
        </p>
        <FormControlLabel value="option9" control={<Radio />} label="Other (fill in blank on the need)" />
      </RadioGroup>
    </FormControl>
        

    </>
  )
}
