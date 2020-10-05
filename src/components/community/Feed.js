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
import Header from './Header';
import FeedBody from './FeedBody';
import TwitterFeed from './SideBar';

let endpoint = 'https://yd2h-api-gateway.herokuapp.com/'

const social = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/nawilliams95' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/ydtsah' },
    { name: 'Linkdin', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/nykarri-williams-9541071b5/' },
];
const sections = [
    { title: 'Rules', url: '#' },
    { title: 'Faith', url: '#' },
    { title: 'Growth', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Purpose', url: '#' },
    { title: 'Random', url: '#' }
];
const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
}));
export default function Feed(props) {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    let history = useHistory();

    const getPostData = async () => {
        try {
            const response = await axios.get(`${endpoint}posts/public`);
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
                <Header title="Community Feed" sections={sections} />
                    <Divider className={classes.divider} />
                    <Button
                        type="submit"
                        className={classes.submit}
                        href={ props.isLoggedin ? `/newpost` : `/login` }
                        style={{marginTop: 20}}
                        variant="outlined" 
                        color="primary"
                    >
                        Create New Post
                    </Button>
                    <main>
                        <Grid container spacing={4} className={classes.mainGrid}>
                            <FeedBody posts={posts} />
                            <Grid item xs={3}>
                            <TwitterFeed />
                            </Grid>
                        </Grid>
                    </main>
            </Container>
                <Footer />
        </>
    )
}