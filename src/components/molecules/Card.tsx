import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type CardProps = {
  imageUrl?: string;
  title: string;
  contents: string;
  onClick?: () => void;
};

export const Card: VFC<CardProps> = memo(({ imageUrl, title, contents, onClick }) => {
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
        <Image
          boxSize="160px"
          m="auto"
          src={imageUrl || "https://via.placeholder.com/160"}
          alt={title}
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
