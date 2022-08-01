import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useNavigate} from 'react-router-dom'
import { Button, FormHelperText, MenuItem, Modal, Typography } from '@mui/material';
import "./SignIn.css"
import axios from 'axios';
require('dotenv').config()

const Aluna = {
    nome: String,
    email: String,
    telefone: Number,
    nascimento: String,
    senha: String,
    pacote: String
}


export default function SingIn() {

    const [aluna, setAluna] = React.useState<object>(Aluna)
    const [register, setRegister] = React.useState<object>({})
    const [helper, setHelper] = React.useState<boolean>(false)
    const [pacote, setPacote] = React.useState<string>("")
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        register.hasOwnProperty("true") ? navigate('/Login') : navigate('/Registrar')
    }
    
    const nomeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAluna(x => { return { ...x, nome: event.target.value } })
    }

    const emailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAluna(x => { return { ...x, email: event.target.value } })
    }

    const telefoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAluna(x => { return { ...x, telefone: event.target.value } })
    }

    const nascimentoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAluna(x => { return { ...x, nascimento: event.target.value } })
    }

    const senhaInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAluna(x => { return { ...x, senha: event.target.value } })
    }

    const handleChange = (event: SelectChangeEvent) => {
        event.stopPropagation()
        setPacote(event.target.value);
        setAluna(x => { return { ...x, pacote: event.target.value } })
    };

    const resgisterInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {
        event.preventDefault()
        event.stopPropagation()
        try {
            await axios.post(`${process.env.REACT_APP_LINK_HOST}alunas/registro`, aluna).then((res: { status: any; }) => console.log(res.status))
            setRegister({true: "Registrado com sucesso, você receberá um email para confirmar seu registro e efetuar o pagamento"})
        } catch (err: any) {
            console.log(err)
            // const errorChave = Object.keys(err.response.data.keyPattern)[0]
            // setRegister({false: `${errorChave} já existe, tente com um  ${errorChave} diferente.`})
        }

    }

    React.useEffect(() => {
        OnLoad()

    })

    function OnLoad() {
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
    }

    return (
        <Box className="conteudo__signin">

            <h2>Inscreva-se</h2>
            <form className='formulario_signin' onSubmit={resgisterInput}>
                <div className='lines signin_line1'>
                    <FormControl
                        onChange={nomeInput}
                        sx={{ m: 1, width: '100%' }}
                        variant="outlined"
                        required>
                        <p>Nome</p>
                        <OutlinedInput
                            id="outlined-adornment-nome"
                            type="text"
                        />

                    </FormControl>
                </div>
                <div className='lines signin_line2'>
                    <FormControl
                        onChange={emailInput}
                        sx={{ m: 1, width: '100%' }}
                        variant="outlined"
                        required>

                        <p>Email</p>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                        />

                    </FormControl>
                </div>
                <div className='lines signin_line3'>
                    <FormControl
                        onChange={telefoneInput}
                        sx={{ m: 1, width: '25ch' }}
                        variant="outlined"
                        required>
                        <p>Telefone</p>
                        <OutlinedInput
                            id="outlined-adornment-phone"
                            type="tel"
                        />

                    </FormControl>
                    <FormControl
                        onChange={nascimentoInput}
                        sx={{ m: 1, width: '25ch' }}
                        variant="outlined"
                        required>
                        <p>Data de Nascimento</p>
                        <OutlinedInput
                            id="outlined-adornment-nascimento"
                            aria-describedby="outlined-weight-helper-text"
                            type='text'
                            onFocus={() => setHelper(true)}
                        />
                        <FormHelperText id="outlined-adornment-nascimento">{helper ? 'dd/mm/aaaa' : ''}</FormHelperText>
                    </FormControl>

                </div>
                <div className="lines signin_line4">
                    <FormControl
                        onChange={senhaInput}
                        sx={{ m: 1, width: '25ch' }}
                        variant="outlined"
                        required>
                        <p>Senha</p>
                        <OutlinedInput

                            id="outlined-adornment-password"
                            type='password'

                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
                        <p>Repetir Senha</p>
                        <OutlinedInput

                            id="outlined-adornment-password2"
                            type='password'
                        />
                    </FormControl>
                </div>
                <div className='lines signin_line5'>
                    <FormControl
                        sx={{ m: 1, width: '100%' }}
                        variant="outlined"
                        required>
                        <p>Pacote</p>
                        <Select
                            id="demo-simple-select-helper"
                            value={pacote}
                            onChange={handleChange}
                        >
                            <MenuItem value="Vinyasa">Vinyasa - R$ 80</MenuItem>
                            <MenuItem value="HathaYoga">Hatha Yoga - R$ 60</MenuItem>
                            <MenuItem value="YogaLunar">Yoga Lunar - R$ 50</MenuItem>
                            <MenuItem value="HathaLunar">Hatha Yoga e Lunar - R$ 100</MenuItem>
                            <MenuItem value="HataVinyasa">Hatha Yoga e Vinyasa - R$ 120</MenuItem>
                            <MenuItem value="VinyasaLunar">Vinyasa e Lunar - R$ 110</MenuItem>
                            <MenuItem value="Todas">Hatha, Vinyasa e Lunar - R$ 150</MenuItem>
                            <MenuItem value="Personal">Personal - R$ 50</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button
                    sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                    onClick={handleOpen}
                    type="submit"
                    variant="contained"
                    size="medium">
                    Registrar
                </Button>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal'>
                    <Typography sx={{ mt: 2 }}>
                        {Object.values(register)}
                    </Typography>
                </Box>
            </Modal>
        </Box>
    )
}

function ObjectKeys(KeyPattern: any): any {
    throw new Error('Function not implemented.');
}
