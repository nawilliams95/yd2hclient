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
export default function UserEdit(props) {
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

    const handleEdit = async event => {
        event.preventDefault();
        // validate();
        try {
            const response = await axios.put(`${endpoint}posts/${props.match.params.id}`, {
                post: {
                    title: post.title,
                    content: post.content,
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

    const getPostData = async () => {
        try {
            const response = await axios.get(`${endpoint}posts/${props.match.params.id}/edit`);
            const data = response.data;
            updatePost(data);
        } catch (e) {
            console.error(e);
        }

    }
    const deletePost = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}posts/${props.match.params.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await updatePost({});
            console.log(response + 'was done')
            history.push('/home');
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(async () => {
        getPostData();
    }, []);
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
                        Edit Your Post
                    </Typography>
                </Toolbar >
                <Divider className={classes.divider} />
                <div>
                <h3>
                    If you wish to <em><b>Edit</b></em>follow the instrustions below. I you want to keep your post the same.plese click <span style={{color: 'blue'}}><em>CANCEL</em></span>.
                </h3>
                <h5>
                    Instructiions:
                </h5>
                <ul>
                    <li>
                        To edit the <b><em>TITLE</em></b>of your post. make anny changes in the <b><em>title feild</em></b>.
                    </li>
                    <li>
                        To edit the <b><em>BODY</em></b> of your post. <em>copy and past</em> the text from the <b><em>"BODY TEXT"</em></b> field and into the <b><em>Editor</em></b>. Make your desired edits and hit submit. <span style={{color: 'blue'}}>(IMPORTANT: If you want your changes to be <em>saved </em>you <b>must</b> submit them in the Editer Field.) </span>
                    </li>
                </ul>
                </div>
                {Object.keys(post).length > 0 && <main>
                    <div>
                        <TextField
                            className={classes.title}

                            label="Title"
                            style={{ margin: 8, backgroundColor: 'beige'}}
                            name="title"
                            id="title"
                            defaultValue={post.title}
                            helperText="Edit post title"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleInput}
                        />
                        <TextField
                            className={classes.title}

                            label="Body Text"
                            style={{ margin: 8, backgroundColor:'lightslategrey'  }}
                            name="old-content"
                            id="old-content"
                            defaultValue={post.content}
                            helperText="To Edit please copy and past the body text into the editor below"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                          
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
                        onClick={handleEdit}
                        style={{marginTop: 20}}
                    >
                        Submit Changes
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        herf='/home'
                        style={{marginTop: 20}}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="default"
                        className={classes.submit}
                        onClick={deletePost}
                        style={{marginTop: 20}}
                    >
                        DELETE POST
                    </Button>

                </main>}
            </Container>
            <Footer />
        </>
    )
}