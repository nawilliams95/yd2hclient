import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Footer from '../../core-components/Footer';
import ProfileBody from './ProfileBody';
import ProfileSideBar from './ProfileSideBar'

let endpoint = 'https://yd2h-api-gateway.herokuapp.com/'

const social = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/nawilliams95' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/ydtsah' },
    { name: 'Linkdin', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/nykarri-williams-9541071b5/' },
];

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
      toolbarTitle: {
        flex: 1,
    },
}));
export default function UserProfile(props) {
    const classes = useStyles();
    let user = JSON.parse(localStorage.getItem('user'));
    const [posts, setPosts] = useState([]);

    let history = useHistory();

    const getPostData = async () => {
        try {
            const response = await axios.get(`${endpoint}posts/by/${user.id}/`);
            const data = response.data;
            setPosts(data);
        } catch (e) {
            console.error(e);
        }

    }
    
    useEffect(async () => {
        getPostData();
    }, []);
    console.log(posts)
    return (
        <>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Your Corner
                    </Typography>
                </Toolbar >
                    <Divider className={classes.divider} />
                    <Button
                        type="submit"
                        className={classes.submit}
                        href='/newpost'
                        style={{marginTop: 20}}
                        variant="outlined" 
                        color="primary"
                    >
                        Create New Post
                    </Button>
                    <main>
                        <Grid container spacing={4} className={classes.mainGrid}>
                            <h3 style={{textAlign: "center", marginTop: 100}}>Your Posts:</h3>
                            <ProfileBody posts={posts} user={user} />
                            <ProfileSideBar user={user} social={social} />
                        </Grid>
                    </main>
            </Container>
                <Footer />
        </>
    )
}