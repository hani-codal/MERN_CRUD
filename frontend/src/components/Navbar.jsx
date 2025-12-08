
import {  Button, Container, Flex, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  return (
   <Container maxW={"1140px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{
        base:"column",
        sm:"row"
      }} >
        <HStack alignItems={"center"} >
          <Link to={"/"} >Product Store</Link>
          <Link to={"/create"}>
            <Button>
            <CiSquarePlus />
            </Button>
          </Link>
        </HStack>
      </Flex>
   </Container>
  )
}

export default Navbar