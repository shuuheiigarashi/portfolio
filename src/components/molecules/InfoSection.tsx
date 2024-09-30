import { Box, Flex } from "@chakra-ui/react";
import { memo,VFC } from "react";

type InfoSectionProps = { 
    label: string; 
    value: string; 
}

export const InfoSection: VFC<InfoSectionProps> = memo(({ label, value }) => {
    return (
    <Flex my={4} justifyContent="center" fontSize="28px">
        <Box color="teal.300" textAlign="center" pr={8}>
            {label}
        </Box>
        <Box textAlign="center">
            {value}
        </Box>
    </Flex>
)
});