import React from 'react'
import {Shapes} from './components/Shapes/Shapes'
import {Consecutives} from './components/consecutives/Consecutives.tsx'
import {Browsebtn} from './components/Browsebtn'

export const Running = () => {
  return (
    <>
        <Shapes />
<Browsebtn/>
      <Consecutives />
    </>
  )
}
