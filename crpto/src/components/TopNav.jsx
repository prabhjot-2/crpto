import { Container, Flex, Box, Heading , Menu , Button, MenuItem, MenuButton , MenuList, HStack, Icon } from "@chakra-ui/react";
import {FaUserTie} from "react-icons/fa";
const TopNav = () =>{
    return(
        <Box>
            <HStack maxW="80rem" boxShadow="xl" h="16" justify="space-between" px={32}>
            <Heading fontWeight="medium" fontSize="28px"> Dashboard</Heading>

            <Menu>
              <MenuButton as={Button} >
                <Icon as={FaUserTie} fonstSize="24px"/>
              </MenuButton>
              <MenuList>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Support</MenuItem>
    
              </MenuList>
            </Menu>
        </HStack>
        </Box>
    );
};

export default TopNav;