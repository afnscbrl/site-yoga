import { Box } from '@mui/material';
import CardDepo from './CardDepo'
import * as React from 'react';
import './Depo.css'

export default function Depo() {

    return (
        <Box className='conteudo__depos'>
            <h2 className='depos__h2'> Depoimentos </h2>
            <div className='cards_depo'>
                <CardDepo aluna='aluna1' previa='previa1' depoimento='depoimento1'/>
                <CardDepo aluna='aluna2' previa='previa2' depoimento='depoimento2'/>
                <CardDepo aluna='aluna1' previa='previa1' depoimento='depoimento1'/>
                <CardDepo aluna='aluna2' previa='previa2' depoimento='depoimento2'/>
                <CardDepo aluna='aluna1' previa='previa1' depoimento='depoimento1'/>
                <CardDepo aluna='aluna2' previa='previa2' depoimento='depoimento2'/>
            </div>
        </Box>
    )
}