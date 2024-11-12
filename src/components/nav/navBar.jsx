import style from "./navBar.module.scss";

const NAV_ITEM = ["Home", "Skills", "About", "Contact"];

export default function navBar() {
  const scrollToSectionOnClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={style.navBar}>
        <div className={style.navBar_items_container}>
          {NAV_ITEM.map((item) => (
            <div
              onClick={() => scrollToSectionOnClick(item.toLowerCase())}
              className={style.navBar_item}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
