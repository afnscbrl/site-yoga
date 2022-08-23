import * as React from 'react';
import axios from 'axios';
import { userContext } from '../../../context/isAuth'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, List, ListItem, OutlinedInput, Switch, TextField, Typography } from '@mui/material';
import './AlunaEdit.css'
import { useNavigate } from 'react-router-dom';

export default function AlunaEdit() {
    const { alunaId, setAlunaId } = React.useContext(userContext)
    const [aluna, setAluna] = React.useState<Object>()
    const [ativo, setAtivo] = React.useState<boolean>()
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate()
    let titulo: any
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`


    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_LINK_HOST}alunas/${alunaId}`)
            .then(res => setAluna(res.data))
            .catch(err => err)

    }, [])

    if (aluna) {
        titulo = Object.values(aluna)[1].split(" ", 1)
        if (!aluna.hasOwnProperty('ativo')) {
            setAtivo(false)
            setAluna(Object.assign({}, aluna, { ativo: ativo }))
        }
    }

    const cobrarInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {
        event.preventDefault()
        event.stopPropagation()
        const id = {id : alunaId}
        const txt = "Essa é uma mensagem automática do sistema para lembrar que está com a sua mensalidade nas aulas de yoga em atraso. Entre na área do aluno do site para realizar seu pagamento"
        aluna ? Object.entries(aluna)
        .filter(f => f[0] === 'telefone' )
        .map((e: Array<String>) => {
            const linkZap = `https://web.whatsapp.com/send?phone=55${e[1]}&text=${txt}.`
            window.open(linkZap, '_blank')
            
        }): null
        setOpen(false);
        try {
            await axios.post(`${process.env.REACT_APP_LINK_HOST}alunas/cobrar`, id)
        } catch (err) {
            console.log(err)
        }

    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        const campo = [[event.target.name, event.target.value]]
        const novoValor = Object.fromEntries(campo)
        const novaAluna = { ...aluna, ...novoValor }
        setAluna(novaAluna)
    }

    const alunaEditInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {

        event.preventDefault()
        event.stopPropagation()
        try {
            await axios.put(`${process.env.REACT_APP_LINK_HOST}alunas/${alunaId}`, aluna)
            navigate('/alunas')
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className="conteudo__alunaEdit">
            <h2>{`Aluna - ${titulo}`}</h2>
            <form onSubmit={alunaEditInput}>
                <List sx={{ width: '80vw' }}>
                    {
                        aluna ? Object.entries(aluna)
                            .filter(f => f[0] !== 'id' && f[0] !== 'senha')
                            .map((e: Array<String>, i: number) =>
                                <ListItem disablePadding key={i.toString()} sx={{
                                    width: 'auto',
                                    marginTop: 1,
                                    marginBottom: 1,
                                    backgroundColor: 'rgba(163, 59, 18, 0.7)',
                                    color: "white",
                                    borderRadius: '5px'
                                }}>
                                    <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
                                        {(e[0]).toUpperCase()}:
                                    </Typography>
                                    <FormControl fullWidth onChange={changeForm} sx={{ backgroundColor: '#e9dac9' }}>
                                        <OutlinedInput name={(e[0]).toString()} size='small' defaultValue={e[1]} />
                                    </FormControl>
                                </ListItem>
                            ) :
                            <ListItem >
                            </ListItem>
                    }
                </List>
                <div className='button__alunaEdit'>
                    <Button onClick={() => navigate('/alunas')}>Voltar</Button>
                    <Button onClick={handleClickOpen}>Cobrar</Button>
                    <Button type="submit">Alterar</Button>
                </div>
            </form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tem certeza que deseja enviar cobrança?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={cobrarInput} autoFocus>
                        Cobrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}