import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Profile2.css';
import pfp from '../assets/human_head.jpeg';
import header from '../assets//New-header.jpg';
import Carousel, { Modal as ImageModal, ModalGateway } from 'react-images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTimes , faPersonBurst } from '@fortawesome/free-solid-svg-icons';
import { ImageUploadcrop } from './imageUpload-crop';
import { HeaderUploadcrop } from './HeaderUpload_crop';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

function DropdownItem(props) {
  return (
    <li className="dropdownItem follower-following">
      <div>
        <i className={props.i} ></i>
        <a href={props.href} style={{marginLeft:'10px'}}>{props.text}</a>
      </div>
      <span className="follower-count">{props.followers} followers</span>
    </li>
  );
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: 10,
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'transparent',
    border: '2px solid ##EEE',
    borderRadius:'10px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
const toastify = (ImageSrc) => {
  toast.success(`${ImageSrc} updated`, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
    theme: 'dark'
  });
};


const male = 'he/him';
const female = 'she/her';
const sharmo_jj = 'sharmo_jj';
const bio = 'github.com/Ebrahim-Ramadan';

export const Profile2 = () => {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imgviewercaption, setImgViewerCaption] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const openLightbox = useCallback((imgsource, caption) => {
        setImgViewerCaption(caption);
        setSelectedImage(imgsource);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setImgViewerCaption(null);
        setSelectedImage(null);
        setViewerIsOpen(false);
    };

    // Editing pfp
    const [src, stsrc] = useState(null);
    const [src_header, stsrc_header] = useState(null);
    const [preview, setPreview] = useState(null);

    const onClose = () => {
        setPreview(null);
    };

    const onCrop = (view) => {
        setPreview(view);
    };


    // Show the pfp edit btn
    const [editpfp_imgcrop, seteditpfp_imgcrop] = useState(false)
    const editpfp_imgcrop_func = () => {
        seteditpfp_imgcrop(true)
    }
  
    const [editheader_imgcrop, seteditheader_imgcrop] = useState(false)
    const editheader_imgcrop_func = () => {
        seteditheader_imgcrop(true)
    }
  

    // Show the edit btn


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                seteditheader_imgcrop(false);
                seteditpfp_imgcrop(false)
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

   
    const handleSave = (croppedImageURL) => {
        stsrc(croppedImageURL);
        seteditpfp_imgcrop(false);
        toastify('pfp')

    };
    const handleSave_header = (croppedImageURL) => {
        stsrc_header(croppedImageURL);
        seteditheader_imgcrop(false);
        toastify('header')

    };

    const dropdownRef = useRef(null);   
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  React.useEffect(() => {
    const handleKeyDown = (event) => {
        handleOpen();
    };


    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
    return (
<div className="page-content">
  <div className='upperpart'>
    
    
                <div className="PFPandHeader">
                    <img
        alt="cover"
        src={src_header || header}
        style={{ height: '40%' }}
        onClick={() => openLightbox(src_header, 'header')}
      />
                    
                    <img
        alt="PFP"
        className="PFP"
        src={src||pfp}
        style={{ height: '20%' }}
        onClick={() => openLightbox(src, 'pfp<3')}
                    />

    </div>
            </div>

            <div className='usernameINFO'>
                <div>
                <h3>Mourii
                <h6 style={{ color: 'gray' }}>
                @<span>{sharmo_jj}</span>
                <span style={{ padding: '0px 4px' }}>·</span>
                <span>{male}</span>
            
            </h6></h3>
            

            <h6>
              <a href={bio} target="_blank ">
                {bio}
              </a>
            </h6>
            <h6>
              <span onClick={handleOpen} className='twofollowers'>
                2 followers
              </span>
              <span style={{ padding: '0px 1.5px' }} />.
              <span style={{ padding: '0px 1.5px' }} />
              <span className="following">28 following</span>
            </h6>
                </div>
          </div>

            {/* absolute edit */}
            <div className='Edit'>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{
          position: 'absolute',
          bottom: '50px',
          right: '15px', 
          fontSize: '30px',
          cursor: 'pointer',
        }}
        onClick={editheader_imgcrop_func}
      />
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{
          position: 'absolute',
          bottom: '25px',
          right: '20px', 
          fontSize: '20px',
          cursor: 'pointer',
          opacity: '0.9',
        }}
        onClick={editpfp_imgcrop_func}
      />

      {editheader_imgcrop && <HeaderUploadcrop setCroppedImage={handleSave_header} />}
      {editpfp_imgcrop && <ImageUploadcrop setCroppedImage={handleSave} />}
            </div>

            <div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
              <Box sx={{ ...style, width: 400 , border:'none', outline:'none'}}>




                        <div className="dropmenu-followers" ref={dropdownRef}>

            <div>
                                <div className='followersX'>
                                    <h4>
                                        <FontAwesomeIcon icon={faPersonBurst} style={{marginRight:'5px'}} />
                                        <FontAwesomeIcon icon={faPersonBurst} style={{marginRight:'5px'}} />
                                        <FontAwesomeIcon icon={faPersonBurst} style={{marginRight:'5px'}} />
                                        </h4>
                                <FontAwesomeIcon
              icon={faTimes}
              className='close-icon'
              onClick={handleClose}
              style={{ cursor: 'pointer',fontSize:'20px', translate:'40px 0px'}}
            />
</div>
              <DropdownItem i="bi bi-person-square" href="/person01" text="person01" followers='645'/>
              <DropdownItem i="bi bi-person-square" href="/person02" text="person02" followers='154'/>
              <DropdownItem i="bi bi-person-square" href="/person05" text="person05" followers='369'/>
              <DropdownItem i="bi bi-person-square" href="/person03" text="person03" followers='144'/>
              <DropdownItem i="bi bi-person-square" href="/person04" text="person04" followers='584'/>
            </div>

        </div>
            


        </Box>
      </Modal>
    </div>





      <div className="classifyList">
        <NavLink className="classifyList-ul" to="/Desires" activeClassName="active">
          YourDesires
        </NavLink>
        <NavLink className="classifyList-ul" to="/Profile/YourFeed" activeClassName="active">
          YourFeed
        </NavLink>
        <NavLink
          className="classifyList-ul"
          to="/Profile/Recommendations"
          activeClassName="active"
        >
          Recommendations
        </NavLink>
        <NavLink className="classifyList-ul" to="/Profile/Memories" activeClassName="active">
          Memories
        </NavLink>
        <NavLink className="classifyList-ul" to="/Profile/Terribles" activeClassName="active">
          Terribles
        </NavLink>
      </div>
      <Outlet />

      <ModalGateway>
        {viewerIsOpen && selectedImage && imgviewercaption && (
          <ImageModal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={0}
                            views={[
                                { source: selectedImage, caption: imgviewercaption }
                            ]} />
          </ImageModal  >
        )}
      </ModalGateway>
</div>


    )
}