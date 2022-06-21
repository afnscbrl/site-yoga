import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, FormHelperText, MenuItem } from '@mui/material';
import "./SignIn.css"




export default function SingIn() {

    const [helper, setHelper] = React.useState<boolean>(false)
    const [pacote, setPacote] = React.useState<string>("")

    const handleChange = (event: SelectChangeEvent) => {
        setPacote(event.target.value);
      };


    return (
        <Box className="conteudo__signin">

            <h2>Inscreva-se</h2>
            <div className='formulario_signin'>
                <div className='lines signin_line1'>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <p>Nome</p>
                        <OutlinedInput
                            id="outlined-adornment-nome"
                            type="text"
                        />

                    </FormControl>
                </div>
                <div className='lines signin_line2'>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">

                        <p>Email</p>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                        />

                    </FormControl>
                </div>
                <div className='lines signin_line3'>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <p>Telefone</p>
                        <OutlinedInput
                            id="outlined-adornment-phone"
                            type="tel"
                        />

                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <p>Senha</p>
                        <OutlinedInput

                            id="outlined-adornment-password"
                            type='password'

                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <p>Repetir Senha</p>
                        <OutlinedInput

                            id="outlined-adornment-password2"
                            type='password'
                        />
                    </FormControl>
                </div>
                <div className='lines signin_line5'>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <p>Pacote</p>
                        <Select
                            id="demo-simple-select-helper"
                            value={pacote}
                            onChange={handleChange}
                        >
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Vinyasa">Vinyasa</MenuItem>
                            <MenuItem value="Hatha Yoga">Hatha Yoga</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button
                    sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                    type="submit"
                    variant="contained"
                    size="medium">
                    Registrar
                </Button>
            </div>
        </Box>
    )
}