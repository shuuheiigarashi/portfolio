import { Box, Container, Flex, Wrap, VStack, Heading, Text, Badge, HStack, Button, Image, useToast } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { WorkCard } from "../organisms/work/WorkCard";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const workItems = [
  {
    title: "Next.js Portfolio",
    imageUrl: "./nextjs-icon.svg",
    contents: "Next.jsとGraphQLを使ってポートフォリオサイトを作成しました。",
    description: "モダンなWeb技術を使用したポートフォリオサイト。GraphQLによる効率的なデータ取得と、Next.jsのSSR機能を活用しています。",
    link: "https://github.com/shuuheiigarashi/next-graphal",
    technologies: ["Next.js", "GraphQL", "TypeScript", "Chakra UI"],
    featured: true
  },
  {
    title: "NestJS API",
    imageUrl: "./nestjs-icon.svg",
    contents: "NestJSとGraphQLを使ってAPIを作成しました。",
    description: "スケーラブルなバックエンドAPI。GraphQLによる柔軟なデータ取得と、NestJSの強力なDIシステムを活用しています。",
    link: "https://github.com/shuuheiigarashi/nest-introduction",
    technologies: ["NestJS", "GraphQL", "TypeScript", "PostgreSQL"],
    featured: true
  },
  {
    title: "Go REST API",
    imageUrl: "./Go-Logo_Blue.png",
    contents: "GOを使ってAPIを作成しました。",
    description: "高性能なRESTful API。Go言語の並行処理機能を活用し、高速で効率的なAPIを実現しています。",
    link: "https://github.com/shuuheiigarashi/go-rest-api",
    technologies: ["Go", "Gin", "GORM", "MySQL"],
    featured: false
  }
];

const comingSoonProjects = [
  {
    title: "React E-commerce",
    imageUrl: "https://placehold.co/160x160/61dafb/ffffff?text=Coming+Soon",
    contents: "ReactとReduxを使用したECサイトを開発予定です。",
    technologies: ["React", "Redux", "Node.js", "MongoDB"]
  },
  {
    title: "Vue.js Dashboard",
    imageUrl: "https://placehold.co/160x160/4fc08d/ffffff?text=Coming+Soon",
    contents: "Vue.jsとVuexを使用した管理画面を開発予定です。",
    technologies: ["Vue.js", "Vuex", "Vuetify", "Firebase"]
  },
  {
    title: "Laravel Blog",
    imageUrl: "https://placehold.co/160x160/ff2d20/ffffff?text=Coming+Soon",
    contents: "Laravelを使用したブログシステムを開発予定です。",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"]
  }
];

export const Work: VFC = memo(() => {
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
            Work
          </Heading>
          <Text fontSize="lg" color="gray.600">
            私が作成したプロジェクトをご紹介します
          </Text>
        </MotionBox>

        {/* フィーチャープロジェクト */}
        <MotionBox
          w="full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <VStack spacing={8} align="stretch">
            <Heading as="h2" textAlign="center" color="teal.300" fontSize="3xl">
              Featured Projects
            </Heading>
            
            <VStack spacing={8} align="stretch">
              {workItems.filter(item => item.featured).map((project, index) => (
                <MotionBox
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Box
                    p={8}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    bg="white"
                    _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                    transition="all 0.3s"
                  >
                    <Flex direction={{ base: "column", lg: "row" }} gap={8}>
                      <Box flexShrink={0}>
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          boxSize="200px"
                          objectFit="contain"
                          borderRadius="lg"
                          bg="gray.50"
                        />
                      </Box>
                      
                      <VStack align={{ base: "center", lg: "flex-start" }} spacing={4} flex={1}>
                        <VStack align={{ base: "center", lg: "flex-start" }} spacing={2} w="full">
                          <Heading as="h3" fontSize="2xl" color="teal.300">
                            {project.title}
                          </Heading>
                          <Text fontSize="lg" color="gray.600" textAlign={{ base: "center", lg: "left" }}>
                            {project.description}
                          </Text>
                        </VStack>

                        <Wrap spacing={2} justify={{ base: "center", lg: "flex-start" }}>
                          {project.technologies.map((tech) => (
                            <Badge key={tech} colorScheme="teal" variant="subtle" px={3} py={1}>
                              {tech}
                            </Badge>
                          ))}
                        </Wrap>

                        <HStack spacing={4} wrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                          <Button
                            leftIcon={<FaGithub />}
                            colorScheme="teal"
                            onClick={() => window.open(project.link, "_blank")}
                            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                            transition="all 0.3s"
                          >
                            View Code
                          </Button>
                        </HStack>
                      </VStack>
                    </Flex>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </VStack>
        </MotionBox>

        {/* その他のプロジェクト */}
        <MotionBox
          w="full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <VStack spacing={8} align="stretch">
            <Heading as="h2" textAlign="center" color="teal.300" fontSize="3xl">
              Other Projects
            </Heading>
            
            <Wrap justify="center" spacing={6}>
              {workItems.filter(item => !item.featured).map((project, index) => (
                <MotionBox
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <WorkCard
                    onClick={() => window.open(project.link, "_blank")}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    contents={project.contents}
                  />
                </MotionBox>
              ))}
              {comingSoonProjects.map((project, index) => (
                <MotionBox
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + (workItems.filter(item => !item.featured).length + index) * 0.1 }}
                >
                  <WorkCard
                    onClick={() => {}} // クリックできないようにする
                    title={project.title}
                    imageUrl={project.imageUrl}
                    contents={project.contents}
                  />
                </MotionBox>
              ))}
            </Wrap>
          </VStack>
        </MotionBox>
      </MotionVStack>
    </Container>
  );
});
