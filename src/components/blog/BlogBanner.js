import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  HomeBanner: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  HomeBannerContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function HomeBanner(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.HomeBanner} style={{ backgroundImage: 'url(https://i.ibb.co/vBzhDmZ/photo-1595354168684-5415135f7596-ixlib-rb-1-2.jpg)' }}>
      {<img style={{ display: 'none' }} src="https://i.ibb.co/vBzhDmZ/photo-1595354168684-5415135f7596-ixlib-rb-1-2.jpg" alt="friendship"/>}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.HomeBannerContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Unlikly Friends
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              We all feel lonely from time to time some more than others. Or we just need someone to talk to. Wat i learned from talking to a random stanger everytime I was out...
            </Typography>
            <Link variant="subtitle1" href="#">
              Continue Reading...
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}