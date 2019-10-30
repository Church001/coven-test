import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { clickAirport } from '../redux/actions/action';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(6, 3, 2)
  },
  gridList: {
    width: '60%',
    height: '50%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const MyGrid = (props) => {
  const onClickAirport = data => {
    props.clickAirport(data)
  }
    
  const classes = useStyles();
  const { data } = props
  console.log(data)
  return (
    <div className={classes.root}>
      <GridList cellHeight={280} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <h1 >10 MAJOR CITIES</h1>
        </GridListTile>
        {data.map(city => (
          <GridListTile 
            onClick={() => onClickAirport(city)}
            key={city.icao}>
            <img src={city.img} alt={city.city} />
            <GridListTileBar
              title={city.city}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default connect(null, { clickAirport })(MyGrid);