import { Box } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import * as React from 'react';

export function NavigationBar() {
    return (
        <Box sx={{
            width: '100vw',
            height: '7vh',
            backgroundColor: '#a33b12',
            position: 'relative',
            top: 0,
            left: 0
        }}>
            <SlideshowOutlinedIcon/>
            <AccountBoxOutlinedIcon/>
            <ExitToAppIcon/>
        </Box>
    )
}