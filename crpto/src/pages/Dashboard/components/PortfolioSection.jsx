import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection =()=>{
    return (
      <HStack justify="space-between" bg="white" borderRadius="xl" p="6" >
      <HStack spacing="16">

      
        <Stack>
          <HStack color="black.80" >
            <Text fontSize="sm">Total Portfolio Value </Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight={"medium"}> Rs. 112,312,345</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack spacing={4}>
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}> 22.34567781</Text>
              <Tag colorScheme="gray" fontWeight={"medium"}> BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}> Rs.1300.00</Text>
              <Tag colorScheme="gray" fontWeight={"medium"}> INR</Tag>
            </HStack>
          </HStack>
        </Stack>
        </HStack>
        <HStack>
          <Button leftIcon={<Icon as={ AiOutlineArrowDown}/>}> Deposit</Button>
          <Button leftIcon={<Icon as={ AiOutlineArrowUp}/>}> Withdraw</Button>
        </HStack>
      </HStack>
    );
}

export default PortfolioSection;