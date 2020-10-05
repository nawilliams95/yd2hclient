import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Footer from '../../core-components/Footer';
import ProfileSideBar from './ProfileSideBar'
import ShareButtons from '../../core-components/ShareButtons';

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
    tags: {
        marginTop: 40,
    }
}));

export default function UserShow(props) {
    let user = JSON.parse(localStorage.getItem('user'));
    const classes = useStyles();
    const [onePost, setPost] = useState([]);

    const getPostData = async () => {
        try {
            const response = await axios.get(`${endpoint}posts/${props.match.params.id}`);
            const data = response.data;
            setPost(data);
        } catch (e) {
            console.error(e);
        }

    }

    useEffect(async () => {
        getPostData();
    }, []);
    console.log(onePost.post)

    return (
        <>
            {Object.keys(onePost).length > 0 && <Container maxWidth="lg">
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
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Grid item xs={12} md={8}>

                            <img src="https://picsum.photos/550/300
                                " alt={onePost.post.title} style={{ marginTop: '40px' }} />
                            <h1>{onePost.post.title} </h1>
                            <h5> {onePost.post.author}</h5>
                            <h6> {onePost.fixed_date.created}</h6>
                            <p>
                                {onePost.post.content} Vivamus et enim sodales, euismod felis at, tempor ligula. Fusce a libero massa.
                       </p>
                            <p>
                                Morbi ac vehicula tellus. In sagittis consectetur vehicula. Nam hendrerit blandit elit, vel euismod nisi pellentesque eu. Curabitur vestibulum metus nec urna fringilla, sit amet iaculis nunc scelerisque.
                       </p>
                            <p>
                                Morbi ac vehicula tellus. In sagittis consectetur vehicula. Nam hendrerit blandit elit, vel euismod nisi pellentesque eu. Curabitur vestibulum metus nec urna fringilla, sit amet iaculis nunc scelerisque.
                       </p>

                            <ShareButtons post={onePost} />
                            {onePost.post.tags.map(tag => {
                                return (
                                    <Button variant="outlined" color="primary" className={classes.tags}>
                                        {tag}
                                    </Button>
                                )
                            })}
                            <Button size="small" color="transparent" href={`${onePost.post.id}/post/edit`} >
                                <EditIcon size="small" />
                            </Button>
                        </Grid>
                        <ProfileSideBar user={user} social={social} />
                    </Grid>
                </main>
            </Container>}
            <Footer />
        </>
    )
}