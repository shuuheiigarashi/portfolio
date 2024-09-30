import { memo, VFC, useCallback } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

export const Header: VFC = memo(() => {
  const history = useHistory();
  const MotionBox = motion(Box);

  const handleClick = useCallback((path: string) => () => history.push(path), [history]);

  return (
    <Flex as="nav" color="teal.300" align="center" justify="space-between" padding={{ base: 3, md: 5 }} maxWidth="100%">
      <Flex justify="center" flexGrow={2} size="md" fontSize="30px" maxWidth="100%">
        {navItems.map(({ label, path }) => (
          <Box key={label} pr={{ base: 4, md: 8 }}>
            <MotionBox whileHover={{ scale: 1.2 }} cursor="pointer" onClick={handleClick(path)}>
              {label}
            </MotionBox>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
});
