import { Box , Container, Flex, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { WorkCard } from "../organisms/work/WorkCard";

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
            <WorkCard />
                    </Wrap>
            </Flex>

        </Container>
    )
})