
import * as React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/isAuth'

import './NavigationBar.css'
require('dotenv').config()

const options = {

    'Inicio': <SlideshowOutlinedIcon />,
    'Perfil': <AccountBoxOutlinedIcon />,
    'Dashboard': <DashboardIcon />,
    'Logout': <ExitToAppIcon />,

}

export function NavigationBar() {

    let navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {auth, setAuth} = React.useContext(userContext)
    const {user, setUser} = React.useContext(userContext)
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        //event: React.MouseEvent<HTMLElement>,
        index: number,
        option: string
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        if (option === 'Inicio') {
            setAuth('')
            navigate('/')
        } else if( option === 'Perfil') {
            navigate('/perfil')
        } else if (option === 'Dashboard'){
            if (user === process.env.REACT_APP_EMAIL_ADM) {
                navigate('/admindashboard')
              } else {
                navigate('/dashboard')
              }
        }
        else if(option === 'Logout') {
            localStorage.removeItem('Token')
            localStorage.clear()
            setAuth('')
            navigate('/')
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='conteudo__navigation'>
            <Button
                sx={{ alignSelf: 'center', width: '3vw', height: '5vh' }}
                onClick={() => navigate(-1)}
            >
                <SkipPreviousIcon fontSize='large' />
            </Button>
            <Button
                sx={{ alignSelf: 'center', width: '3vw', height: '5vh' }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize="large" />
            </Button>
            <Menu
                sx={{ opacity: '0.9' }}
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {Object.entries(options).map((option, index) => (
                    <MenuItem
                        sx={{ m: '0 10px', fontSize: '1.2em', fontFamily: 'Bad Script', fontWeight: 'Bold' }}
                        key={option[0]}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(index, option[0])}
                    >
                        {option[1]}

                        <div className='secao__navigation'>
                            {option[0]}
                        </div>
                    </MenuItem>
                ))}

            </Menu>

        </div>
    )
}
