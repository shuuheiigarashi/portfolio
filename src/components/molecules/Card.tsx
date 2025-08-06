import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type CardProps = {
  imageUrl?: string;
  title: string;
  contents: string;
  onClick?: () => void;
};

export const Card: VFC<CardProps> = memo(({ imageUrl, title, contents, onClick }) => {
  const isComingSoon = contents.includes("開発予定") || contents.includes("Coming Soon");
  
  return (
    <Box
      w={{ base: "180px", sm: "200px" }}
      h={{ base: "240px", sm: "260px" }}
      bg="white"
      borderRadius="10px"
      shadow="md"
      mx="auto"
      p={{ base: 3, sm: 4 }}
      onClick={onClick}
      opacity={isComingSoon ? 0.7 : 1}
      cursor={isComingSoon ? "default" : "pointer"}
      _hover={isComingSoon ? {} : { shadow: "lg", transform: "translateY(-2px)" }}
      transition="all 0.3s"
    >
      <Stack textAlign="center" spacing={{ base: 2, sm: 3 }}>
        <Image
          boxSize={{ base: "140px", sm: "160px" }}
          m="auto"
          src={imageUrl || "https://placehold.co/160x160/teal.300/ffffff?text=Tech"}
          alt={title}
        />
        <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="bold" color={isComingSoon ? "gray.500" : "inherit"}>
          {title}
        </Text>
        <Text fontSize={{ base: "xs", sm: "sm" }} color={isComingSoon ? "gray.400" : "gray"}>
          {contents}
        </Text>
      </Stack>
    </Box>
  );
});
