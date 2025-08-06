import { ReactNode } from "react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const MotionBox = motion(Box);

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <MotionBox
          key={window.location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {children}
        </MotionBox>
      </AnimatePresence>
    </>
  );
});
