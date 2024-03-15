import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  title: string;
  contents: string;
  onClick: () => void;
};

export const WorkCard: VFC<Props> = memo((props) => {
  const { imageUrl, title, contents, onClick } = props;
  return (
    <Box
      w="200px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      mx="auto"
      p={4}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image boxSize="160px" m="auto" src={imageUrl} />
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
