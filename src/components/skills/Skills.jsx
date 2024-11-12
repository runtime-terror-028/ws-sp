import style from "./Skills.module.scss";

const SKILL_ICONS = [
  {
    icon_link: "icons/skill_icons/javascript.svg",
    icon_title: "JavaScript"
  },
  // {
  //   icon_link: "icons/skill_icons/node-js.svg",
  //   icon_title: "NodeJS",
  // },
  {
    icon_link: "icons/skill_icons/html.svg",
    icon_title: "HTML",
  },
  {
    icon_link: "icons/skill_icons/css.svg",
    icon_title: "CSS",
  },
  {
    icon_link: "icons/skill_icons/sass.svg",
    icon_title: "SASS",
  },
  {
    icon_link: "icons/skill_icons/bootstrap.svg",
    icon_title: "Bootstrap",
  },
  {
    icon_link: "icons/skill_icons/react.svg",
    icon_title: "React",
  },
  {
    icon_link: "vite.svg",
    icon_title: "Vite",
  },
  {
    icon_link: "icons/skill_icons/python.svg",
    icon_title: "Python",
  },
  {
    icon_link: "icons/skill_icons/linux.svg",
    icon_title: "Linux",
  },
  {
    icon_link: "icons/skill_icons/debian.svg",
    icon_title: "Debian",
  },
  {
    icon_link: "icons/skill_icons/nginx.svg",
    icon_title: "Nginx",
  },
  {
    icon_link: "icons/skill_icons/mqtt.svg",
    icon_title: "MQTT",
  },
  {
    icon_link: "icons/skill_icons/emqx.svg",
    icon_title: "EMQX",
  },
  {
    icon_link: "icons/skill_icons/mysql.svg",
    icon_title: "MySQL",
  },
  // {
  //   icon_link: "icons/skill_icons/influxdb.svg",
  //   icon_title: "InfluxDB",
  // }
];

const SKILLS_HEADING = "Skills";
const SKILLS_CONTENT = "I specialize in creating dynamic websites and web services, utilizing modern technologies like React, Sass, and Bootstrap for front-end development. My skills extend to building robust web services with Express.js and deploying projects to the cloud. Additionally, I've worked with the MQTT protocol for IoT projects, and I'm proficient in writing deployment automation scripts and configuring reverse proxies to enhance performance and security.";

export default function Skills({ id }) {
  return (
    <div id={id} className={style.skills_container}>
      <div className={style.skills_card}>
        <div className={style.skills_text_container}>
          <div className={style.skills_text_heading}>{SKILLS_HEADING}</div>
          <div className={style.skills_text_content}>{SKILLS_CONTENT}</div>
        </div>
        <div className={style.skills_icons_container}>
          {SKILL_ICONS.map((element) => (
            <div key={element.icon_title} className={style.skills_icon}>
              <img src={element.icon_link} alt={element.icon_title} className={style.icon_logo} />
              <div className={style.icon_title}>{element.icon_title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
