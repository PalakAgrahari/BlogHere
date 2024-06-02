import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to BlogHere, your ultimate platform for sharing insights,
          stories, and expertise with a global audience. At ZetaBlog, we believe
          in the power of words and the impact they can have on the world.
          Whether you're a seasoned writer, an enthusiastic hobbyist, or just
          someone with a story to tell, BlogHere is the perfect place for you to
          publish your thoughts and connect with readers from all corners of the
          globe.
        </p>
        <p>
          Our mission is to provide a dynamic and user-friendly blogging
          platform that empowers individuals to express themselves freely and
          creatively. We aim to foster a vibrant community of writers and
          readers who inspire, inform, and engage with each other through
          diverse and meaningful content.
        </p>
        <h2>Join Our Community</h2>
        <p>
          At BlogHere, we are more than just a blogging platform—we are a
          community of passionate individuals who believe in the power of
          sharing knowledge and experiences. Whether you're here to write, read,
          or both, we welcome you to join our diverse and inclusive community.
          Start your blogging journey with BlogHere today and let your voice be
          heard. Together, we can create a space where ideas flourish, stories
          come to life, and connections are made. Happy Blogging! The ZetaBlog
          Team
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint
          ratione odit saepe aperiam, amet doloribus quisquam. Quisquam, dolorum
          doloremque!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, rem
          ratione quasi sequi hic dolorem quia, quos quod aliquid laudantium
          dolore in eveniet, natus illum eius ad quo inventore ipsum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa
          provident quam quisquam velit corporis sint mollitia? Perspiciatis
          corrupti nostrum, at ex voluptatum optio voluptatem labore animi minus
          nesciunt expedita cupiditate, consequuntur cumque et, sequi incidunt
          nulla beatae modi porro sapiente unde dolores? At maiores laudantium
          consequatur quaerat, placeat facilis delectus ipsa incidunt. Eum
          voluptatem totam voluptates cumque cum ut modi porro, repellendus
          ratione eveniet earum! Dicta ut magni harum distinctio assumenda aut,
          eaque doloremque sed facere esse dignissimos doloribus nulla error
          quibusdam quo! Cum pariatur, quisquam temporibus repellat sint vitae
          autem ad quo! Animi laborum distinctio placeat illum ipsam!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          ullam vitae repudiandae soluta voluptate a odit voluptas dolore nam
          quasi optio consequatur itaque, mollitia labore sit. Eligendi,
          doloribus debitis, saepe aspernatur quasi ipsum obcaecati ipsa commodi
          ea labore ab dolor dolorum voluptatibus adipisci! At nobis minus
          voluptas fugiat rerum laboriosam.
        </p> */}
      </div>
    </article>
  );
};

export default About;
