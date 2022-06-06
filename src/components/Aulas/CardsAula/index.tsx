import * as React from 'react';
import Button from '@mui/material/Button';
import './CardAula.css'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


interface Props {
    id: string,
    titulo: string,
    texto: React.ReactElement<HTMLParagraphElement>
    modalTexto: React.ReactElement<HTMLParagraphElement>
}

export default function CardsAula({ id, titulo, texto, modalTexto }: Props) {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Box className='aulas__cardaulas' id={id}>
            <h3 >
                {titulo}
            </h3>

            {texto}
            
            <Button variant="contained"
                onClick={handleOpen}
                size="large"
                sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins'
                }}>
                Saiba Mais
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {titulo}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalTexto}
                    </Typography>
                    <Button sx={{fontWeight: 'bold'}}>
                        Inscreva-se
                    </Button>
                </Box>
            </Modal>
        </Box>

    );
}

