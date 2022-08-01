
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import axios from 'axios'
import { userContext } from '../../../context/isAuth';
import "./Login.css"
require('dotenv').config()

interface State {
    password: string;
    showPassword: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function Login() {

    let navigate = useNavigate()

    const [open, setOpen] = React.useState(false);

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const [login, setLogin] = React.useState<object>({
        email: '',
        senha: '',
    })

    const { auth, setAuth } = React.useContext(userContext)

    const handleChangeLogin =
        (event: React.ChangeEvent<HTMLInputElement>) => {
            event.stopPropagation()
            setLogin({ ...login, email: event.target.value })

        }

    const handleChangePassword =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            event.stopPropagation()
            setValues({ ...values, [prop]: event.target.value });
            setLogin({ ...login, senha: event.target.value })

        };

    const loginInput = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()
        axios.post(`${process.env.REACT_APP_LINK_HOST}alunas/login`, login).then(res => {
            if (res.status === 202) {
                // localStorage.setItem('User', Object.values(login)[0]) // pega o email e salva no navegador
                localStorage.setItem('Token', res.headers['authorization'])
                setAuth(res.headers['authorization'])
                if(res.headers.firstlogin) {
                    navigate('/anamnese')
                } else {
                    navigate('/dashboard') 
                }
            }
        }).catch(() => setOpen(true))
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    React.useEffect(() => {
        OnLoad()

    })


    function OnLoad() {
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
    }

    const recuperarSenha = () => {
        navigate('/RecuperarEmail')
    }

    return (
        <Box className="conteudo__login">

            <h2>Login</h2>
            <form className='formulario' onSubmit={loginInput}>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-login">Email</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-login"
                        type="text"
                        onChange={handleChangeLogin}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        }
                        label="Email"
                    />


                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">


                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <Button
                        sx={{ m: 1 }}
                        type="submit"
                        variant="contained"
                        size="small">

                        Login
                    </Button>
                </FormControl>
            </form>
            <Button
                onClick={() => { recuperarSenha() }}
                sx={{ m: 1, marginTop: 3 }}
                size="small">
                Esqueci minha senha
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Email ou senha inválidos!
                </Alert>
            </Snackbar>

        </Box>
    )
}