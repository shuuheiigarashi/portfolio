import { Box, Container, Flex, VStack, Heading, Text, Button, useToast, HStack, Icon, Link } from "@chakra-ui/react";
import { memo, VFC, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { FormInput } from "../molecules/FormInput";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

interface FormData {
  name: string;
  email: string;
  content: string;
}

const SocialLinks = () => (
  <VStack spacing={6} w="full">
    <Heading as="h3" fontSize="2xl" color="teal.300">
      Follow Me
    </Heading>
    <HStack spacing={6} justify="center">
      <Link
        href="https://twitter.com/shuuheifront"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ transform: "scale(1.1)", color: "teal.400" }}
        transition="all 0.3s"
      >
        <Icon as={FaTwitterSquare} w={12} h={12} color="teal.300" />
      </Link>
      <Link
        href="https://github.com/shuuheiigarashi"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ transform: "scale(1.1)", color: "teal.400" }}
        transition="all 0.3s"
      >
        <Icon as={FaGithubSquare} w={12} h={12} color="teal.300" />
      </Link>
      <Link
        href="https://qiita.com/IgarashiShuuhei"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ transform: "scale(1.1)", color: "teal.400" }}
        transition="all 0.3s"
      >
        <Icon as={SiQiita} w={12} h={12} color="teal.300" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/%E8%84%A9%E5%B9%B3-%E4%BA%94%E5%8D%81%E5%B5%90-b820411ba/"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ transform: "scale(1.1)", color: "teal.400" }}
        transition="all 0.3s"
      >
        <Icon as={FaLinkedin} w={12} h={12} color="teal.300" />
      </Link>
      <Link
        href="mailto:shuuhei.igarashi0618@gmail.com"
        _hover={{ transform: "scale(1.1)", color: "teal.400" }}
        transition="all 0.3s"
      >
        <Icon as={FaEnvelope} w={12} h={12} color="teal.300" />
      </Link>
    </HStack>
  </VStack>
);

export const Contact: VFC = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    mode: "onBlur"
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-to-slack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Slackへの送信に失敗しました。');
      }
  
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。後日ご連絡いたします。",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      reset(); // フォームをリセット
    } catch (error) {
      console.error('エラー:', error);
      toast({
        title: "送信エラー",
        description: "送信に失敗しました。しばらく時間をおいて再度お試しください。",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <MotionVStack
        spacing={12}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ヘッダー */}
        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Heading as="h1" color="teal.300" fontSize="4xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="lg" color="gray.600">
            お問い合わせやご相談がございましたら、お気軽にご連絡ください
          </Text>
        </MotionBox>

        <Flex direction={{ base: "column", lg: "row" }} gap={12} w="full">
          {/* お問い合わせフォーム */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <VStack spacing={8} align="stretch">
              <Heading as="h2" fontSize="2xl" color="teal.300">
                お問い合わせフォーム
              </Heading>
              
              <Box
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                p={8}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
                bg="white"
                shadow="md"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s"
              >
                <VStack spacing={6}>
                  <FormInput
                    id="name"
                    label="お名前 *"
                    type="text"
                    register={register}
                    errors={errors}
                    required
                  />
                  <FormInput
                    id="email"
                    label="メールアドレス *"
                    type="email"
                    register={register}
                    errors={errors}
                    required
                  />
                  <FormInput
                    id="content"
                    label="お問い合わせ内容 *"
                    type="textarea"
                    register={register}
                    errors={errors}
                    required
                  />
                  
                  <Button
                    type="submit"
                    colorScheme="teal"
                    size="lg"
                    w="full"
                    isLoading={isSubmitting}
                    loadingText="送信中..."
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.3s"
                  >
                    送信する
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>

          {/* SNSリンク */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <VStack spacing={8} align="stretch">
              <Heading as="h2" fontSize="2xl" color="teal.300">
                SNS & Links
              </Heading>
              
              <Box
                p={8}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="xl"
                bg="white"
                shadow="md"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s"
              >
                <SocialLinks />
              </Box>

              {/* 追加情報 */}
              <Box
                p={6}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                bg="gray.50"
              >
                <VStack spacing={4} align="stretch">
                  <Heading as="h3" fontSize="lg" color="teal.300">
                    その他の連絡方法
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    • お急ぎの場合は、SNSのDMでもお気軽にご連絡ください<br/>
                    • 技術的な質問は、GitHubのIssuesでも受け付けています<br/>
                    • 記事の執筆依頼は、Qiitaのメッセージ機能をご利用ください
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </Flex>
      </MotionVStack>
    </Container>
  );
});
