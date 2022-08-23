import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from '@mui/material/Fade';
import './Drawer.css'
import { useNavigate } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { userContext } from '../../../context/isAuth'
import axios from 'axios';
require('dotenv').config()

const options = {

  'Inicio': <AutoAwesomeIcon />,
  'Sobre Mim': <StarBorderPurple500Icon />,
  'Aulas': <SelfImprovementIcon />,
  'Depoimentos': <ForumIcon />,
  'Area do Aluno': <AccountCircleIcon />,
  'Inscreva-se': <PersonAddAlt1Icon />

}


function Drawer() {


  let navigate = useNavigate()
  const token = Object({ 'Token': localStorage.getItem('Token') })
  const { auth, setAuth } = React.useContext(userContext)
  const { user, setUser } = React.useContext(userContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  //Settin all axios requests with Authorization header
  axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number,
    option: string
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    if (option === 'Inicio') {
      navigate('/')
    }
    else if (option === 'Area do Aluno') {
      if (token.Token) {
        axios.post(`${process.env.REACT_APP_LINK_HOST}alunas/logged`, token)
          .then(res => {
            if (res.status === 202) {
              //VERIFICAR SE USER 'E ADMN REDIRECT CONDICIONAL
              if (user === process.env.REACT_APP_EMAIL_ADM) {
                navigate('/admindashboard')
              } else {
                navigate('/dashboard')
              }
            }
          })
          .catch(() => navigate('/login'))
      }
      navigate('/login')
    }
    else if (option === 'Inscreva-se') {
      navigate('/registrar')
    }
    else if (option === 'Sobre Mim') {
      navigate('/about')

    } else {
      navigate(`/${option.toLowerCase()}`)
    }

    window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="conteudo">
      <Button

        sx={{ alignSelf: 'start', width: '3vw', height: '5vh' }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </Button>

      <a href="https://www.instagram.com/raquelaraujoyoga/" target="_blank" rel="noreferrer">
        <Button>
          <InstagramIcon fontSize='large' />
        </Button>
      </a>

      <Button onClick={() => {
        navigate('/Contato')
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
      }}>
        <MailOutlineIcon fontSize='large' />
      </Button>

      <Button sx={{ color: 'primary' }}>
        <a className="whatsapp-link" href="https://web.whatsapp.com/send?phone=5585981198176" target="_blank" rel="noreferrer">
          <WhatsAppIcon fontSize='large' />
        </a>
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
            onClick={(event) => handleMenuItemClick(event, index, option[0])}
          >
            {option[1]}

            <div className='secao'>
              {option[0]}
            </div>
          </MenuItem>
        ))}

      </Menu>
    </div>
  );
}

export default Drawer