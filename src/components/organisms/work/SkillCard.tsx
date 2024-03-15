import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  contents: string;
};

export const SkillCard: VFC<Props> = memo((props) => {
  const { title, contents } = props;
  return (
    <Box
      w="200px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      mx="auto"
      p={4}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          m="auto"
          src="https://source.unsplash.com/random"
        />
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray">
          {contents}
        </Text>
      </Stack>
    </Box>
  );
});
