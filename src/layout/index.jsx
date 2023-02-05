import React, { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import {
  useDragControls,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./Header";

const Layout = ({ children, page }) => {
  const ref = useRef();
  const dragControls = useDragControls();
  const { scrollYProgress } = useScroll();
  // function startDrag(event) {
  //   dragControls.start(event);
  // }

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <motion.main>
      <Header className={page === "services" ? "mx-auto" : ""} />
      <Sidebar variant={page} className />
      {/* <div className="absolute w-full h-full" ref={ref}></div> */}
      <motion.div
        dragConstraints={ref}
        dragElastic={0}
        // drag="y"
        className="transition-all duration-75 ease-linear"
        style={{
          transform: dragControls,
        }}
        variants={variants}
        initial="hiddden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.main>
  );
};

export default Layout;
