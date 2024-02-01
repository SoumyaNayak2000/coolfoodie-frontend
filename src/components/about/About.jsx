import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Cool Foodie</h4>
          <p>
            Welcome to CoolFoodie, where passion meets palate! As the proud
            owner, I embarked on a culinary journey with a simple yet ambitious
            goal - to redefine your dining experience. At CoolFoodie, Whether
            you're craving comfort classics or seeking bold, cutting-edge
            dishes, CoolFoodie is your go-to destination.
          </p>

          <p>
            Join us as we embark on a flavorful adventure, where every bite is a
            celebration of creativity and culinary excellence. Welcome to a
            world where food is not just a necessity but a delightful experience
            - welcome to CoolFoodie!
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
    </section>
  );
};

export default About;
