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
import { logout } from '../../redux/actions';



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


const userLogeado = useSelector (
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
                        {userLogeado.image ? <img style={{borderRadius: "50%"}} src={`${userLogeado.image}`} height={45} width={48} alt="Not Found"/> : <Avatar sx={{ width: 48, height: 45, fontSize: "2.5rem", color:'#FF6363', background:'#19111d'}}></Avatar>}
                    </IconButton>

                </Tooltip>
                {/* <p className='log-usuario'>{userLogeado.email ? userLogeado.email : 'Invitado'}</p> */}
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
                            right: 17,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,

                        },
                    },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

            >

                {userLogeado.email ?
                    <Link to={'/'} >
                        <MenuItem >
                            <Avatar /> <p className='menu' style={{ paddingRigth: '20px' }} onClick={() => (dispatch(logout()))} > Cerrar Sesion </p>
                        </MenuItem>
                        <MenuItem >

                            <Avatar /> 
                            <Link to={'/homerecluiter'}>
                            <p className='menu' style={{ paddingRigth: '20px' }}> Mi Perfil </p>
                            </Link>
                        </MenuItem>
                    </Link> :
                    <Link to='/Registro'>
                        <MenuItem fontSize="2rem">
                            <Avatar /> <p className='menu'> Crear Cuenta </p>
                        </MenuItem>
                    </Link>}


                    {
                        userLogeado.email === 'administrador'?

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