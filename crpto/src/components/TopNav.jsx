import { Container, Flex, Heading , Menu , Button, MenuItem, MenuButton , MenuList, HStack } from "@chakra-ui/react";

const TopNav = () =>{
    return(
        <HStack boxShadow="xl" h="16" justify="space-between" px={32}>
            <Heading> Dashboard</Heading>

            <Menu>
              <MenuButton as={Button} >
                Actions
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
    );
};

export default TopNav;