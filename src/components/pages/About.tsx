import { Box, Container, Flex, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { SkillCard } from "../organisms/work/SkillCard";
import { InfoSection } from "../molecules/InfoSection"


export const About: VFC = memo(() => {
    const skills = [
        { title: "HTML,CSS,Sass", contents: "Webサイト制作での実務経験がございます。" },
        { title: "PHP,Laravel", contents: "WordpressやWebアプリの開発スキルがございます。" },
        { title: "React,Next", contents: "Webアプリの開発スキルがございます。" },
        { title: "Vue,Nuxt", contents: "Webアプリの開発スキル、実務経験がございます。" },
    ];

    return (
        <Container justifyContent="center">
            <Box as="h1" textAlign="center" color="teal.300" fontSize="50px">
                About
            </Box>
            <InfoSection label="Name" value="Shuuhei Igarashi" />
            <InfoSection label="BirthDay" value="1993/06/18" />
            <Flex flexWrap="wrap" justifyContent="center">
                <Box as="h2" textAlign="center" color="teal.300" fontSize="35px">
                    Skill
                </Box>
                <Wrap px={{ base: 4, md: 10 }}>
                    {skills.map((skill) => (
                        <SkillCard key={skill.title} title={skill.title} contents={skill.contents} />
                    ))}
                </Wrap>
            </Flex>
        </Container>
    );
});
