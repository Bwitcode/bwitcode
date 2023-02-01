import React from "react";

const test1 = () => {
  return (
    <div>
      {" "}
      <div className="relative w-1/12">
        <motion.div
          layout
          className="absolute inset-0 bg-red-400"
          initial={{ scaleX: 1, transformOrigin: "left" }}
        ></motion.div>
      </div>
      <a
        className="relative w-1/12"
        // onClick={() => {
        //   setRightSlide(!rightSlide);
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 3200);
        // }}
      >
        <motion.div
          layout
          className="absolute inset-0 bg-orange-400"
          initial={{ scaleX: 1, transformOrigin: "left" }}
          animation={{
            scaleX: [1, 10, 0],
            translateX: "100",
          }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        ></motion.div>
      </a>
      <div className="relative w-1/12">
        <motion.div
          layout
          className="absolute inset-0 bg-indigo-400"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileTap={{ scaleX: [0, 10, 10], translateX: [0, 0, 1100] }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default test1;
