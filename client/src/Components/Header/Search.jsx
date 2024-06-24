import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 8px; 
  width: 70%;  
  background-color: #f0f5ff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 9px;
  display: flex;
  color: black;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
  padding-top: 5px;  
  padding-bottom: 5px; 
`;

const Search = () => {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false);
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => getText(e.target.value)}
            />
            {
                text && 
                <ListWrapper hidden={open}>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem key={product.id}>
                                <Link 
                                    to={`/product/${product.id}`} 
                                    style={{ textDecoration:'none', color:'inherit'}}
                                    onClick={() => setOpen(true)}  
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }  
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;
