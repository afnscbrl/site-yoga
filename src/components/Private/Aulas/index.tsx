import { List, ListItem, ListItemButton } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/isAuth';

export function Aulas() {
    let cats: Array<string> = []
    const [aulas, setAulas] = React.useState([])
    const {categoria, setCategoria} = React.useContext(userContext)
    const navigate = useNavigate()
    //Settin all axios requests with Authorization header
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}aulas`)
            .then(res => setAulas(res.data))
    }, [])

    const clickCat = (nome: string) => {
        setCategoria(nome)
        navigate('/aulasedit')

    }

    if (aulas) {
        aulas.map(e => {
                if (!cats.includes(Object.values<string>(e)[1])) {
                    cats.push(Object.values<string>(e)[1])
                }
            })
    }


    return (

        <div className='conteudo__alunasList'>
            <h2>Aulas</h2>
            <List>
                {
                    cats ? cats.map((e: string, i: number) =>

                        <ListItem disablePadding key={i.toString()} sx={{ marginTop: 1, marginBottom: 1, backgroundColor: '#a33b12', opacity: '0.7' }}>
                            <ListItemButton sx={{ alignItems: 'center', color: 'white' }}
                                onClick={() => clickCat(e)}>
                                <div className='listItemText'>
                                    <p >{e}</p>
                                </div>
                            </ListItemButton>
                        </ListItem>
                    ) :
                        <ListItem >
                        </ListItem>
                }
            </List >


        </div >
    )
}