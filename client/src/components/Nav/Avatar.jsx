import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';



export default function ProfileHome() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


var userLogeado = useSelector (
    state => state.usuario
)
return (
    <div classname="foto">
        <React.Fragment>
            <Box sx={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        /* sx={{ ml: 2 }} */
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >   
                        {!userLogeado.name ?
                        <Avatar sx={{ width: 62, height: 60, fontSize: "2.5rem", color:'#FF6363', background:'#19111d'}}></Avatar>

                        : <img style={{width:'62px',height:'60px'}} src={userLogeado.image} alt={userLogeado.name?.charAt(0)} />

                        }
                    </IconButton>

                </Tooltip>
                {/* <p className='log-usuario'>{userLogeado.name ? userLogeado.name : 'Invitado'}</p> */}
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    Typography: {
                        fontSize: '2rem'
                    },
                    sx: {
                        overflow: 'visible',
                        fontWeight: '5rem',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,

                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

            >
                {userLogeado.name ?
                    <Link to={`/Detail`}>
                        <MenuItem>
                            <Avatar /> <p className='menu' style={{ paddingRigth: '20px' }}> Mi Perfil </p>
                        </MenuItem>
                    </Link> :
                    <Link to='/Login'>
                        <MenuItem >
                            <Avatar /> <p className='menu' >Iniciar Sesion</p>
                        </MenuItem>
                    </Link>}
                {userLogeado.name ?
                    <Link to={'/'} >
                        <MenuItem >
                            <Avatar /> <p className='menu' style={{ paddingRigth: '20px' }}> Cerrar Sesion </p>
                        </MenuItem>
                        <MenuItem >

                            <Avatar /> <p className='menu' style={{ paddingRigth: '20px' }}> Jugar </p>
                        </MenuItem>
                    </Link> :
                    <Link to='/Registro'>
                        <MenuItem fontSize="2rem">
                            <Avatar /> <p className='menu'> Crear Cuenta </p>
                        </MenuItem>
                    </Link>}


                    {
                        userLogeado.name === 'administrador'?

                    <div>
                 <Divider />
                    <Link to='/Panel'>
                        <MenuItem fontSize="2rem">
                            <Avatar /> <p className='menu'> Settings</p>
                        </MenuItem>
                    </Link>
                    </div>

                    :null

                }
            </Menu>
        </React.Fragment>
    </div>
);
}