import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Browsebtn = () => {
    const navigate = useNavigate();

    const FP_redirect = (navURL) => {
        navigate(navURL);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0px' }}>
            <Button
                onClick={() => FP_redirect('/FeaturedProducts')}
                variant="contained"
                size="large"
                color="secondary"
            >
          Browse
          <span style={{ margin: '4px' }}></span>

          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(4 3)"><path d="m2.5.5h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="m10.2022469 14.5-3.64502265-1.9482581c-.65083781-.3478717-1.05722425-1.0258787-1.05722425-1.763852v-6.57577979c0-.73797327.40638644-1.41598036 1.05722425-1.76385201l3.64502265-1.9482581" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="7.5" fill="currentColor" r="1"/></g></svg>
            </Button>
            <span style={{ margin: '10px' }}></span>
            <Button
                onClick={() => FP_redirect('/Desires')} // Replace 'OtherRoute' with the appropriate route
                variant="outlined"
                size="large"
                color="secondary"
            >
          Desires
          <span style={{ margin: '4px' }}></span>

          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 5)"><path d="m8.5 11c3.1296136 0 5.9629469-1.83333333 8.5-5.5-2.5370531-3.66666667-5.3703864-5.5-8.5-5.5-3.12961358 0-5.96294692 1.83333333-8.5 5.5 2.53705308 3.66666667 5.37038642 5.5 8.5 5.5z"/><path d="m8.5 2c.18463928 0 .36593924.01429736.54285316.04184538-.02850842.148891-.04285316.30184762-.04285316.45815462 0 1.38071187 1.1192881 2.5 2.5 2.5.156307 0 .3092636-.01434474.4576252-.04178957.0280774.17585033.0423748.35715029.0423748.54178957 0 1.93299662-1.5670034 3.5-3.5 3.5-1.93299662 0-3.5-1.56700338-3.5-3.5s1.56700338-3.5 3.5-3.5z"/></g></svg>
          
            </Button>
        </div>
    );
};
