import { Box, Container, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const About: VFC = memo(() => {
    return (
        <Container justifyContent="center">
            <Box
                as="h1"
                textAlign="center"
                color="teal.300"
                fontSize="50px"
            >
                About
            </Box>
            <Flex my={4} justifyContent="center" fontSize="28px">
            <Box color="teal.300" textAlign="center" pr={8}>Name</Box>
            <Box textAlign="center">Shuuhei Igarashi</Box>
            </Flex>
            <Flex my={4} justifyContent="center" fontSize="28px">
            <Box color="teal.300" textAlign="center" pr={8}>BirthDay</Box>
            <Box textAlign="center">1993/06/18</Box>
            </Flex>
        </Container>

    )
})