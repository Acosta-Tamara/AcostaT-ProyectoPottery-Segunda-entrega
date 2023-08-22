import {Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react" 
import { ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from "./CartWidget";
import brand from '../assets/Logo.jpeg'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex className="encabezado">
      <Box p="2" color="white">
        <Link to={"/"}>
          <img src={brand} alt="carrito" width="50px" height="50px" />
        </Link>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={`/category/${'cat1'}`}>Tazas</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/category/${'cat2'}`}>Macetas</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/category${'cat3'}`}>Platos</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />

      <Box>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
}

export default NavBar