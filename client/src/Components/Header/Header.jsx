import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import CustomButtons from './CustomButton';
import Search from './Search';


const StyledHeader = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    height: 65,
    boxShadow: 'none', // Remove the default shadow
    borderBottom: '2px solid #E0E0E0', // Add 2px gap with background color
}));

const Component = styled(Link)`
    margin-left: 2%; /* Adjust the margin as needed */
    margin-right: 20px; /* Create a 5px gap between the logo and the search bar */
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center; /* Center the logo vertically */
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} style={{ width: 160, height: 50, marginTop: 8 }} />
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
