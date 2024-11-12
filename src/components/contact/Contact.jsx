import React from "react";
import style from "./Contact.module.scss";

const CONTACT_ICONS = [
  { name: "GitHub", icon_path: "icons/contact_icons/github.svg", data: "https://github.com/runtime-terror-028", is_url: true },
  { name: "Linkedin", icon_path: "icons/contact_icons/linkedin.svg", data: "https://linkedin.com/in/yourusername", is_url: true },
  { name: "Email", icon_path: "icons/contact_icons/gmail.svg", data: "your.email@example.com", is_url: false },
  { name: "Whatsapp", icon_path: "icons/contact_icons/whats-app.svg", data: "https://wa.me/yourphonenumber", is_url: true },
  { name: "Telegram", icon_path: "icons/contact_icons/telegram.svg", data: "@yourusername", is_url: false },
  { name: "Discord", icon_path: "icons/contact_icons/discord.svg", data: "@yourusername", is_url: false },
];

export default function Contact({ id }) {
  const handleIconClick = (data, isUrl) => {
    if (isUrl) {
      window.open(data, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard.writeText(data).then(() => {
        alert(`${data} copied to clipboard`);
      });
    }
  };

  return (
    <div id={id} className={style.contact_container}>
      <div className={style.contact_card}>
        <div className={style.contact_image_container}>
          <img src="/images/contact.jpg" alt="pengu" />
        </div>
        <div className={style.contact_text_container}>
          <div className={style.contact_text_heading}>Find me on</div>
          <div className={style.contact_icons_container}>
            {CONTACT_ICONS.map((element) => (
              <div
                key={element.name}
                className={style.contact_icon}
                onClick={() => handleIconClick(element.data, element.is_url)}
              >
                <img src={element.icon_path} alt={element.name} className={style.icon_logo} />
                <div className={style.icon_title}>{element.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
