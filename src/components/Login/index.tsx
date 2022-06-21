
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';

import "./Login.css"

interface State {
    password: string;
    showPassword: boolean;
}


export default function Login() {
    let navigate = useNavigate()

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box className="conteudo__login">

            <h2>Login</h2>
            <div className='formulario'>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-login">Email</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-login"
                        type="text"
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
                        onChange={handleChange('password')}
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
            </div>
            <Button
                sx={{ m: 1 }}
                type="submit"
                variant="outlined"
                onClick={() => navigate('/Registrar')}
            >

                Se inscreva
            </Button>

        </Box>
    )
}