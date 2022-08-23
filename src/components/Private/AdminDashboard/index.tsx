import * as React from 'react';
import {Box} from '@mui/material'
import CardsAdmin from './CardsAdmin'
import {asana, lotus, mandala, mudra, mudraLotus, ohm} from './Images/images'
import './AdminDashboard.css'

export function AdminDashboard() {

    const styleCard = {
        display: 'flex',
        width: '10vw', 
        height: '10vw',
        margin: '2vw',
        cursor: 'grab',
        borderRadius: '50%',
        backgroundSize: 'cover',
        boxShadow: '0 0 .3em #a33b12',
        '&:active': {
            boxShadow: '0 0 .1em #a33b12',
            transform: 'translateY(2px)'
        },
        '@media (max-width: 500px)': {
            width: '30vw',
            height: '30vw',
            
        }
        
    }

    window.scrollTo({ top: 0})

    return (
        <Box className='admin'>
            <h2>Dashboard</h2>
            <div className='conteudo__admin'>
                <CardsAdmin titulo={'Alunas'} eventClick={'/alunas'} sx={{...styleCard, backgroundImage: `url(${lotus})`}} />
                <CardsAdmin titulo={'Aulas'} eventClick={'/aulasadm'} sx={{...styleCard, backgroundImage: `url(${asana})`}} />
                <CardsAdmin titulo={'Teoria'} eventClick={'/'} sx={{...styleCard, backgroundImage: `url(${mandala})`}} />
                <CardsAdmin titulo={'Sequências'} eventClick={'/'} sx={{...styleCard, backgroundImage: `url(${mudra})`}} />
                <CardsAdmin titulo={'Textos'} eventClick={'/'} sx={{...styleCard, backgroundImage: `url(${mudraLotus})`}} />
                <CardsAdmin titulo={'Dicas'} eventClick={'/'} sx={{...styleCard, backgroundImage: `url(${ohm})`}} />
            </div>
        </Box>
    )
}