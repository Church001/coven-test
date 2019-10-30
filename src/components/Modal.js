import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { clearAirport } from '../redux/actions/action';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: '60%',
    height: '50%',
    padding: theme.spacing(2, 4, 3),
  },
}));

const MyModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const { airport } = props.airport
  useEffect(() => {
    if(airport !== null){
      setOpen(true)
    }
  }, [props.airport])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{open ? airport.city: ""}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleClose()}
            >
                Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    airport: state.reducer
  }
}

export default connect(mapStateToProps, { clearAirport })(MyModal);