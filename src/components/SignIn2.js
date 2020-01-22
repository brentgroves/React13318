//https://hackernoon.com/react-form-validation-using-react-hooks-5859c32280ca
//https://hackernoon.com/react-form-validation-using-react-hooks-5859c32280ca
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
//const feathers = require('@feathersjs/feathers');
import { useForm } from 'react-hook-form'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
const SignIn = ({AuthenticateAsync,firstName,srv,updateFirstName,isAuthenticated,isAdmin}) => {

  const classes = useStyles();
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  function handleClickOpen() {
    //setSubmitionCompleted(false);
    //setOpen(true);
  }

  return (
    <section id="new-message">
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
  <LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
  Sign in
</Typography>
    <form className={classes.form} noValidate>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    inputRef={register({ required: true, maxlength: 20 })}
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
  />
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
  <Button
    type="button"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
//    onClick={() => alert('hello')}
  //  onClick={() => props.dispatch('hello')}
  onClick={(e) => {
    srv.authenticate({
    "strategy": "local",
    "email": "user4@buschegroup.com",
    "password": "JesusLives1!"
    }).then((res) => {
    updateFirstName(res.user.userName);
    isAdmin(res.user.isAdmin);
    isAuthenticated(true);

  }).catch(e => {
    // Show login page (potentially with `e.message`)
    console.error('Authentication error', e);
  });

}}>
    Sign In
  </Button>
  </form>
</div>
</Container>

      <input
        onKeyPress={(e) => {
          updateFirstName('user1')
      }}
      />
       <button
        onClick={(e) => {
          updateFirstName('user2')
      }}>
      test
      </button>
       <button
        onClick={(e) => {
          srv.service('Kep13318').create({
      text: "test",
    }).catch((e) => {
      // Show login page (potentially with `e.message`)
      updateFirstName('logged out')

      alert('Authentication error');
    });
      }}>
      Kep13318
      </button>
      <button
       onClick={(e) => {
         srv.logout();
         //alert(srv.logout);
     }}>
     logout
     </button>

      <button
       onClick={(e) => {
         srv.authenticate({
         "strategy": "local",
         "email": "user4@buschegroup.com",
         "password": "JesusLives1!"
         }).then((res) => {
         updateFirstName(res.user.userName);
       }).catch(e => {
         // Show login page (potentially with `e.message`)
         console.error('Authentication error', e);
       });

    }}>
    login
    </button>

      <h1>userName: {firstName}</h1>
    </section>
  )
}





//   await srv.authenticate().catch(error => console.log(error));
/*
const SignIn = (props) => {
  let input
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
  <LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
  Sign in
</Typography>
<form className={classes.form} noValidate>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
  />
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
//    onClick={() => alert('hello')}
    onClick={() => props.dispatch('hello')}
//    onClick={() => {
  //    props.dispatch('user1');

//    dispatch(addUserName(res.user.name))
      //alert('hello');
//      console.log(app);
*/
      /*
      app.authenticate({
      "strategy": "local",
      "email": "sgroves@buschegroup.com",
      "password": "JesusLives1!",
      "userName": "Steven",
      "isAdmin": false,
      "roles": [ "Quality" ]
      }).then((res) => {
        console.log(res);
      }).catch(e => {
        // Show login page (potentially with `e.message`)
        console.error('Authentication error', e);
      });
*/
//    }}

/*
  >
    Sign In
  </Button>
  </form>
</div>
</Container>
  )
}

*/


export default SignIn
