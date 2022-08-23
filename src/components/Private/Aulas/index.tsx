import { List, ListItem, ListItemButton } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

{/* <iframe src="https://drive.google.com/file/d/1xgjCjJA_-pzFPsRAgcV5rau2b4JSHuBc/preview" width="640" height="480" allow="autoplay"></iframe> */}
export function Aulas() {
    const [aulas, setAulas] = React.useState([])
    // const { aulaId, setAulaId } = React.useContext(userContext)
    const navigate = useNavigate()
    //Settin all axios requests with Authorization header
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}aulas`)
        .then(res => setAulas(res.data))
    }, [])
    
    const clickAula = (id: string) => {
        // setAulaId(id)
        navigate('/alunaedit')
    }

    return (

        <div className='conteudo__alunasList'>
            <h2>Aulas</h2>
            <List>
                {
                    aulas ? aulas.map((e: object, i: number) =>
                        <ListItem disablePadding key={i.toString()} sx={{ marginTop: 1, marginBottom: 1, backgroundColor: '#a33b12', opacity: '0.7' }}>
                            <ListItemButton sx={{ alignItems: 'center', color: 'white' }}
                                onClick={() => clickAula(Object.entries(e)[0][1])}>
                                <div className='listItemText'>
                                    <p ><b>Categoria:</b> {Object.entries(e)[1][1]}</p>
                                    <p ><b>Link:</b> {Object.entries(e)[2][1]}</p>
                                    <p ><b>Data:</b> {Object.entries(e)[3][1]}</p>
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