import React from 'react'
import WebFont from 'webfontloader';


export const Home = () => {
    React.useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Antonio']
          }
        });
       }, []);
     
  return (
    <div className="page-content">
     This is with Web Font Loader using the class attribute. 
     We are loading the <u><b>Chilanka</b></u> font from the Google Fonts.
 </div>
  )
}
