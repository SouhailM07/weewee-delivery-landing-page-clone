import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 180) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="scroll to top button"
          onClick={scrollToTop}
          className="fixed bottom-[2rem] flexCenter text-[0.8rem] bg-mainBlue text-white h-[2.2rem] aspect-square rounded-md right-[2rem]"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
