import React from 'react'
import './contacts.css'
import Button from '@mui/material/Button';

export const Contacts = () => {
  const SendingEmail = () => { 
      const to = 'ramadanebrahim791@gmail.com'; //pretty good me
      const subject = encodeURIComponent('Your subject here');
      const body = encodeURIComponent('Your message here');

      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`;

      window.open(gmailUrl);
  }
  return (
      <div className='contacts'>
      <svg onClick={SendingEmail} height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3.5 4.5)"><path d="m0 2v8c0 1.1045695.8954205 2 2 2h10c1.1045695 0 2-.8954205 2-2v-8c0-1.1045695-.8954205-2-2-2h-10c-1.1045695 0-2 .8954205-2 2z" /><path d="m2 3 5 3 5-3" /></g></svg>
          <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><path d="m15.5.465-8 8.033" /><path d="m10.5 16.5-3-8.002-7-2.998 15-5z" /></g></svg>
          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 4v14"/><path d="m14.5 4v14"/><path d="m3.5 7h14"/><path d="m3.5 15h14"/></g></svg>
    </div>
  )
}
