import { ReactNode } from "react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
type Props = {
    children: ReactNode;
}

const MotionBox = motion(Box)

export const HeaderLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
    <MotionBox
          animate={{
      x: 0,
      opacity: 1
    }}
    initial={{
      x: 100,
      opacity: 0
    }}
    exit={{
      x: -100,
      opacity: 0
    }}
    transition={{
      duration: 0.2
                }}>
            {children}                
    </MotionBox>
        </>
    )
})