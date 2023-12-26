import React from "react";
import { HStack, Stack, Text, Button, Icon, Flex ,Image ,Tab,TabPanel,TabPanels,TabList,Tabs} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const PriceSection=()=>{

  const timeStamps=[" 7:15 PM ", " 8:15 PM "," 9:15 PM "," 10:15 PM "," 11:15 PM "]
    return (
      <CustomCard>
        <Flex justify="space-between" align="start">
          <Stack>
            <HStack color="black.80">
              <Text fontSize="sm">Wallet Balance</Text>
            </HStack>
            <HStack
              spacing={2}
              align={{
                base: "flex-start",
                sm: "center",
              }}
              flexDir={{
                base: "column",
                sm: "row",
              }}
            >
              <HStack>
                <Text textStyle="h2" fontWeight={"medium"}>
                  {" "}
                  22.34567781
                </Text>
                <HStack fontWeight="medium" color="green.500">
                  <Icon as={BsArrowUpRight} />
                  <Text fontSize="sm" fontWeight={"medium"}>
                    {" "}
                    22%
                  </Text>
                </HStack>
              </HStack>
            </HStack>
          </Stack>

          <HStack>
            <Button leftIcon={<Icon as={AiFillPlusCircle} />}> Buy</Button>
            <Button leftIcon={<Icon as={AiFillMinusCircle} />}> Sell</Button>
          </HStack>
        </Flex>
        <Tabs variant="soft-rounded" colorScheme="green">
          <Flex justify="end">
          <TabList bg="black.5" p="3px">
              {["1H", "1D","1W","1M" ].map((tab)=>(
                <Tab
                  _selected={{bg:"white"}}
                  key={tab}
                  fontSize="sm"
                  p="6px"
                  borderRadius="4"
                >
                  {tab}
                </Tab>
              ))}
          </TabList>
          </Flex>
          <TabPanels>
            <TabPanel>
              <Image w="100%" src="/graph.svg" mt="3 rem" />

              <HStack justify="space-between">
                {timeStamps.map((timestamp) => (
                  <Text key={timestamp} fontSize="sm" color="black.80">
                    {timestamp}
                  </Text>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CustomCard>
    );
    
}


export default PriceSection