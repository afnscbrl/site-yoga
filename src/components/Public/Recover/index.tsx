import * as React from 'react';
import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Snackbar, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import axios from 'axios';
require('dotenv').config()

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Recover() {

    const [open, setOpen] = React.useState(false);
    const [alert, setAlert] = React.useState("")

    React.useEffect(() => {
        OnLoad()
    })

    function OnLoad() {
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
    }

    const [email, setEmail] = React.useState({
        email: ""
    })

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setEmail({ email: event.target.value })

    }

    const emailRecover = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()

        axios.post(`${process.env.REACT_APP_LINK_HOST}alunas/emailrecover`, email).then(() => {
            setAlert("Email enviado com sucesso!")
            setOpen(true)
        }).catch(() => {
            setAlert("Email não encontrado!")
            setOpen(true)
        })
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'auto',
            minHeight: '70vh',
            paddingTop: '20vh',
            marginTop: '10vh',
            marginLeft: '10vw',
            marginRight: '10vw',
            color: '#a33b12',
            backgroundColor: '#e9dac9'

        }}

        >
            <Typography
                sx={{ textAlign: 'center', marginBottom: '30px' }}
                variant='body1'>
                Digite seu email para enviarmos um link de recuperação.
            </Typography>
            <form onSubmit={emailRecover}>

                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-login">Email</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-login"
                        type="text"
                        onChange={handleChangeEmail}
                        startAdornment={
                            <InputAdornment position="start">
                                <ForwardToInboxIcon />
                            </InputAdornment>
                        }
                        label="Email"
                    />
                    <Button
                        sx={{ m: 1 }}
                        type="submit"
                        variant="contained"
                        size="small">
                        Enviar
                    </Button>
                </FormControl>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
        </Box>
    )
}