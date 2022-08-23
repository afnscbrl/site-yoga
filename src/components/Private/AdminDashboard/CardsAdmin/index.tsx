import * as React from 'react';
import './CardsAdmin.css'
import { Box, SxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface Props {
    titulo: string,
    sx?: SxProps<any>,
    eventClick: string
}

export default function CardsAula({ titulo, sx, eventClick }: Props) {

    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        navigate(eventClick)
    }


    return (
        <div onClick={handleClick} className='cards__admin'>

            <Box sx={sx}>
            </Box>
                <h3 >
                    {titulo}
                </h3>
        </div>

    );
}
