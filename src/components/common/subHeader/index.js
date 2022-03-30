import React from 'react'
import './styles.css'

export default function SubHeader({title}) {
  return (
    <div className='subHeaderContainer'>
        <h3 className='subHeaderTitle'>{title}</h3>
        <hr/>
    </div>
  )
}
