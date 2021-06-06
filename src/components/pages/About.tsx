import { Box, Container, Flex, Wrap} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { SkillCard } from "../organisms/work/SkillCard";

export const About: VFC = memo(() => {
    return (
        <Container justifyContent="center">
            <Box
                as="h1"
                textAlign="center"
                color="teal.300"
                fontSize="50px"
            >
                About
            </Box>
            <Flex my={4} justifyContent="center" fontSize="28px">
            <Box color="teal.300" textAlign="center" pr={8}>Name</Box>
            <Box textAlign="center">Shuuhei Igarashi</Box>
            </Flex>
            <Flex my={4} justifyContent="center" fontSize="28px">
            <Box color="teal.300" textAlign="center" pr={8}>BirthDay</Box>
            <Box textAlign="center">1993/06/18</Box>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center">
                            <Box
                as="h2"
                textAlign="center"
                color="teal.300"
                fontSize="35px"
            >
                Skill
            </Box>
                <Wrap px={{ base: 4, md: 10 }}>
            <SkillCard title="HTML,CSS,Sass" contents="Webサイト制作での実務経験がございます。" />
            <SkillCard title="PHP,Laravel" contents="WordpressやWebアプリの開発スキルがございます。" />
            <SkillCard title="React,Next" contents="Webアプリの開発スキルがございます。" />
            <SkillCard title="Vue,Nuxt" contents="Webアプリの開発スキル、実務経験がございます。" />
                </Wrap>
            </Flex>

        </Container>

    )
})