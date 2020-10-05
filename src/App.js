import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//FILES
import SplashPage from "./components/SlashPage";
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import ShowBlog from './components/blog/BlogShow';
import Login from './components/auth/LogIn';
import Signup from './components/auth/SignUp';
import UserProfile from './components/user/UserProfile';
import UserEdit from './components/user/Edit';
import UserShow from './components/user/UserShow';
import UserCreate from './components/user/Create';
import Feed from './components/community/Feed';
import PublicShow from './components/community/PublicShow';
import About from './components/about/About';
import AdminLogin from './components/admin/Login';

let endpoint = 'https://user-account-service-yd2h.herokuapp.com/'

export default function App(props) {
  let history = useHistory();

  const [state, setState] = useState({
    username: '',
    password: '',
    isLogginIn: false
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogOut = () => {
    setState({
      username: '',
      password: '',
      isLoggedIn: false
    });
    history.push('/home');
    localStorage.clear();
  };
  const handleInput = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleLogIn = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(`${endpoint}users/login`, {
        user: {
          username: state.username,
          password: state.password
        }
      });
      console.log(response.data)
      localStorage.token = response.data.token;
      response.data.idcard = localStorage.setItem('user', JSON.stringify(response.data.idcard));
      setIsLoggedIn(true);
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async event => {
    event.preventDefault();
    // validate();
    try {
      const response = await axios.post(`${endpoint}users/signup`, {
        user: {
          email: state.email,
          username: state.username,
          password: state.password,
          first_name: state.first_name,
          last_name: state.last_name,
          avatar_img: state.avatar_img,
        }

      });
      console.log(response.data)
      localStorage.token = response.data.token;
      response.data.idcard = localStorage.setItem('user', JSON.stringify(response.data.idcard));
      setIsLoggedIn("true");
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />

      <div className="body">
        <Switch>
          <Route
            exact path="/"
            render={(props) => {
              return <SplashPage />;
            }}
          />
          <Route
            exact path="/signup"
            render={(props) => {
              return <Signup
                isLoggedIn={isLoggedIn}
                handleInput={handleInput}
                handleSignUp={handleSignUp}
              />;
            }}
          />
          <Route
            exact path="/login"
            render={(props) => {
              return <Login
                isLoggedIn={isLoggedIn}
                handleInput={handleInput}
                handleLogIn={handleLogIn}
              />;
            }}
          />
          <Route
            path="/home"
            render={(props) => {
              return <Home />;
            }}
          />
          <Route
            path="/admin"
            render={(props) => {
              return <AdminLogin />;
            }}
          />
          <Route
            path="/blog"
            render={(props) => {
              return <Blog />;
            }}
          />
          <Route
            path="/about"
            render={(props) => {
              return <About />;
            }}
          />
          <Route
            path="/newpost"
            render={(props) => {
              return <UserCreate />;
            }}
          />
          
          <Route
            path="/feed"
            render={(props) => {
              return <Feed
                isLoggedIn={isLoggedIn}
              />;
            }}
          />
          <Route
            path="/:id/user/profile"
            render={(props) => {
              return <UserProfile />;
            }}
          />
          <Route
            path="/post/:id"
            render={(props) => {
              return <UserShow {...props} />;
            }}
          />
          <Route
            path="/:id/blog"
            render={(props) => {
              return <ShowBlog {...props} />;
            }}
          />
          <Route
            path="/show/:id"
            render={(props) => {
              return <PublicShow {...props}/>;
            }}
          />
          <Route
            exact path="/:id/edit"
            render={(props) => {
              return <UserEdit {...props}
              />;
            }}
          />

        </Switch>

      </div>

    </>
  );
}

