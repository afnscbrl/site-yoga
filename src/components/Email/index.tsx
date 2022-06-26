import { Box, FormControl, Button, OutlinedInput } from '@mui/material';
import * as React from 'react';

export default function Email() {
    return (
        <Box
            sx={{
                borderColor: 'black',
                border: '2px',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                width: 'auto'
            }}>
            

            <Box
                sx={{
                    border: '2px',
                    width: '40%'
                }}
                className='contato_infos'>
                <div className='lines signin_line1'>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                        <p>Nome</p>
                        <OutlinedInput
                            id="outlined-adornment-nome"
                            type="text"
                        />

                    </FormControl>
                </div>
            </Box>
            <Box
                sx={{
                    border: '2px',
                    width: '40%'
                }}
                className='contato_form'>

                <div className='lines signin_line1'>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" required>
                        <p>Nome</p>
                        <OutlinedInput
                            id="outlined-adornment-nome"
                            type="text"
                        />

                    </FormControl>
                </div>
                <Button
                    sx={{ m: 1, marginTop: 5, width: '30%', alignSelf: 'center' }}
                    type="submit"
                    variant="contained"
                    size="medium">
                    Registrar
                </Button>
            </Box>

        </Box>
    )
}