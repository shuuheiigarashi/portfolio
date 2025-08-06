import { memo, VFC, useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop: VFC = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            position="fixed"
            bottom="20px"
            right="20px"
            zIndex={1000}
          >
            <IconButton
              aria-label="Scroll to top"
              icon={<FaArrowUp />}
              colorScheme="teal"
              size="lg"
              borderRadius="full"
              onClick={scrollToTop}
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              transition="all 0.3s"
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}); 