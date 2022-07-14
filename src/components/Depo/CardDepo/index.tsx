import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Modal, Typography } from '@mui/material';
import './CardDepo.css'
import aspas from './aspas-color.png'

interface Props {
  previa: string,
  depoimento: string,
  aluna: string
}

export default function CardDepo({ previa, depoimento, aluna }: Props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className='cardDepo' >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-depoimento"
        aria-describedby="modal-modal-aluna"
      >
        <Box className='modal modalDepo'>
          <Typography id="modal-modal-depoimento">
            {depoimento}
          </Typography>
          <Typography id="modal-modal-aluna" sx={{ mt: 2 }}>
            {aluna}
          </Typography>
        </Box>
      </Modal>
      <Paper
        onClick={handleOpen}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 1,
          m: 0,
          backgroundColor: 'rgba(163, 59, 18, 0.05)',
          color: '#a33b12'
        }} elevation={3}>
        <img className="aspas_depo" src={aspas} alt="Aspas-Icone"/>

        <p className="texto_depo">
          {previa}
        </p>
        <p className='aluna_depo'>
          {aluna}
        </p>
      </Paper>
    </Box>
  )
}