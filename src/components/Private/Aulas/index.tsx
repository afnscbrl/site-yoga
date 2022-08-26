import { Box, Button, FormControl, List, ListItem, ListItemButton, Modal, OutlinedInput, Typography } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/isAuth';
import "./Aulas.css"

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

export function Aulas() {
    let cats: Array<string> = []
    const [aulas, setAulas] = React.useState([])
    const [aula, setAula] = React.useState([])
    const { categoria, setCategoria } = React.useContext(userContext)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Settin all axios requests with Authorization header
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}aulas`)
            .then(res => {
                setAulas(res.data)
            })
    }, [categoria])

    const clickCat = (nome: string) => {
        setCategoria(nome.toUpperCase())
        navigate('/aulasedit')
    }

    const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        const campo = [[event.target.name, event.target.value]]
        const novoValor = Object.fromEntries(campo)
        const novaAula = { ...aula, ...novoValor }
        setAula(novaAula)
    }

    const aulaCriarInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {

        event.preventDefault()
        event.stopPropagation()
        try {
            await axios.post(`${process.env.REACT_APP_LINK_HOST}aulas`, aula)

        } catch (err) {
            console.log(err)
            //Tratar err
        }
        clickCat(Object.values(aula)[0])
    }

    if (aulas) {
        aulas.map((e: string) => {
            if (!cats.includes(Object.values<string>(e)[1])) {
                cats.push(Object.values<string>(e)[1])
            }
        })
    }


    return (

        <div className='conteudo__aulasList'>
            <h2>Aulas</h2>
            <h5>ESCOLHA A CATEGORIA</h5>
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
            <div className='button__aulasCriar'>
                <Button onClick={handleOpen}>Criar</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="aulasEdit_modal"
            >
                <Box sx={style}>
                    <form onSubmit={aulaCriarInput}>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Categoria:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="categoria" size='small' />
                        </FormControl>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Descricao:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="descricao" size='small' />
                        </FormControl>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Link:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="link" size='small' />
                        </FormControl>
                        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            Data:
                        </Typography>
                        <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                            <OutlinedInput name="data" size='small' />
                        </FormControl>
                        <Button onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            Criar
                        </Button>
                    </form>
                </Box>
            </Modal>


        </div >
    )
}