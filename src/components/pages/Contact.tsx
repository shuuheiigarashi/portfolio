import { Box, Stack, Container, Flex, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useForm } from "react-hook-form";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { FormInput } from "../molecules/FormInput";

const SocialLinks = () => (
  <Flex justifyContent="center" padding={2} color="teal.300">
    <Box as="a" href="https://twitter.com/shuuheifront" target="_blank">
      <FaTwitterSquare size={50} />
    </Box>
    <Box as="a" href="https://github.com/shuuheiigarashi" target="_blank">
      <FaGithubSquare size={50} />
    </Box>
    <Box as="a" href="https://qiita.com/IgarashiShuuhei" target="_blank">
      <SiQiita size={50} />
    </Box>
  </Flex>
);

export const Contact: VFC = memo(() => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const webhookUrl = process.env.REACT_APP_SLACK_WEBHOOK_URL; 
    const payload = {
      text: `新しい問い合わせがありました:\n名前: ${data.name}\nメール: ${data.email}\n内容: ${data.content}`
    };

    if (!webhookUrl) {
      console.error("Webhook URL is not defined");
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Slackへの送信に失敗しました。');
      }

      console.log('送信成功:', data);
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <Container>
      <Box as="h1" textAlign="center" color="teal.300" fontSize="50px">
        Contact
      </Box>
      <Box textAlign="center">お問い合わせはこちらから</Box>
      <Box>
        <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput id="name" label="Name" type="text" register={register} errors={errors} />
          <FormInput id="email" label="Email" type="email" register={register} errors={errors} />
          <FormInput id="content" label="問い合わせ内容" type="textarea" register={register} errors={errors} />
          <Input type="submit" value="送信" />
        </Stack>
      </Box>
      <Box textAlign="center" paddingTop={8} fontSize={24}>
        SNS
      </Box>
      <SocialLinks />
    </Container>
  );
});
