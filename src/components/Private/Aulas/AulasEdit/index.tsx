import { Box, Button, List, ListItem, ListItemButton, Modal } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../../context/isAuth';
import "./AulasEdit.css"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

{/* <iframe src="https://drive.google.com/file/d/1xgjCjJA_-pzFPsRAgcV5rau2b4JSHuBc/preview" width="640" height="480" allow="autoplay"></iframe> */ }
export function AulasEdit() {
    const [aulas, setAulas] = React.useState([])
    const { categoria, setCategoria } = React.useContext(userContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    //Settin all axios requests with Authorization header
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}aulas/${categoria}`)
            .then(res => setAulas(res.data))
    }, [])

    const clickAulas = (id: string) => {
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
                                onClick={() => clickAulas(Object.entries(e)[0][1])}>
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

            </List >
            <div className='button__alunaEdit'>
                <Button onClick={() => navigate('/aulasadm')}>Voltar</Button>
                <Button onClick={handleOpen}>Criar</Button>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="aulasEdit_modal"
            >
                <Box  sx={style}>
                <p>TEste</p>
                </Box>
            </Modal>

        </div >
    )
}