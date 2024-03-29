import React from "react";
import { motion } from "framer-motion";
// import Founder from "./Founder";
import Menu from "./Menu";
import Items from "../items/Items.jsx";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Items />
      <section className="home">
        <div>
          <motion.h1 {...options}>
            Hello <motion.span>Bhubaneswar</motion.span>
          </motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.2,
            }}
          >
            Give yourself a tasty & healthy cuisine .
          </motion.p>
        </div>

        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Menu
        </motion.a>
      </section>

      <Menu />
    </>
  );
};

export default Home;
