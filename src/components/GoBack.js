import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
export const GoBack = () => {
    const nav = useNavigate()
  return (
    <FontAwesomeIcon
      style={{margin:'10px', cursor: 'pointer', padding: '10px'}}
      icon={faArrowLeft}
      size='lg'
              onClick={() => nav(-1)}
          />
  )
}
