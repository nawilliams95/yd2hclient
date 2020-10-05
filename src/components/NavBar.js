import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";
import Header from "../core-components/Header";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "../core-components/Button";

import styles from "../jss/navbarsStyle";

const useStyles = makeStyles(styles);


export default function NavBar(props) {
    const classes = useStyles();
    let history = useHistory();

    let navBarItems = [
        <ListItem className={classes.listItem} key={1} >
            <Button
                href="/about"
                className={classes.navLink}
                color="transparent"
            >
                About
            </Button>
        </ListItem>,
        <ListItem className={classes.listItem} key={2}>
            <Button
                href="/blog"
                className={classes.navLink}
                color="transparent"
            >
                Blog
            </Button>
        </ListItem>,
        <ListItem className={classes.listItem} key={3}>
            <Button
                href="/feed"
                className={classes.navLink}
                color="transparent"
            >
                Community
            </Button>
        </ListItem>,
        <ListItem className={classes.listItem} key={4}>
            <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
            >
                Help
            </Button>
        </ListItem>
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    if (props.isLoggedIn) {
        let user = JSON.parse(localStorage.getItem('user'));

        const goToProfile = (event) => {
            history.push(`/${user.id}/user/profile`);
        }

        navBarItems.push(
            <ListItem className={classes.listItem} key={5} >
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.navLink} color="transparent">
                    <img
                        src={props.isLoggedIn ? user.img : `https://i.ibb.co/VJ8wxMW/avatar-1577909-1280.webp`}
                        className={classes.img}
                        alt="profile"
                    /> <h3>{user.first_name}</h3>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to={`/${user.id}/user/profile`}><MenuItem>Profile</MenuItem></Link>
                    <Link to='/newpost'><MenuItem>NewPost</MenuItem></Link>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={props.handleLogOut}>Logout</MenuItem>
                </Menu>
            </ListItem>
        );
    } else {
        navBarItems.push(
            <ListItem className={classes.listItem} key={6}>
                <Button
                    href="/signup"
                    // className={classes.navLink}
                    variant="outlined"
                    size="small"
                    color="primary"
                >
                    SignUp
                </Button>
            </ListItem>
        );
        navBarItems.push(
            <ListItem className={classes.listItem} key={7}>
                <Button
                    href="/login"
                    // className={classes.navLink}
                    variant="outlined"
                    size="small"
                    color="secondary"
                >
                    LogIn
                </Button>
            </ListItem>
        );
    }

    return (

        <Header
            color="dark"
            leftLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Button
                            href="/home"
                            className={classes.navLink}
                            color="transparent"
                        >
                            <img id="nav-logo" src="https://i.ibb.co/1m6rsT2/YDTSAH.png" alt="logo" />
                        </Button>
                    </ListItem>
                </List>
            }
            rightLinks={
                <List className={classes.list}>
                    {navBarItems}
                </List>
            }
        />
    )
};