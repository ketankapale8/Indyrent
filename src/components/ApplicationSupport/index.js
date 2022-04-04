import React , {useState , useEffect , Dimensions} from 'react'
import Box from '@mui/material/Box'
import SubHeader from '../common/subHeader'
import './styles.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import SupportRequestTool from './SupportRequestToo';
import TenantInfo from './TenantInfo';
import ItInfo from './ITInfo';
import MoreDetails from './MoreDetails';
import FinalInfo from './FinalInfo';


export default function ApplicationSupport({title}) {
  const [email , setEmail] = useState('');
  const [appId , setAppId] = useState('');
  const [page , setPage] = useState(0)

  const titlesInfo = ["Support Request Tool" ,"Tenant Information" , "What are you needing from IT on this application?" , "Please select the reason for your action" , "Tenant Information"]
  
 
const handlePageInfo = () =>{
  if(page == 0){
    return <SupportRequestTool/>
  }
  if(page == 1){
   return <TenantInfo/> 
  }
  if(page == 2){
    return <ItInfo/>
  }
  if(page == 3){
    return <MoreDetails/>
  }
  if(page == 4){
    return <FinalInfo/>
  }
}



  return (
    <>
    <Box
       sx={{
        width: '80%',
        height: '60%',
        backgroundColor: '#ffffff',
      }}
      style={{marginLeft:150,marginTop:80, paddingTop:220, alignContent:'center',display:'flex',flexDirection:'column' ,justifyContent:'center'}}
    >
    <SubHeader title={titlesInfo[page]}/>
          {handlePageInfo()}
          <Grid xs={10} className="lowerInfo">
          <Stack direction="row">
            {page === 0 ? null : (
              <Button variant="contained" 
                //  disabled = {page == 0}
                 onClick={()=>{setPage((currentPage=>currentPage-1))}}  className='Homebuttons'>CANCEL
              </Button>
            )}
            {page == titlesInfo.length-1 ? (
              <Button variant="contained" 
              className='Homebuttons'>SUBMIT</Button>
            ) : (
                <Button variant="contained" 
                 style={{alignSelf:'center'}}
                 disabled = {page == titlesInfo.length-1}
                 onClick={()=>{setPage((currentPage=>currentPage+1))}}  className='Homebuttons'>NEXT</Button>
            )}
          </Stack>
          </Grid>
    </Box>
    </>
  )
}
