import { memo, VFC, useCallback, useState } from "react";
import { Flex, Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

export const Header: VFC = memo(() => {
  const navigate = useNavigate();
  const MotionBox = motion(Box);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = useCallback((path: string) => () => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  return (
    <>
      <Flex as="nav" color="teal.300" align="center" justify="space-between" padding={{ base: 3, md: 5 }} maxWidth="100%">
        {/* デスクトップナビゲーション */}
        <Flex justify="center" flexGrow={2} fontSize="30px" maxWidth="100%" display={{ base: "none", md: "flex" }}>
          {navItems.map(({ label, path }) => (
            <Box key={label} pr={{ base: 4, md: 8 }}>
              <MotionBox whileHover={{ scale: 1.2 }} cursor="pointer" onClick={handleClick(path)}>
                {label}
              </MotionBox>
            </Box>
          ))}
        </Flex>

        {/* モバイルハンバーガーメニュー */}
        <IconButton
          aria-label="Open menu"
          icon={<FaBars />}
          variant="ghost"
          colorScheme="teal"
          size="lg"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      {/* モバイルドロワーメニュー */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="teal.300" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} mt={8}>
              {navItems.map(({ label, path }) => (
                <Box
                  key={label}
                  w="full"
                  p={4}
                  textAlign="center"
                  fontSize="xl"
                  color="teal.300"
                  cursor="pointer"
                  _hover={{ bg: "teal.50", borderRadius: "md" }}
                  onClick={handleClick(path)}
                >
                  {label}
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
