import { Box, Container, VStack, Heading, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export const Home: VFC = memo(() => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => navigate(path);

  return (
    <Container maxW="container.xl" py={20}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="80vh">
        {/* 左側: テキストコンテンツ */}
        <MotionVStack
          spacing={8}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          flex={1}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text fontSize="lg" color="teal.300" fontWeight="bold" mb={2}>
              Welcome to my portfolio
            </Text>
            <Heading
              as="h1"
              size="2xl"
              color="teal.300"
              fontWeight="bold"
              lineHeight="1.2"
            >
              Shuuhei Igarashi
            </Heading>
            <Text fontSize="xl" color="gray.600" mt={4}>
              Frontend Developer & Full Stack Engineer
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text fontSize="lg" color="gray.600" maxW="500px" lineHeight="1.6">
              フロントエンド開発を中心に、React、Vue.js、Next.js、Nuxt.jsを使用した
              Webアプリケーション開発を行っています。ユーザー体験を重視した
              モダンなWebサイトの制作に取り組んでいます。
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Flex gap={4} wrap="wrap" justify={{ base: "center", md: "flex-start" }}>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleNavigate("/work")}
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                作品を見る
              </Button>
              <Button
                variant="outline"
                colorScheme="teal"
                size="lg"
                onClick={handleNavigate("/about")}
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                詳しく見る
              </Button>
            </Flex>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Flex gap={6} justify={{ base: "center", md: "flex-start" }}>
              <Box
                as="a"
                href="https://github.com/shuuheiigarashi"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ transform: "scale(1.1)", color: "teal.400" }}
                transition="all 0.3s"
              >
                <Icon as={FaGithub} w={8} h={8} color="teal.300" />
              </Box>
              <Box
                as="a"
                href="https://twitter.com/shuuheifront"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ transform: "scale(1.1)", color: "teal.400" }}
                transition="all 0.3s"
              >
                <Icon as={FaTwitter} w={8} h={8} color="teal.300" />
              </Box>
              <Box
                as="a"
                href="mailto:shuuhei.igarashi0618@gmail.com"
                _hover={{ transform: "scale(1.1)", color: "teal.400" }}
                transition="all 0.3s"
              >
                <Icon as={FaEnvelope} w={8} h={8} color="teal.300" />
              </Box>
            </Flex>
          </MotionBox>
        </MotionVStack>

        {/* 右側: 装飾的な要素 */}
        <MotionBox
          flex={1}
          display={{ base: "none", lg: "block" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box
            w="400px"
            h="400px"
            borderRadius="50%"
            bg="linear-gradient(135deg, teal.300 0%, teal.500 100%)"
            opacity="0.1"
            position="relative"
            mx="auto"
          >
            <Box
              position="absolute"
              top="20%"
              left="20%"
              w="200px"
              h="200px"
              borderRadius="50%"
              bg="linear-gradient(135deg, teal.200 0%, teal.400 100%)"
              opacity="0.3"
            />
            <Box
              position="absolute"
              bottom="20%"
              right="20%"
              w="150px"
              h="150px"
              borderRadius="50%"
              bg="linear-gradient(135deg, teal.100 0%, teal.300 100%)"
              opacity="0.4"
            />
          </Box>
        </MotionBox>
      </Flex>
    </Container>
  );
});
