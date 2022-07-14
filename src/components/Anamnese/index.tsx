import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, MenuItem } from '@mui/material';
import "./Anamnese.css"




export default function SingIn() {

    const [experiencia, setExperiencia] = React.useState<string>("")
    const [filhos, setFilhos] = React.useState<string>('')

    const handleChange = (event: SelectChangeEvent) => {
        setExperiencia(event.target.value);
    };

    return (
        <Box className="conteudo__anam">

            <h2>Anamnese</h2>
            <p>Me conte mais sobre voce!</p>
            <div className='formulario_anam'>
                <div className='anam_group'>

                    <div className='lines_anam'>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Estado civil:</p>
                            <OutlinedInput

                                type="text"
                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>

                            <p>Quantidade de Filhos:</p>
                            <OutlinedInput
                                value={filhos}
                                onChange={e => parseInt(e.target.value) > 0? setFilhos(e.target.value) : setFilhos('0')}

                                type="number"

                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Profissão:</p>
                            <OutlinedInput

                                type="text"
                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Rotina de trabalho (quantas horas semanais, qual postura passa a maior parte do tempo -sentado ou em pé, etc):</p>
                            <OutlinedInput

                                type="text"
                            />

                        </FormControl>
                    </div>
                    <div className='lines_anam'>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
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
                                sx={{ m: 1, width: '100%' }} variant="outlined" required>
                                <p>Qual Modalidade?:</p>
                                <OutlinedInput


                                    type='text'

                                />
                            </FormControl> : ''
                        }
                    </div>
                    <div className="lines_anam">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Como é seu sono hoje?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                </div>
                <div className='anam_group'>

                    <div className="lines_anam">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Como é sua alimentação hoje?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Algum cuidado especial (dores, lesões, cirurgias)?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Faz uso de algum medicamento?:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Em caso de emergência, entrar em contato com:</p>
                            <OutlinedInput


                                type='text'

                            />
                        </FormControl>
                    </div>
                    <div className="lines_anam">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                            <p>Qual seu objetivo? O que você espera da prática?:</p>
                            <OutlinedInput

                                type='text'
                                multiline={true}
                                rows={3}

                            />
                        </FormControl>
                    </div>
                </div>
            </div>
            <Button
                sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                type="submit"
                variant="contained"
                size="medium">
                Enviar
            </Button>
        </Box>
    )
}