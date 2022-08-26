import { Box, Button, FormControl, List, ListItem, ListItemButton, Modal, OutlinedInput, Typography } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../../context/isAuth';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import "./AulasEdit.css"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: '#e9dac9',
    border: '2px solid #a33b12',
    boxShadow: 24,
    p: 4,
};

{/* <iframe src="https://drive.google.com/file/d/1xgjCjJA_-pzFPsRAgcV5rau2b4JSHuBc/preview" width="640" height="480" allow="autoplay"></iframe> */ }
export function AulasEdit() {
    const [aulas, setAulas] = React.useState([])
    const [aula, setAula] = React.useState({})
    const [aulaId, setAulaId ] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { categoria, setCategoria } = React.useContext(userContext)
    const navigate = useNavigate()

    //Settin all axios requests with Authorization header
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

    React.useEffect(() => {
        listaAulas()
        
    }, [])

    const listaAulas = () => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}aulas/${categoria}`)
        .then(res => setAulas(res.data))
        //editar catch com mesagem de erro e redirecionamento
    }

    const clickAula = (a: object) => {
        setAulaId(Object.values(a)[0])
        setAula(a)
        handleOpen()
    }

    const deleteAula = (id: string) => {
        try {
            axios.delete(`${process.env.REACT_APP_LINK_HOST}aulas/${id}`)
            listaAulas()
        } catch (err) {
            console.log(err)
            //tratar erro com mesagem.
        }
    }

    const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        const campo = [[event.target.name, event.target.value]]
        const novoValor = Object.fromEntries(campo)
        const novaAula = { ...aula, ...novoValor }
        setAula(novaAula)
    }

    const aulaEditarInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {

        event.preventDefault()
        event.stopPropagation()
        try {
            await axios.put(`${process.env.REACT_APP_LINK_HOST}aulas/${aulaId}`, aula)

        } catch (err) {
            console.log(err)
            //Tratar err
        }
        listaAulas()
        handleClose()
    }
    
    return (

        <div className='conteudo__aulasEditList'>
            <h2>Aulas de {categoria}</h2>
            <List>
                {
                    aulas ? aulas.map((e: object, i: number) =>
                        <ListItem disablePadding key={i.toString()} sx={{ marginTop: 1, marginBottom: 1, backgroundColor: '#a33b12', opacity: '0.7' }}>
                            <div className='listItemText_aulasEdit'>
                                <p ><b>Data:</b> {Object.entries(e)[4][1]}</p>
                                {/* editar o href para iframe */}
                                <p ><b>Link:</b> <a href={Object.entries(e)[3][1]}>{Object.entries(e)[2][1]}</a></p>
                                <div className='listButtons_aulasEdit'>
                                    <ListItemButton
                                        onClick={() => clickAula(e)}
                                        sx={{ justifyContent: 'flex-end' }}>
                                        <EditIcon />
                                    </ListItemButton>
                                    <ListItemButton
                                        onClick={() => deleteAula(Object.entries(e)[0][1])}
                                        sx={{ justifyContent: 'flex-end' }}>
                                        <DeleteForeverIcon />
                                    </ListItemButton>
                                </div>
                            </div>
                        </ListItem>
                    ) :
                        <ListItem >
                        </ListItem>
                }

            </List >
            <div className='button__alunaEdit'>
                <Button onClick={() => navigate('/aulasadm')}>Voltar</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="aulasEdit_modal"
            >
                <Box sx={style}>
                    <form onSubmit={aulaEditarInput}>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Categoria:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="categoria" size='small'  value={categoria}/>
                        </FormControl>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Descricao:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="descricao" size='small' defaultValue={Object.values(aula)[2]} />
                        </FormControl>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Link:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="link" size='small'  defaultValue={Object.values(aula)[3]}/>
                        </FormControl>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Data:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="data" size='small' defaultValue={Object.values(aula)[4]}/>
                        </FormControl>
                        <Button onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            Editar
                        </Button>
                    </form>
                </Box>
            </Modal>

        </div >
    )
}