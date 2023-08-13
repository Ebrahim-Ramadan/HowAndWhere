import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const Form = () => {
    const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();
  const [IsCompany, setIscompany] = useState(false);
  const [InputValues, setInputValues] = useState({});

  const handleCheckBox = (e) => {
    setIscompany(e.target.checked);
  }


    const handleSubmit = (e) => {
      e.preventDefault();
      setName('');
      setEmail('');
      navigate('/');
    }
    return (

      <div className='page-content'>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
        >
          <div className='SignupForm'>
          <form onSubmit={handleSubmit}>


              <TextField
                helperText='(will be recorded along your journey and labelled in your certificate)'
          id="outlined-textarea"
          label="Full Name"
          placeholder="Placeholder"
          multiline
/>
              <TextField
          id="outlined-textarea"
          label="First Name"
          placeholder="Placeholder"
          multiline
/>
              <TextField
          id="outlined-textarea"
          label="First Name"
          placeholder="Placeholder"
          multiline
/>
              <TextField
          id="outlined-textarea"
          label="First Name"
          placeholder="Placeholder"
          multiline
/>
</form>
</div>
    </Box>

      </div>
    );
  }
