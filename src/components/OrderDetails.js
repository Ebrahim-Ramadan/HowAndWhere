import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Select from 'react-select';
import FormControlLabel from '@mui/material/FormControlLabel';
import countryList from 'react-select-country-list'
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import NewProducts from './NewProducts';
import { useParams } from 'react-router-dom';
// import { Label } from '@thumbtack/thumbprint-react';

const label = { inputProps: { 'aria-label': 'Iscompanycheck' } };
export const OrderDetails = () => {
  const { selectedItem } = useParams();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const [FirstTime, setFirstTime] = React.useState('a');

    const handleFirstTime = (e) => {
        const firstimecheck = e.target.checked;
        setFirstTime(firstimecheck);
        console.log(firstimecheck)
    }
  const navigate = useNavigate();
  const [IsCompany, setIscompany] = useState(false);
  const [InputValues, setInputValues] = useState({});


    const handleIscompanycheck = () => {
        setIscompany(!IsCompany);
        console.log(IsCompany)
    };
    const handleIscompanyInput = (e) => {
        setIscompany(e.target.value);
     }
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    return (

      <>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
        >
          <React.Fragment>
    <label for="example-49293">{selectedItem} </label>
          </React.Fragment>

          <div className='SignupForm'>
          <form onSubmit={handleSubmit}>


              <TextField
                helperText='(will be recorded along your journey and labelled in your certificate)'
          id="outlined-textarea"
          label="Full Name"
          placeholder="Placeholder"
                            multiline
                            focused 
          />
        <TextField
          id="outlined-textarea"
          label="Company Name"
          placeholder="folloewd by .Inc"
          multiline
          variant="filled"
        />
        <TextField
          id="outlined-textarea"
          label="You Exact Address"
          placeholder="in any form you want"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="E-mail"
          placeholder="in any form you want"
          multiline
        />
        <TextField
          id="outlined-textarea-required"
          label="Phone"
          placeholder="in any form you want"
            multiline
            variant="filled"
                        />
                        <FormControl sx={{ m: 1.35, width: '25ch' }} variant="filled">
                            
          <FilledInput
            id="filled-adornment-age"
            endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
            aria-describedby="filled-age-helper-text"
            inputProps={{
              'aria-label': 'age',
            }}
                            />
                            <FormHelperText id="filled-age-helper-text">Age</FormHelperText>

                            </FormControl>
                        <FormControl>


      {IsCompany ? (
        <TextField
          id="outlined-disabled"
          label="Company Name"
          placeholder="followed by .Inc"
        />
      ) : (
        <TextField
        id="outlined-required"
        label="Your National ID, human>"
        placeholder="14-digit no."

      />
                            )}
                                                    <FormControlLabel
        control={<Checkbox checked={IsCompany} onChange={handleIscompanycheck} />}
        label="Company?"
      />
                        </FormControl>
                        <FormControlLabel
        control={<Checkbox checked={FirstTime} onChange={handleFirstTime}/>}
        label="First Time wth us?"
      />
</form>
</div>
    </Box>

      </>
    );
  }
