import { Box, FormControl, Button, OutlinedInput, Typography, TextareaAutosize, Paper } from '@mui/material';
import * as React from 'react';

export default function Email() {

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
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
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
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
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
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
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
                    <TextareaAutosize style={{
                        margin: 8,
                        width: '100%',
                        padding: 4,
                        borderRadius: 5,
                        backgroundColor: '#e9dac9',
                        borderColor: '#a33b12',
                    }}
                        minRows={6}
                        required />


                    <Button
                        sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                        type="submit"
                        variant="contained"
                        size="medium">
                        Enviar
                    </Button>
                </Box>
            </Box >

        </Box >
    )
}