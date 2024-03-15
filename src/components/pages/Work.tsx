import { Box, Container, Flex, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { WorkCard } from "../organisms/work/WorkCard";

export const Work: VFC = memo(() => {
  const onNextClick = () => {
    window.open("https://github.com/shuuheiigarashi/next-graphal", "_blank");
  };
  const onNestClick = () => {
    window.open(
      "https://github.com/shuuheiigarashi/nest-introduction",
      "_blank"
    );
  };
  const onGoClick = () => {
    window.open("https://github.com/shuuheiigarashi/go-rest-api", "_blank");
  };
  return (
    <Container textAlign="center">
      <Box as="h1" color="teal.300" fontSize="50px">
        Work
      </Box>
      <Flex flexWrap="wrap" justifyContent="center">
        <Wrap p={{ base: 4, md: 10 }}>
          <WorkCard
            onClick={onNextClick}
            title="Next"
            imageUrl="./nextjs-icon.svg"
            contents="Next.jsとGraphQLを使ってページを作成しております。"
          />
          <WorkCard
            onClick={onNestClick}
            title="Nest"
            imageUrl="./nestjs-icon.svg"
            contents="NestJSとGraphQLを使ってAPIを作成しております。"
          />
          <WorkCard
            onClick={onGoClick}
            title="Go"
            imageUrl="./Go-Logo_Blue.png"
            contents="GOを使ってAPIを作成しております。"
          />
        </Wrap>
      </Flex>
    </Container>
  );
});
