import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHTMLParser from 'react-html-parser';

import Footer from '../../core-components/Footer';




let endpoint = 'https://yd2h-api-gateway.herokuapp.com/'

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
    title: {
        backroundColor: 'whitesmoke',
    },
    editor: {
        color: 'black'
    }
}));
export default function UserCreate(props) {
    const classes = useStyles();

    let user = JSON.parse(localStorage.getItem('user'));

    const [post, updatePost] = useState([]);

    let history = useHistory();

    const handleInput = event => {
        updatePost({ ...post, [event.target.name]: event.target.value });
    };
    const handleChange = (e, editor) => {
        console.log(editor.getData())
        const data = editor.getData();
        updatePost({ ...post, content: data });
        // console.log('something happened')
    }

    const handleNewPost = async event => {
        event.preventDefault();
        // validate();
        try {
            const response = await axios.post(`${endpoint}posts`, {
                post: {
                    title: post.title,
                    content: post.content,
                    tags: post.tags,
                    author: user.username,
                    user_id: user.id
                }
            });
            const data = response.data
            console.log(data)
            updatePost({ ...post, data })
            history.push(`${user.id}/user/profile`);
        } catch (err) {
            console.log(err);
        }
    };

    const goBack = event => {
        history.push(`${user.id}/user/profile`);
    }
    console.log(post)
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
                        Create Post
                    </Typography>
                </Toolbar >
                <Divider className={classes.divider} />
                <div>
                <h5>
                    Instructiions:
                </h5>
                <ul>
                    <li>
                        To edit the <b><em>TITLE</em></b>of your post. make anny changes in the <b><em>title feild</em></b>.
                    </li>
                    <li>
                        To ad Tags they <b><em>MUST</em></b> be seperated with a comma. 
                    </li>
                    <li>
                        To edit the <b><em>BODY</em></b> of your post.Make your desired edits in the <b><em>Editor</em></b> <span style={{color: 'blue'}}>(IMPORTANT: If you want your changes to be <em>saved </em>you <b>must</b> submit them in the Editer Field.) </span>
                    </li>
                </ul>
                </div>
                 <main>
                    <div>
                        <TextField
                            className={classes.title}

                            label="Title"
                            style={{ margin: 8, backgroundColor: 'beige'}}
                            name="title"
                            id="title"
                            defaultValue="your title"
                            helperText="enter post title"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleInput}
                        />
                        <TextField
                            className={classes.title}

                            label="Tags"
                            style={{ margin: 8, backgroundColor: 'beige'}}
                            name="tags"
                            id="tags"
                            defaultValue="your tags"
                            helperText="enter post tags. MUST seperte with comma!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleInput}
                        />
                        <h5>
                            EDITER
                        </h5>
                        <li>
                        <span style={{color: 'red'}}><em>Hint: the editor expands as you use it. (with each line)</em></span>
                        </li>
                        <CKEditor 
                            editor={ClassicEditor}
                            onChange={handleChange}
                            defaultValue={post.content}
                        />

                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleNewPost}
                        style={{marginTop: 20}}
                    >
                        Submit Post
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={goBack}
                        style={{marginTop: 20}}
                    >
                        Cancel
                    </Button>

                </main>
            </Container>
            <Footer />
        </>
    )
}