import React, { useState, useEffect } from 'react'
import { loginAction } from '../redux/actions/action';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
        backgroundColor: theme.palette.common.white,
        },
    },
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
        width: '100%', 
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const Login = (props) => {
    const customClass = useStyles();
    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    useEffect(() => {
        console.log(props)
    }, [])

    const submission = e => {
        e.preventDefault();
        let data ={}
        props.loginAction(data)
        console.log("SUBMITTED")
    } 

    const onChangeData = e => {
        console.log("ONCHANGE", e)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={customClass.paper}>
                <Avatar className={customClass.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h3">
                   Welcome
                </Typography>
                <div 
                    className={customClass.form}
                    >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="User"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        value={user}
                        onChange={onChangeData}
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={customClass.submit}
                        onClick={submission}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </Container>
    )
 }
 
 export default connect(null, { loginAction })(Login);