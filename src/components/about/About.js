import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Footer from '../../core-components/Footer';



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
    content: {
        textAlign: 'center',
        fontSize: 25
    }

}));

export default function About(props) {
    const classes = useStyles();

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
                        About
                    </Typography>
                </Toolbar >
                <Divider className={classes.divider} />
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Grid item xs={12} className={classes.content}>
                            <section>
                                <div class="level">
                                    <div class="level-item has-text-centered"><a href="#"><figure class="image is-128x128 is-rounded"><img src="https://i.ibb.co/ygFHGWM/YDTSAH.png" alt="" class="" /></figure></a></div>
                                </div>
                                <h2 class="title">Learn more about YD2H</h2>
                                <h4>-----Our mission is not to just free your mind but to break chains---</h4>
                            </section>
                            <section class="section"><div class="container has-text-centered">
                                <div class="block"><img src="https://i.ibb.co/yPcFL81/ws-Be-the-Change-852x480.jpg" alt="" /></div>
                                <p>Ahhh our 20s---when we were teenagers all we ever wanted to do was get there and be free. We imagined that being in our 20s was this grand magical thing, and we wouldn’t be told what to do anymore. Our 20s signified that we would be adults who would finally be taken seriously. We would be able to do whatever we want whenever we want. We would imagine moving out of mom and dads place, getting that dream job, that kick*** pad and spending the evenings hanging out with your friends and going on adventures (or at least I did). Instead, it feels like the punch line to a cruel joke.

                         </p>
                                <iframe src="https://giphy.com/embed/1oDWKghJp3M9yIOkEg" width="480" height="360" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe><p><a href="https://giphy.com/gifs/mrw-track-theory-1oDWKghJp3M9yIOkEg">via GIPHY</a></p>
                                <p class="block">Being in your 20s can suck---No, I'm sorry not suck, I mean it can be utterly unbearable at times or feel like your running up a never-ending hill and the hill is winning. </p>
                                <iframe src="https://giphy.com/embed/CJxXHfRAYvtqU" width="480" height="343" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe><p><a href="https://giphy.com/gifs/angry-frustrated-homer-simpson-CJxXHfRAYvtqU">via GIPHY</a></p>
                                <p class="subtitle">It's not supposed to be though, or, so I've been told.  Apparently, somewhere between finding yourself, life purpose, living it up while you have the youth/freedom to do so, following our dreams and taking that last tequila shot.  We are also supposed to find that perfect career, actually, go to work, get that hot new pad, have money to pay rent and go to Coachella, know things like what APR is and how it works and well...be an <em>Adult</em>.</p>
                                <iframe src="https://giphy.com/embed/1O1bHi1zWHVU3kB0Se" width="328" height="480" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe><p><a href="https://giphy.com/gifs/spacechickensinspace-space-chickens-spacechickens-chicken-1O1bHi1zWHVU3kB0Se">via GIPHY</a></p>
                                <p class="subtitle">I don't know about you but for me, it hasn't been smooth sailing since hitting the big 2-0. Don't get me wrong there have been some victories---good times but there have definitely been some not so good times and some straights up "what-tha-Frankinweenie" moments too. Personally, I'd like to find the A-Hole who neglected to tell us that this is what's in store and give em' a piece of my mind. Instead, I've decided to create Young, Dumb, 20Sumthin' and Hopeful.com </p>
                                <p class="subtitle">For now, YDTSAH is a blog---an outlet---an album of growth---a challenge---no, a <em>Declaration</em>.  As one of my favorite people of all time put it... </p>
                                <blockquote class="wp-block-quote has-text-align-center is-style-large"><p><em><strong>My recipe for life is not being afraid of myself, afraid of what I think or of my opinions.</strong></em></p><cite><strong><em>---Eartha Kitt</em></strong></cite></blockquote>
                                <p class="has-text-align-center">YDTSAH is where I take my stand, start the journey, pick up my pen and being writing my story the way I see fit. I have challenged myself for one year (365 days) to just go for it, do the things I most want, change the things I don't, find that balance, become the best me I can be and not apologize for any of it. I document all that here, where I promise to always be honest no matter how hard that is, share all the lessons I learn along the way and leave nothing out.  </p>
                                <iframe src="https://giphy.com/embed/3o6nV2YLi6bTyVs2lO" width="480" height="360" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe><p><a href="https://giphy.com/gifs/heyarnold-nickelodeon-hey-arnold-3o6nV2YLi6bTyVs2lO">via GIPHY</a></p>
                                <p class="has-text-align-center">But its not just about me, eventually I want YDTSAH to be more than just another blog full of DIY's, how to's, and pretty pictures. YDTSAH is to become a community. A community that no matter where you are in your journey you know you aren't alone and have others there for support. Where we can all share advice tip tricks, or at the very least a place to share your story too. So whether you feel like you've got it all figured out, have no idea what you're doing, male, female, alien, white, black, green or a self-proclaimed <em>Millennial Defective</em> in search of more, like me----YDTSAH is for YOU. </p>
                                <iframe src="https://giphy.com/embed/26FPprQc9vjdsqbdu" width="480" height="270" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe><p><a href="https://giphy.com/gifs/friends-nick-at-nite-26FPprQc9vjdsqbdu">via GIPHY</a></p>
                                <p class="has-text-align-center">So expect plenty of GIf's, quotes, sarcasm, my weird sense of humor, and your mind to be occasionally <em>(if ever)</em> blown. You know, I used to always sign the end of every <del>diary entry&nbsp;</del> I mean, journal entry with <em>"Unwritten" (I&nbsp;really&nbsp;loved&nbsp;that&nbsp;Natasha&nbsp;Benningfield&nbsp;song).&nbsp;Perhaps</em> all that time I was too busy embracing the idea that my life was undefined whilst unknowingly&nbsp;reminding&nbsp;myself that&nbsp;I&nbsp;haven't&nbsp;yet&nbsp;picked&nbsp;up&nbsp;the&nbsp;pen&nbsp;to&nbsp;start defining it. They say the life/reality/dream&nbsp;we want already exist we just have to reach out and grab it...I'm reaching how about you? </p>

                            </div>
                            </section>
                        </Grid>

                    </Grid>
                </main>
            </Container >
            <Footer />
        </>
    )
}