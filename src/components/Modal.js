import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { clearAirport } from '../redux/actions/action';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    maxWidth: 345,
    height:"50%"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: '60%',
    maxHeight: '50%',
    padding: theme.spacing(2, 1, 3),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height:"600"
  },
  gridList: {
    width: '50%',
    height: '100%',
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
    width: '250'
  },
  button: {
    float: 'right'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 250,
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
          <Grid className={classes.paper}>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleClose()}
              className={classes.button}
              >
              Close
            </Button>
            <h2 id="transition-modal-title">{open ? airport.city: ""}</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <div className={classes.root}>
             <div>
               
              <div>
                <TextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="filled"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    size='small'
                    // onClick={submission}
                >
                    Fetch
                </Button>
              </div>
              <div>
                <TextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="filled"
                />
                 <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={submission}
                >
                    Fetch
                </Button>
              </div>             
             </div>
              <GridList cellHeight={160} className={classes.gridList} cols={1}>
                  <GridListTile >
                    <h1>HEAD</h1>
                  </GridListTile>
              </GridList>
            </div>
          </Grid>
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