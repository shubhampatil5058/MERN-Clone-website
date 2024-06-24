
import React, { useState, useContext } from 'react';
import { Box, Typography, Badge, Button, styled } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../Header/logo.svg';

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: '#FFFFFF',
    alignItems: 'center',
    '&:hover': {
        textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
        },
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: 'black',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 400,
    borderRadius: 8,
    padding: '5px 20px',
    height: 32,
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > svg': {
        width: 24,
        marginRight: 8,
    },
    '&:hover': {
        background: '#2874f0',
        color: '#FFFFFF',
    },
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF',
    },
}));

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const handleLoginOpen = () => {
        setOpen(true);
    };

    const logourlseller = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg';

    return (
        <Wrapper>
            {account ? (
                <Profile sx={{ color: 'black' }} account={account} setAccount={setAccount} />
            ) : (
                <LoginButton variant="text" onClick={handleLoginOpen}>
                    <Logo style={{ width: 44, marginRight: 8 }} /> Login
                </LoginButton>
            )}
            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} sx={{color:'black'}}>
                    <ShoppingCartOutlinedIcon />
                </Badge>
                <Typography style={{ marginLeft: 6, color: 'black' }}>Cart</Typography>
            </Container>
            <Box style={{ display: 'flex', alignItems: 'center', marginTop: 3, color: 'black' }}>
                <img src={logourlseller} alt="Become a Seller" style={{ width: 24, marginRight: 8 }} />
                <Typography noWrap style={{ whiteSpace: 'nowrap' }}>Become a Seller</Typography>
                
            </Box>
            <MoreVertIcon sx={{color:'black'}}/>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    );
};

export default CustomButtons;
