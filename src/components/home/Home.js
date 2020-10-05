import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import Footer from '../../core-components/Footer';
import HomeBanner from './HomeBanner';
import Sidebar from '../../core-components/SocialSidebar'


let endpoint = 'https://yd2h-api-gateway.herokuapp.com/'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root2: {
        maxWidth: 300,
    },
    divider: {
        backgroundColor: 'white',
        marginTop: 25,
    }
}));


export default function Home(props) {
    const classes = useStyles();
    const spacing = 3;
    const [featured, setFeatured] = useState([]);
    const [userFeatured, setUserFeatured] = useState([]);

    const getFeaturedData = async () => {
        try {
            const response = await axios.get(`${endpoint}admin/posts/random`);
            const data = response.data;
            setFeatured(data);
        } catch (e) {
            console.error(e);
        }

    }

    useEffect(async () => {
        getFeaturedData();
    }, []);

    const getUserFeaturedData = async () => {
        try {
            const response = await axios.get(`${endpoint}posts/random`);
            const data = response.data;
            setUserFeatured(data);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(async () => {
        getUserFeaturedData();
    }, []);


    // console.log(featured[1])
    // console.log(userFeatured)




    return (
        <>
            <HomeBanner />
            <div>
                <h2 id="homeHeaders">Featured </h2>

                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={9}>
                        <Grid container justify="center" spacing={spacing}>
                            {featured.map((post) => (
                                <Grid key={post.title} item>

                                    <Card className={classes.root2}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="post image"
                                                height="140"
                                                image={post.img}
                                                title="post image"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    some kind of post decription should ber put into this fiel. but for now i will jsut describe wht act...
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="secondary" href="/" >
                                                Continue reading...
                                                </Button>
                                        </CardActions>
                                    </Card>

                                </Grid>
                            ))}

                        </Grid>
                        <Divider className={classes.divider} />
                        <h4 id="homeHeaders">
                            From the community...
                        </h4>
                        <Grid container justify="center" spacing={spacing}>
                            {userFeatured.map((post) => (
                                <Grid key={post.title} item>

                                    <Card className={classes.root2}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="post image"
                                                height="140"
                                                image='https://picsum.photos/300/300'
                                                title="post image"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    some kind of post decription should ber put into this fiel. but for now i will jsut describe wht act...
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="secondary" href="/" >
                                                Continue reading...
                                                </Button>
                                        </CardActions>
                                    </Card>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>

    )
}