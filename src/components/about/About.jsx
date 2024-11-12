import style from './About.module.scss';

const ABOUT_HEADING = "About me";
const ABOUT_CONTENT = [
  "Hi, I am Sambhav Pattanaik. I'm passionate about computers and marvel at how we have evolved from simple 0s and 1s to advanced artificial intelligence and sophisticated technologies that profoundly shape our daily lives today. I love experimenting and tinkering with various technologies, exploring how they work, and finding creative ways to integrate them. It's amazing how a little curiosity and a hands-on approach can lead to breakthroughs and deeper understanding!",
  "Recently, I worked as a web development intern where I learned a lot about clean coding practices from my Project Manager/Mentor. This experience made me see coding as an art more than a job.",
  "Currently, I am looking for a job to fund my higher education. In parallel, I am learning Android development and scripting. If you'd like to collaborate or discuss opportunities, feel free to leave a message on my socials."
];


export default function About({ id }) {
  return (
    <div id={id} className={style.about_container}>
      <div className={style.about_card}>
        <div className={style.about_image_container}>
          <img src="/images/about.jpg" alt="about image" />
        </div>
        <div className={style.about_text_container}>
          <div className={style.about_text_container_heading}>
            {ABOUT_HEADING}
          </div>
          <div className={style.about_text_container_content}>
            {ABOUT_CONTENT.map((element) => (
              <div key={element} className={style.about_text_container_content_text}>{element}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
