import { Box, FormControl, Button, OutlinedInput, Typography, TextareaAutosize, Paper } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
require('dotenv').config()

const Contato = {
    nome: String,
    email: String,
    telefone: Number,
    comentario: String
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Email() {

    const [contato, setContato] = React.useState<object>(Contato)
    const [open, setOpen] = React.useState<boolean>(false)

    const contentCss = {
        width: '40%',
        marginTop: '30px',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '5px',
        '@media(max-width: 800px)': {
            width: '80%'
        }
    }

    const typographyCss = {
        textAlign: 'left',
        paddingLeft: '10px',
        marginTop: '10px',
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setContato(e => {return {...e, nome: event.target.value}})
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setContato(e => {return {...e, email: event.target.value}})
    }

    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setContato(e => {return {...e, telefone: event.target.value}})
    }

    const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setContato(e => {return {...e, comentario: event.target.value}})
    }

    const commentInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {
        event.preventDefault()
        // event.stopPropagation()
        try {
            await axios.post(`${process.env.REACT_APP_LINK_HOST}contato`, contato)
            setOpen(true)
        } catch (err: any) {
            throw new Error(err)
        }
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setContato({})
      };

      React.useEffect(() => {
        OnLoad()

    })

    function OnLoad() {
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                textAlign: 'center',
                alignContent: 'flex-start',
                width: '100vw',
                minHeight: '90vh',
                marginTop: '10px',
            }} >
            <form onSubmit={commentInput}>

                <Typography
                    sx={{
                        width: "100vw",
                        height: '10vh',
                        marginBottom: '5vh',
                        fontFamily: 'Julius Sans One',
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        letterSpacing: '10px'
                    }}
                    variant='h2'> CONTATO</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        width: '100%',
                        textAlign: 'left',
                        justifyContent: 'center',

                    }}>
                    <Paper
                        sx={{
                            ...contentCss,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'rgba(163, 59, 18, 0.3)'
                        }}
                        elevation={3}
                    >
                        <Typography
                            sx={{
                                height: 'auto',
                                textAlign: 'center',
                                width: '80%',
                                justifySelf: 'center',
                                marginLeft: '10%'

                            }}
                            variant='body1'>
                            <b>
                            </b>
                            Leciono minhas aulas em Guajiru, uma vila ao lado da praia de Flecheiras, na cidade de Trairi, litoral Oeste do Ceará à 120 quilometros de Fortaleza. <br /><br />
                            Email: raquelaraujo03@gmail.com<br /><br />
                            Telefone: (85) 999126476<br />
                        </Typography>
                    </Paper>
                    <Box
                        sx={contentCss}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}
                            variant='body1'>
                            Entrar em contato:
                        </Typography>
                        <Typography
                            sx={
                                typographyCss
                            }
                            variant='body1'>
                            Nome:
                        </Typography>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" onChange={handleName} required>
                            <OutlinedInput

                                id="outlined-adornment-nome"
                                type="text"
                            />
                        </FormControl>
                        <Typography
                            sx={
                                typographyCss
                            }
                            variant='body1'>
                            Email:
                        </Typography>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" onChange={handleEmail} required>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                type="email"
                            />

                        </FormControl>
                        <Typography
                            sx={
                                typographyCss
                            }
                            variant='body1'>
                            Telefone:
                        </Typography>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" onChange={handlePhone} required>
                            <OutlinedInput
                                id="outlined-adornment-phone"
                                type="tel"
                            />

                        </FormControl>
                        <Typography
                            sx={
                                typographyCss
                            }
                            variant='body1'>
                            Dúvida, comentários ou sugestões:
                        </Typography>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" onChange={handleComment} required>

                            <TextareaAutosize style={{
                                width: '100%',
                                padding: 16,
                                borderRadius: 5,
                                backgroundColor: '#e9dac9',
                                borderColor: '#a33b12',
                                fontSize: '1.2em'
                            }}
                                minRows={6}
                                maxRows={6}
                                required />
                        </FormControl>


                        <Button
                            sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                            type="submit"
                            variant="contained"
                            size="medium">
                            Enviar
                        </Button>
                    </Box>
                </Box >
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Email enviado!
                </Alert>
            </Snackbar>

        </Box >
    )
}