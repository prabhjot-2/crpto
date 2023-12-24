import { Container, Flex, Box, Heading , Menu , Button, MenuItem, MenuButton , MenuList, HStack, Icon } from "@chakra-ui/react";
import {FaUserTie} from "react-icons/fa";
const TopNav = () =>{
    return(
        <Box>
            <HStack maxW="60rem" boxShadow="xl" h="16" justify="space-between" px={32}>
            <Heading fontSize="28px"> Dashboard</Heading>

            <Menu>
              <MenuButton as={Button} >
                <Icon as={FaUserTie}/>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
        </HStack>
        </Box>
    );
};

export default TopNav;