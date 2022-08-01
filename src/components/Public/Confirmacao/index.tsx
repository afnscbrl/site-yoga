import { Box } from '@mui/material';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
require('dotenv').config()

export default function Confirmacao() {


    const navigate = useNavigate()
    const url = new URL(window.location.href);
    const token = url.toString().split('/').pop()
    const confirmado = { "emailVerified": true }

    const [regressivo, setRegressivo] = React.useState<number>(10)
    const [status, setStatus] = React.useState<React.ReactElement<HTMLParagraphElement>>()


    const statusOk: React.ReactElement<HTMLParagraphElement> = <p>
        Email confirmado com sucesso, a pagina será redirecionada em: </p>

    const statusErro: React.ReactElement<HTMLParagraphElement> = <p>
        Token expirado, por favor contacte a Raquel para solucionar o problema. <br />A página será redirecionada em: </p>


    if (!status) {
        axios.put(`${process.env.REACT_APP_LINK_HOST}alunas/confirmacao/` + token, confirmado)
            .then(() => setStatus(statusOk)).catch(() => setStatus(statusErro))
    }

    function countDown() {
        if (regressivo === 0) {
            navigate('/login')
        } else {
            setTimeout(() => setRegressivo(regressivo - 1), 1000)
        }
    }
    React.useEffect(() => {
        countDown()
    }, [regressivo])

    return (
        <Box
            sx={{
                position: 'fixed',
                left: '25vw',
                top: '40vh',
                width: '50vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                backgroundColor: '#e9dac9',
                padding: '15px',
                textAlign: "center",
                borderRadius: '5px',
            }}>
            {status}
            {regressivo} segundos.
        </Box >
    )
}