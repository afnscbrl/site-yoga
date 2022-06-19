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
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const options = {

  'Inicio': <AutoAwesomeIcon />,
  'Aulas': <SelfImprovementIcon />,
  'Depoimentos': <ForumIcon />,
  'Area do Aluno': <AccountCircleIcon />

}


function Drawer() {


  let navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    option: string
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    if (option === 'Area do Aluno') {
      navigate('/Login')
    } else {
      console.log(option)
      navigate(`/${option}`)
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

      <a href="https://www.instagram.com/raquelaraujo.yoga/" target="_blank" rel="noreferrer">
        <Button>
          <InstagramIcon fontSize='large' />
        </Button>
      </a>

      <Button>
        <MailOutlineIcon fontSize='large' />
      </Button>

      <Button sx={{color: 'primary'}}>
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