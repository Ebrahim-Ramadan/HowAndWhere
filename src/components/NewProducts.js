import { MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEuro } from '@fortawesome/free-solid-svg-icons'
import { faCircleDot, faShareFromSquare,faFlag } from '@fortawesome/free-regular-svg-icons'

export const NewProducts = () => {
  const NewProducts = [
    'lorem Ipsum dolor sit amet',
    'viruting velit was velit',
    'giver esse velit',
    'dolor yet another bond',
    'proper sed diam aliquet',
    'more et just w',
    'aliquet Theorem Writes',
  ];  
  const NewPrices = [
    '6520',
    '6520',
    '6520',
    '6520',
    '6520',
    '6520',
    '6520',
  ];
  const NewCompanies = [
    'X.Inc',
    'X.Inc',
    'X.Inc',
    'X.Inc',
    'X.Inc',
    'X.Inc',
    'X.Inc',
  ];

  const navigate = useNavigate();
  const [newItem, setNewItem] = useState('');

  const handleSelectedNewItem = (selectedItem, index) => {
    setNewItem(selectedItem);
    console.log(selectedItem);
    navigate(`/Products/new/OrderDetails/${index}`); // Pass the index as the ID in the URL
    console.log(NewProducts);
  };

  return (
    <MDBListGroup style={{ minWidth: '220px' }} light>
        {NewProducts.map((NewProduct, index) => (
          <MDBListGroupItem
            aria-current='false'
            className="d-flex justify-content-between align-items-center"
            key={NewProduct}
          >
            <label>
              <span style={{display:'inline-block'}}>
              <FontAwesomeIcon icon={faCircleDot} style={{color: "#6996e2"}} />
  
              </span>
              <span style={{ marginLeft:'8px'}}>
              {NewProduct}
  
              </span>
  
  </label>
            <div>
              <label>
                <span className="price" style={{display:'inline-block'}}>
                  <strong>{NewPrices[index]}    </strong>
                </span>
                <span className="currency" style={{ marginLeft:'5px'}}>
                <FontAwesomeIcon icon={faEuro} style={{color: "#002970",}} />
                </span>
              </label>
                </div>
                

            <a href={`##/Products/Featured/OrderDetails/${index}`} onClick={(e) => { e.preventDefault(); handleSelectedNewItem(NewProduct, index); }}>
              <SvgIcon>
                {/* credit: plus icon from https://heroicons.com/ */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{color: "#2753a0",}} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </SvgIcon>
                </a>
                
                <MDBBtn cursor='pointer' color="light-blue" onClick={() => handleSelectedNewItem(NewProduct, index)}>
                <FontAwesomeIcon  icon={faFlag} size='lg'  />
                </MDBBtn>
                <MDBBtn  target="self" color="light-blue">
                <FontAwesomeIcon icon={faShareFromSquare}  />
                </MDBBtn>
                <MDBBtn color="primary" className="waves-effect" size='ls'>
              {NewCompanies[index]}
            </MDBBtn>
            <MDBBtn outline size='ls' onClick={() => handleSelectedNewItem(NewProduct, index)}>
              Place an order
                </MDBBtn>

          </MDBListGroupItem>
        ))}
      </MDBListGroup>
  );
};
