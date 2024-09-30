import { memo, VFC, useCallback } from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export const Header: VFC = memo(() => {
    const history = useHistory();
    const MotionBox = motion(Box)

    const onClickHome = useCallback(() => history.push("/"), [history]);
    const onClickAbout = useCallback(() => history.push("/about"), [history]);
    const onClickWork = useCallback(() => history.push("/work"), [history]);
    const onClickContact = useCallback(() => history.push("/contact"), [history]);
    return (
        <>
            <Flex
                as="nav"
                color="teal.300"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
                maxWidth="100%"
        >
                <Flex justify="center" flexGrow={2} size="md" fontSize="30px" maxWidth="100%">
                <Box pr={{ base: 4, md: 8 }}>
                <MotionBox whileHover={{scale: 1.2 }} cursor="pointer" onClick={onClickHome}> Home</MotionBox>
                </Box>
                <Box pr={{ base: 4, md: 8 }}>
                <MotionBox whileHover={{scale: 1.2 }} cursor="pointer" onClick={onClickAbout}>About</MotionBox>
                </Box>
                <Box pr={{ base: 4, md: 8 }}>
                <MotionBox whileHover={{scale: 1.2 }} cursor="pointer" onClick={onClickWork}>Work</MotionBox>
                </Box>
                <Box>
                <MotionBox whileHover={{scale: 1.2 }} cursor="pointer" onClick={onClickContact}>Contact</MotionBox>
                </Box>
                </Flex>
            </Flex>
        </>
    )
})