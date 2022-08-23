import * as React from 'react';
import axios from 'axios';
import { userContext } from '../../../context/isAuth'
import './Alunas.css';
import { List, ListItem, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
require('dotenv').config()

export default function Alunas() {

    const [alunas, setAlunas] = React.useState([])
    const { alunaId, setAlunaId } = React.useContext(userContext)
    const navigate = useNavigate()
    //Settin all axios requests with Authorization header
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}alunas`)
        .then(res => setAlunas(res.data))
        .catch(err => err)
    }, [])
    
    const clickAluna = (id: string) => {
        setAlunaId(id)
        navigate('/alunaedit')
    }

    return (

        <div className='conteudo__alunasList'>
            <h2>Alunas</h2>
            <List>
                {
                    alunas ? alunas.map((e: object, i: number) =>
                        <ListItem disablePadding key={i.toString()} sx={{ marginTop: 1, marginBottom: 1, backgroundColor: '#a33b12', opacity: '0.7' }}>
                            <ListItemButton sx={{ alignItems: 'center', color: 'white' }}
                                onClick={() => clickAluna(Object.entries(e)[0][1])}>
                                <div className='listItemText'>
                                    <p ><b>Nome:</b> {Object.entries(e)[1][1]}</p>
                                    <p ><b>Telefone:</b> {Object.entries(e)[2][1]}</p>
                                    <p ><b>Pacote:</b> {Object.entries(e)[3][1]}</p>
                                </div>
                            </ListItemButton>
                        </ListItem>
                    ) :
                        <ListItem >
                        </ListItem>
                }
            </List>


        </div>
    )
}