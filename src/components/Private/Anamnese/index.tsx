import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, MenuItem } from '@mui/material';
import "./Anamnese.css"
import axios from 'axios';
require('dotenv').config()

const Anam = {
    eCivil: String,
    filhos: Number,
    profissao: String,
    rotina: String,
    yogi: Boolean,
    modalidade: String,
    sono: String,
    alimentacao: String,
    cuidado: String,
    medicacao: String,
    emergencia: String,
    objetivo: String,
}

export default function Anamnese() {

    const navigate = useNavigate()
    const [experiencia, setExperiencia] = React.useState<string>("")
    const [anam, setAnam] = React.useState<object>(Anam)
    const [filhos, setFilhos] = React.useState<string>('')
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`
    
    const handleChange = (event: SelectChangeEvent) => {
        setExperiencia(event.target.value);
        setAnam(e =>  { return { ...e, yogi: event.target.value}})
    };

    const eCivilInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, eCivil: event.target.value}})
    }

    const filhosInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, filhos: event.target.value}})
    }

    const profissaoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, profissao: event.target.value}})
    }

    const rotinaInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, rotina: event.target.value}})
    }


    const modalidadeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, modalidade: event.target.value}})
    }

    const sonoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, sono: event.target.value}})
    }

    const alimentacaoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, alimentacao: event.target.value}})
    }

    const cuidadoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, cuidado: event.target.value}})
    }

    const medicacaoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, medicacao: event.target.value}})
    }

    const emergenciaInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, emergencia: event.target.value}})
    }

    const objetivoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()
        setAnam(e =>  { return { ...e, objetivo: event.target.value}})
    }


    const anamInput = async (event: { preventDefault: () => void, stopPropagation: () => void; }) => {
        event.preventDefault()
        event.stopPropagation()
        const token = localStorage.getItem('Token')
        const dados = Object.assign({}, anam, {token: token})
        try {
            await axios.put(`${process.env.REACT_APP_LINK_HOST}alunas/anamnese` , dados)
            navigate('/dashboard') 
        } catch (err: any) {
            // ADICIONAR CARD DE ERROR
            console.log(err)
            // const errorChave = Object.keys(err.response.data.keyPattern)[0]
            // setRegister({false: `${errorChave} já existe, tente com um  ${errorChave} diferente.`})
        }

    }

    return (
        <Box className="conteudo__anam">
            <h2>Anamnese</h2>
            <p>Me conte mais sobre voce!</p>
            <form className='formulario_anam' onSubmit={anamInput}>
                <div className='anam_group'>

                    <div className='lines_anam'>
                        <FormControl 
                        
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={eCivilInput}
                            required>
                            <p>Estado civil:</p>
                            <OutlinedInput

                                type="text"
                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={filhosInput}
                            required>

                            <p>Quantidade de Filhos:</p>
                            <OutlinedInput
                                value={filhos}
                                onChange={e => parseInt(e.target.value) > 0? setFilhos(e.target.value) : setFilhos('0')}

                                type="number"

                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={profissaoInput}
                            required>
                            <p>Profissão:</p>
                            <OutlinedInput

                                type="text"
                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={rotinaInput}
                            required>
                            <p>Rotina de trabalho (quantas horas semanais, qual postura passa a maior parte do tempo -sentado ou em pé, etc):</p>
                            <OutlinedInput

                                type="text"
                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            // onChange={yogiInput}
                            required>
                            <p>Ja fez yoga antes?:</p>
                            <Select

                                value={experiencia}
                                onChange={handleChange}
                            >
                                <MenuItem value='sim'>Sim</MenuItem>
                                <MenuItem value='nao'>Não</MenuItem>
                            </Select>
                        </FormControl>
                        {experiencia === 'sim' ?
                            <FormControl
                                sx={{ m: 1, width: '100%' }} 
                                variant="outlined" 
                                onChange={modalidadeInput}
                                required>
                                <p>Qual Modalidade?:</p>
                                <OutlinedInput


                                    type='text'

                                />
                            </FormControl> : ''
                        }
                    </div>
                    <div className="lines_anam">
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={sonoInput}
                            required>
                            <p>Como é seu sono hoje?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                </div>
                <div className='anam_group'>

                    <div className="lines_anam">
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={alimentacaoInput}
                            required>
                            <p>Como é sua alimentação hoje?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={cuidadoInput}
                            required>
                            <p>Algum cuidado especial (dores, lesões, cirurgias)?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl 
                            sx={{ m: 1, width: '100%' }}
                             variant="outlined"
                             onChange={medicacaoInput}
                              required>
                            <p>Faz uso de algum medicamento?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined" 
                            onChange={emergenciaInput}
                            required>
                            <p>Em caso de emergência, entrar em contato com:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl 
                            sx={{ m: 1, width: '100%' }} 
                            variant="outlined"
                            onChange={objetivoInput} 
                            required>
                            <p>Qual seu objetivo? O que você espera da prática?:</p>
                            <OutlinedInput

                                type='text'
                                multiline={true}
                                rows={3}

                            />
                        </FormControl>
                    </div>
                </div>
            <Button
                sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                type="submit"
                variant="contained"
                size="medium">
                Enviar
            </Button>
            </form>
        </Box>
    )
}