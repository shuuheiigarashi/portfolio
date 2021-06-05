import { Box, Container } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
    return (
        <Container textAlign="center">
            <Box
                as="h1"
                color="teal.300"
                fontSize="50px"
            >
                Shuuhei Igarashi
            </Box>
            <Box
                fontSize="20px"            
            >
                Welcome to my page
            </Box>
        </Container>
    )
})