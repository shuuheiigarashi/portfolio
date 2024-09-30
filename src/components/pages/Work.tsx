import { Box, Container, Flex, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { WorkCard } from "../organisms/work/WorkCard";

const workItems = [
  {
    title: "Next",
    imageUrl: "./nextjs-icon.svg",
    contents: "Next.jsとGraphQLを使ってページを作成しております。",
    link: "https://github.com/shuuheiigarashi/next-graphal",
  },
  {
    title: "Nest",
    imageUrl: "./nestjs-icon.svg",
    contents: "NestJSとGraphQLを使ってAPIを作成しております。",
    link: "https://github.com/shuuheiigarashi/nest-introduction",
  },
  {
    title: "Go",
    imageUrl: "./Go-Logo_Blue.png",
    contents: "GOを使ってAPIを作成しております。",
    link: "https://github.com/shuuheiigarashi/go-rest-api",
  },
];

export const Work: VFC = memo(() => {
  return (
    <Container textAlign="center">
      <Box as="h1" color="teal.300" fontSize="50px">
        Work
      </Box>
      <Flex flexWrap="wrap" justifyContent="center">
        <Wrap p={{ base: 4, md: 10 }}>
          {workItems.map(({ title, imageUrl, contents, link }) => (
            <WorkCard
              key={title}
              onClick={() => window.open(link, "_blank")}
              title={title}
              imageUrl={imageUrl}
              contents={contents}
            />
          ))}
        </Wrap>
      </Flex>
    </Container>
  );
});
