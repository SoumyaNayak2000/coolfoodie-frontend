import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";
const Founder = () => {
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
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Soumya Ranjan Nayak</h3>

        <p>
          Hey, Everyone I am Soumya Ranjan Nayak, the founder of Cool Foodie.
          <br />
          Our aim is to server the most tasty cool cuisine ever.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
