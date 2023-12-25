import React from "react";
import { HStack, Stack, Text, Button, Icon, Flex } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const PriceSection=()=>{
    return (
        <CustomCard>
            <Flex justify="space-between"  align="start">
            <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack spacing={2}
            align={{
                base:"flex-start",
                sm:"center",
            }}
            flexDir={{
                base:"column",
                sm:"row",
            }}
            >
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}> 22.34567781</Text>
              <HStack fontWeight="medium" color="green.500" >
              <Icon as={ BsArrowUpRight}/>
              <Text fontSize="sm" fontWeight={"medium"}> 22%</Text>
              
              </HStack>
            </HStack>
            
          </HStack>
            </Stack> 

            <HStack>
                <Button leftIcon={<Icon as={ AiFillPlusCircle}/>}> Buy</Button>
                <Button leftIcon={<Icon as={ AiFillMinusCircle}/>}> Sell</Button>
            </HStack>
            </Flex>
        
        </CustomCard>
    )
}


export default PriceSection