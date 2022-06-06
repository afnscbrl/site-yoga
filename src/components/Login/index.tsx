
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

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
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}


export default function Login() {

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
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

                    <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-login"
                        type="text"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        }
                        label="Login"
                    />

                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">


                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                    variant="outlined">
                    Se inscreva
                </Button>

        </Box>
    )
}