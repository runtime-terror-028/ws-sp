import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./TileBackground.css";
import Nav from '../nav/navBar';
import HeroProfile from '../hero/Hero';


export default function TileBackground() {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [toggled, setToggled] = useState(false);
  
    const toggle = () => {
      setToggled((prevToggled) => !prevToggled);
      document.body.classList.toggle("toggled");
    };
  
    const handleOnClick = (index) => {
      toggle();
      anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
          grid: [columns, rows],
          from: index,
        }),
      });
    };
  
    const createTiles = () => {
      const tileCount = columns * rows;
      return Array.from({ length: tileCount }, (_, index) => (
        <div
          key={index}
          className="tile"
          style={{ opacity: toggled ? 0 : 1 }}
          onClick={() => handleOnClick(index)}
        ></div>
      ));
    };
  
    const createGrid = () => {
      const size = window.innerWidth > 800 ? 60 : 30;
      setColumns(Math.floor(window.innerWidth / size));
      setRows(Math.floor(window.innerHeight / size));
    };
  
    useEffect(() => {
      createGrid();
      window.addEventListener("resize", createGrid);
      return () => window.removeEventListener("resize", createGrid);
    }, []);
  
    return (
        <div>
          <div id="background"></div>
          <div id="tiles" style={{ "--columns": columns, "--rows": rows }}>
            {createTiles()}
          </div>
      
          {/* <h1 id="title" className="centered">
            The name of the game is <span className="fancy">Chess</span>.
          </h1> */}
        </div>
      );
      
  }