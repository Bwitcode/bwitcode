import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDragControls, motion, useScroll } from "framer-motion";
import Header from "./Header";

const Layout = ({ children, page }) => {
  const dragControls = useDragControls();
  const { scrollYProgress } = useScroll();
  function startDrag(event) {
    dragControls.start(event);
  }
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <motion.main onPointerDown={startDrag}>
      <Header className={page === "services" ? "mx-auto" : ""} />
      <Sidebar variant={page} />
      <div className="relative z-0 w-full h-full">
        <motion.div
          dragConstraints={{ top: -3300, bottom: 0 }}
          dragControls={dragControls}
          dragMomentum={false}
          dragElastic={0}
          // drag="y"
          className=" transition-all ease-linear duration-75"
          style={{
            transform: dragControls,
            translateY: scrollYProgress,
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Layout;
