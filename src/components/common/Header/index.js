import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='container'>
        <div className='headerItems' onClick={()=>navigate("/")}>
          <span style={{fontSize:30 ,fontWeight:'bold'}}>City of Indianapolis</span>
          <span style={{fontSize:20}}>Support Request Tool</span>
        </div>
    </div>
  )
}
