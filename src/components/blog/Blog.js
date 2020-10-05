import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from './Header';
import Footer from '../../core-components/Footer';
import BlogBanner from './BlogBanner';
import BlogBody from './BlogBody';
import Sidebar from './Sidebar';

let endpoint = 'https://yd2h-api-gateway.herokuapp.com/'

const sections = [
    { title: 'Rules', url: '#' },
    { title: 'Faith', url: '#' },
    { title: 'Growth', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Purpose', url: '#' },
    { title: 'Random', url: '#' }
];
const archives = [
    { title: 'October 2020', url: '#' },
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' }
];
const social = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/nawilliams95' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/ydtsah' },
    { name: 'Linkdin', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/nykarri-williams-9541071b5/' },
];

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    }
}));
export default function Home(props) {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        try {
            const response = await axios.get(`${endpoint}admin/posts/`);
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
                <Header title="Blog" sections={sections} />
                <Divider className={classes.divider} />
                <main>
                    <BlogBanner />
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogBody posts={posts} />
                        <Sidebar archives={archives} social={social} />
                    </Grid>
                </main>
            </Container>
            <Footer />
        </>
    )
}
