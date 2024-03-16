import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Container,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useForm } from "react-hook-form";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export const Contact: VFC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // フォームデータをログに出力（後で適切な処理に置き換える）
  };

  return (
    <Container>
      <Box as="h1" textAlign="center" color="teal.300" fontSize="50px">
        Contact
      </Box>
      <Box textAlign="center">お問い合わせはこちらから</Box>
      <Box>
        <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              bg="white"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && <span>必須項目です</span>}
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              bg="white"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>必須項目です</span>}
          </FormControl>
          <FormControl id="content">
            <FormLabel>問い合わせ内容</FormLabel>
            <Textarea
              bg="white"
              type="text"
              {...register("content", { required: true })}
            />
            {errors.content && <span>必須項目です</span>}
          </FormControl>
          <Input type="submit" value="送信" onClick={onSubmit} />
        </Stack>
      </Box>
      <Box textAlign="center" paddingTop={8} fontSize={24}>
        SNS
      </Box>
      <Flex justifyContent="center" padding={4} color="teal.300">
        <Box as="a" href="https://twitter.com/shuuheifront" target="_blank">
          <FaTwitterSquare size={50} />
        </Box>
        <Box as="a" href="https://github.com/shuuheiigarashi" target="_blank">
          <FaGithubSquare size={50} />
        </Box>
      </Flex>
    </Container>
  );
});
