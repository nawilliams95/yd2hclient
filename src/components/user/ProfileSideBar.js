import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  profileImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "50% !important",
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
}));



export default function Sidebar(props) {
  const classes = useStyles();
  const {user, social} = props;

  return (
    <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
            <img src={user.img} alt={user.username} className={classes.profileImage} />
        <Typography variant="h6" gutterBottom>
         {user.last_name}, {user.first_name}
        </Typography>
        
      </Paper>
        
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Username: {user.username}
        Email: {user.email}
      </Typography>
      
        
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        {user.member_since}
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href={network.url} key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  social: PropTypes.array
};