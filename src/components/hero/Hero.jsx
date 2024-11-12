import { useEffect } from "react";
import style from "./Hero.module.scss";
import profilePic from "../../assets/profile_pic.png";
import Typewriter from "typewriter-effect/dist/core";

export default function HeroProfile({ id }) {

  useEffect(() => {
    const typewriter_target = document.getElementById("typewriter_profession");

    const typewriter = new Typewriter(typewriter_target, {
      loop: true,
      delay: 75
    });

    typewriter
      .pauseFor(2500)
      .typeString("I make Dynamic websites")
      .pauseFor(3000)
      .deleteChars(16)
      .typeString("Automation scripts")
      .pauseFor(3000)
      .deleteChars(23)
      .typeString("do Cloud Web hosting")
      .pauseFor(3000)
      .start();

    return () => {
      typewriter.stop(); // Cleanup on component unmount to prevent memory leaks
    };
  }, []);

  return (
    <div id={id} className={style.hero_container}>
      <div className={style.hero_card}>
        <div className={style.hero_image_container}>
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className={style.hero_text_container}>
          <div className={style.hero_text_name} id="my_name">
            Hello! I'm<br/><span>Sambhav Pattanaik</span>
          </div>
          <div className={style.hero_text_profession}>
            <p id="typewriter_profession"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
