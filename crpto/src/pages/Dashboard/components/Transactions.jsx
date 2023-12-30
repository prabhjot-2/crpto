import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Flex, Grid, Stack, Text,Icon, Divider, Button } from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
const Transactions=()=>{

    const transactions =[
        {
            id:"1",
            icon: BsCurrencyRupee,
            text:"INR Deposit",
            amount: "+ Rs81,123.10",
            timestamp:"2022-06-09 7:06 PM",
        },
        {
            id:"2",
            icon: FaBtc,
            text:"BTC Sell",
            amount: "- 12.4566433 BTC",
            timestamp:"2022-06-09 7:06 PM",
        },
        {
            id:"3",
            icon: BsCurrencyRupee,
            text:"INR Deposit",
            amount: "+ Rs81,123.10",
            timestamp:"2022-06-09 7:06 PM",
        },

    ];
    return(
        <CustomCard h="full">
            <Text mb="6" fontSize="sm" color="black.80">
                Recent Transactions
            </Text>
            <Stack spacing={4}>
                {
                    transactions.map((transaction,i )=>(
                        <Fragment key={transaction.id }>
                            {i !=0 && <Divider/>}
                            <Flex key={transaction.id}>
                            <Grid 
                                placeItems="center"
                                boxSize={10} 
                                borderRadius="full"
                                bg="black.5"
                            >
                                <Icon as={transaction.icon}/>   
                            </Grid>
                            <Flex justify="space-between" w="full">
                                <Stack spacing={0}>
                                    <Text textStyle="h6">
                                        {transaction.text}
                                    </Text>
                                    <Text fontSize="sm" color="black.40">
                                        {transaction.timestamp}
                                    </Text>
                                </Stack>
                                <Text textStyle="h6">{transaction.amount} </Text>
                            </Flex>
                        </Flex>
                        </Fragment>
                    ))
                }
            </Stack>
            <Button w="full" mt="6" colorScheme="gray">
                View All
            </Button>
        </CustomCard>
    )
}

export default Transactions