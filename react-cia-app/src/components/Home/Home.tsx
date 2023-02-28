import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Backdrop from @material-ui/core/Backdrop';
// import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';


interface Props{
    title: string;
}

const useStyles = makeStyles({
  background: {
    backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
    width: '100%',
    height: '90%',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
},
main_text: {
    textAlign: 'center',
    position: 'relative',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
},
button_text: {
    color: 'white',
    textDecoration: 'none',
},
});

export const Home = ( props:Props ) => {
  const classes = useStyles();
  return (
    <>
        {/* <Navbar /> */}
        <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <h1>{ props.title }</h1>
          <Button>
            <Link to='/carinventory' className={classes.button_text}>Take me to my Inventory</Link>
          </Button>
        </div>
        </div>
    </>
  )
}

/* <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop> */
