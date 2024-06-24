
import { Box, styled } from '@mui/material';

import Slide from './Slide';

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({ products }) => {
    const adURL = 'https://rukminim2.flixcart.com/fk-p-flap/1000/1540/image/131c8c7ecafd87e5.jpg?q=20';

    return (
        <Component>
            <LeftComponent>
                <Slide 
                    data={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} style={{width: 217}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide;