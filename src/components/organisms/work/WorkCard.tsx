import { memo, VFC } from "react";
import { Box, Image, Stack, Text} from "@chakra-ui/react";


// type Props = {
//     id: number;
//     imageUrl: string;
//     userName: string;
//     fullName: string;
//     onClick: (id: number) => void;
// }

export const UserCard: VFC = memo(() => {
    return (
                <Box
                    w="200px"
                    h="260px"
                    bg="white"
                    borderRadius="10px"
            shadow="md"
            mx="auto"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
                >
                    <Stack textAlign="center">
                        <Image
                            boxSize="160px"
                            m="auto"
                            src="https://source.unsplash.com/random" 
                            />
                        <Text fontSize="lg" fontWeight="bold">work</Text>
                        <Text fontSize="sm" color="gray">Coming soon...</Text>
                    </Stack>
                </Box>              

    )
})