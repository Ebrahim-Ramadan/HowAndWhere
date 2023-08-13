import React, {useState} from 'react';
import { render } from 'react-dom';
import './SignUp-Login';
import { connect } from 'react-redux';
import axios, { AxiosError } from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useFormik } from 'formik';


export const SignUpLogin = (props) => {
  const [error, setError] = useState('');
  const SignIn = useSignIn();


  const onSubmit = async (values) => {
    console.log('values', values);
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/login',
        {
          email: values.email,
          password: values.password
        }
      );
      SignIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: values.email }
      });
    } catch (err) {
      if (err && err instanceof AxiosError) {
        setError(err.response?.data.message);
      } else if (err && err instanceof Error) {
        setError(err.response);
      }
      console.log('error:', err);
    }
  };
  

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, onSubmit,
  });
  return (
    <div className='page-content'>
<form onSubmit={formik.handleSubmit}>
      <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        placeholder='email'
        type='email'
        name='email'
      />
      <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
              placeholder='password'
              type='password'
              name='password'
      />
      <button
      isLoading={formik.isSubmitting}
      >
        Login

</button>


    </form>

    </div>
    )

};
