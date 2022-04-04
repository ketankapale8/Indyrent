import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SubHeader from '../../common/subHeader';
import './styles.css'

export default function FinalInfo() {

  function createTenantInfo(name , items) {
    return {name , items};
  }
  const rows = [
    createTenantInfo('Application Id','4908BQNL-2'),
    createTenantInfo('Tenant First Name',  'Test'),
    createTenantInfo('Tenant Last Name','Application' ),
    createTenantInfo('Tenant Email', 'name@name.com'),
    createTenantInfo('Tenant Phone' , '9860694302'),
  ];

  function createStatusUpdate(name , items){
    return {name , items}
  }

  const rows1 = [
    createStatusUpdate('Application status' , 'submit'),
    createStatusUpdate('Vasian status', 'some issue occoured')
  ]

  function taskDetails(action , details){
      return {action , details}
  }

  const rows2 = [
    taskDetails('Action','Resend additional funding application invite'),
    taskDetails('Details/Additional Details','')

  ]
  return (
    <>
    <TableContainer component={Paper} style={{paddingLeft:'10px'}}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={{paddingRight:50}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.items}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <div className='subHeaderContainers'>
        <h3 className='subHeaderTitles'>Status</h3>
        <hr className='hr'/>
      </div>


        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.name}
              style={{paddingRight:50}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.items}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <div className='subHeaderContainers'>
        <h3 className='subHeaderTitles'>Task Details</h3>
        <hr className='hr'/>
        </div>


        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.name}
              style={{paddingRight:50}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.action}
              </TableCell>
              <TableCell align="right">{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    
  
    </TableContainer>
    

    </>

    
  )
}
