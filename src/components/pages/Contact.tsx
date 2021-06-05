import { Box,Input ,FormControl, FormLabel, Stack,Container,Textarea, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useForm } from "react-hook-form";
import { FaTwitterSquare , FaGithubSquare} from 'react-icons/fa'


export const Contact: VFC = memo(() => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data: string => console.log(data);
    return (
        <Container>
            <Box
                as="h1"
                textAlign="center"
                color="teal.300"
                fontSize="50px"
            >
            Contact
        </Box>
            <Box textAlign="center">お問い合わせはこちらから</Box>
            <Box>
            <Stack spacing={4}>
            <FormControl id="email">
            <FormLabel>Name</FormLabel>
            <Input type="email" bg="white" alignItems="center" />
            </FormControl>
            <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" bg="white" alignItems="center" />
            </FormControl>
            <FormControl id="email">
            <FormLabel>問い合わせ内容</FormLabel>
            <Textarea type="text" bg="white" alignItems="center" />
                    </FormControl>
            <Input type="submit" />
            </Stack>
            </Box>
            <Box textAlign="center" paddingTop={8} fontSize={24}>SNS</Box>
            <Flex justifyContent="center" padding={4} color="teal.300">
                    <Box as="a" href="https://twitter.com/shuuheifront" target="_blank"><FaTwitterSquare size={50}/></Box>
                    <Box as="a" href="https://github.com/shuuheiigarashi" target="_blank"><FaGithubSquare size={50} /></Box>
            </Flex>
            </Container>
    )
})