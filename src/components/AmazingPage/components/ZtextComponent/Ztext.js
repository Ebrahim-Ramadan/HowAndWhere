import React from 'react'
import Ztext from 'react-ztext'
import './ZtextComponent.css'
export const ZtextComponent = () => {
  return (
        <Ztext
    depth='0.5rem'
    direction='both'
    event='pointer'
    eventRotation='20deg'
    eventDirection='default'
    fade={false}
    layers={1}
    perspective='500px'
    style={{
      fontSize: '1rem',
      fontWeight:'bold',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      marginTop:'-60px'
    }}
  >
    <a id='sharmojj' role='img'  target="blank" href='https://github.com/Ebrahim-Ramadan' aria-label='emoji'>
      Ebrahim Ramadan
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
          
          <line x1="10.5" x2="6.5" y1=".5" y2="14.5" />
          
          <polyline points="7.328 2.672 7.328 8.328 1.672 8.328" transform="rotate(135 4.5 5.5)" />
          
          <polyline points="15.328 6.672 15.328 12.328 9.672 12.328" transform="scale(1 -1) rotate(-45 -10.435 0)" />
          </g></svg>
      </a>
        
    </Ztext>


  )
}
