import { Box, Container, Flex, Wrap, VStack, HStack, Text, Heading, Progress, Avatar, Badge, Divider } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { motion } from "framer-motion";
import { SkillCard } from "../organisms/work/SkillCard";
import { InfoSection } from "../molecules/InfoSection";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export const About: VFC = memo(() => {
    const skills = [
        { title: "HTML,CSS,Sass", contents: "Webサイト制作での実務経験がございます。", level: 90 },
        { title: "PHP,Laravel", contents: "WordpressやWebアプリの開発スキルがございます。", level: 85 },
        { title: "React,Next", contents: "Webアプリの開発スキルがございます。", level: 88 },
        { title: "Vue,Nuxt", contents: "Webアプリの開発スキル、実務経験がございます。", level: 92 },
    ];

    const skillCards = [
        { 
            title: "HTML,CSS,Sass", 
            contents: "Webサイト制作での実務経験がございます。",
            imageUrl: "https://placehold.co/160x160/4285f4/ffffff?text=HTML%2FCSS"
        },
        { 
            title: "PHP,Laravel", 
            contents: "WordpressやWebアプリの開発スキルがございます。",
            imageUrl: "https://placehold.co/160x160/777bb4/ffffff?text=PHP%2FLaravel"
        },
        { 
            title: "React,Next", 
            contents: "Webアプリの開発スキルがございます。",
            imageUrl: "https://placehold.co/160x160/61dafb/ffffff?text=React%2FNext"
        },
        { 
            title: "Vue,Nuxt", 
            contents: "Webアプリの開発スキル、実務経験がございます。",
            imageUrl: "https://placehold.co/160x160/4fc08d/ffffff?text=Vue%2FNuxt"
        },
    ];

    const experiences = [
        {
            year: "2024 - Present",
            title: "個人事業主",
            company: "フリーランス",
            description: "Webフロントエンドを中心としたフルスタックエンジニアとして活動。React、Vue.js、Next.js、Nuxt.jsを使用したWebアプリケーション開発を手がけています。"
        },
        {
            year: "2020 - 2024",
            title: "Webフロントエンドエンジニア",
            company: "企業（正社員）",
            description: "Webフロントエンドを中心としたエンジニアとして従事。モダンなフレームワークを使用したWebアプリケーション開発に携わりました。"
        },
        {
            year: "2017 - 2019",
            title: "Webコーダー",
            company: "Web制作会社",
            description: "HTML、CSS、JavaScriptを使用したWebサイト制作を担当。レスポンシブデザインやユーザビリティを重視したサイト制作に従事しました。"
        }
    ];

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
                        About
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        私について詳しくご紹介します
                    </Text>
                </MotionBox>

                {/* プロフィールセクション */}
                <MotionBox
                    w="full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Flex direction={{ base: "column", md: "row" }} align="center" gap={8}>
                        <Avatar
                            size="2xl"
                            name="Shuuhei Igarashi"
                            src="https://via.placeholder.com/200x200/teal.300/white?text=SI"
                            border="4px solid"
                            borderColor="teal.300"
                        />
                        <VStack align={{ base: "center", md: "flex-start" }} spacing={4} flex={1}>
                            <InfoSection label="Name" value="Shuuhei Igarashi" />
                            <InfoSection label="BirthDay" value="1993/06/18" />
                            <InfoSection label="Location" value="Tokyo, Japan" />
                            <InfoSection label="Experience" value="7+ years" />
                        </VStack>
                    </Flex>
                </MotionBox>

                <Divider />

                {/* スキルセクション */}
                <MotionBox
                    w="full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <VStack spacing={8} align="stretch">
                        <Heading as="h2" textAlign="center" color="teal.300" fontSize="3xl">
                            Skills
                        </Heading>
                        
                        {/* スキルレベル表示 */}
                        <VStack spacing={6} align="stretch">
                            {skills.map((skill, index) => (
                                <MotionBox
                                    key={skill.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                >
                                    <HStack justify="space-between" mb={2}>
                                        <Text fontWeight="bold" fontSize="lg">{skill.title}</Text>
                                        <Badge colorScheme="teal" variant="subtle">
                                            {skill.level}%
                                        </Badge>
                                    </HStack>
                                    <Progress
                                        value={skill.level}
                                        colorScheme="teal"
                                        size="lg"
                                        borderRadius="full"
                                        bg="gray.200"
                                    />
                                    <Text fontSize="sm" color="gray.600" mt={2}>
                                        {skill.contents}
                                    </Text>
                                </MotionBox>
                            ))}
                        </VStack>

                        {/* スキルカード */}
                        <Box>
                            <Heading as="h3" textAlign="center" color="teal.300" fontSize="2xl" mb={6}>
                                Technology Stack
                            </Heading>
                            <Wrap justify="center" spacing={6}>
                                {skillCards.map((skill, index) => (
                                    <MotionBox
                                        key={skill.title}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                    >
                                        <SkillCard 
                                            title={skill.title} 
                                            contents={skill.contents}
                                            imageUrl={skill.imageUrl}
                                        />
                                    </MotionBox>
                                ))}
                            </Wrap>
                        </Box>
                    </VStack>
                </MotionBox>

                <Divider />

                {/* 経歴セクション */}
                <MotionBox
                    w="full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <VStack spacing={8} align="stretch">
                        <Heading as="h2" textAlign="center" color="teal.300" fontSize="3xl">
                            Experience
                        </Heading>
                        
                        <VStack spacing={6} align="stretch">
                            {experiences.map((exp, index) => (
                                <MotionBox
                                    key={exp.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                                >
                                    <Box
                                        p={6}
                                        border="1px solid"
                                        borderColor="gray.200"
                                        borderRadius="lg"
                                        bg="white"
                                        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                                        transition="all 0.3s"
                                    >
                                        <HStack justify="space-between" mb={3}>
                                            <Badge colorScheme="teal" variant="solid" px={3} py={1}>
                                                {exp.year}
                                            </Badge>
                                            <Text fontSize="sm" color="gray.500">
                                                {exp.company}
                                            </Text>
                                        </HStack>
                                        <Heading as="h3" fontSize="xl" color="teal.300" mb={2}>
                                            {exp.title}
                                        </Heading>
                                        <Text color="gray.600">
                                            {exp.description}
                                        </Text>
                                    </Box>
                                </MotionBox>
                            ))}
                        </VStack>
                    </VStack>
                </MotionBox>
            </MotionVStack>
        </Container>
    );
});
