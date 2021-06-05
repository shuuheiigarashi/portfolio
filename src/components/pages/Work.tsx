import { Box , Container, Flex, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const Work: VFC = memo(() => {
    return (
        <Container textAlign="center">
            <Box
                as="h1"
                color="teal.300"
                fontSize="50px"
            >
            Work
        </Box>
            {/* <Box >Coming soon...</Box> */}
            <Flex flexWrap="wrap" justifyContent="center">
                            <Wrap p={{ base: 4, md: 10 }}>
            <UserCard />
            <UserCard />
            <UserCard />
                    <UserCard />
                    </Wrap>
            </Flex>

        </Container>
    )
})