import React, { useRef } from "react";
import * as THREE from "three";
// import Navbar from './navbar';
import { OrbitControls, Sphere, SpotLight, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faInstagram,  faTelegram,  faGithub,  faLinkedin,  faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import img from './res.jpeg';

const HideHandleSwipes = () => {
  let info = document.getElementById("info");
  info.style.transition = ".6s all ease-in-out";
  info.style.transform = " translateX(0%)";
  info.style.opacity = 0;
  let butn = document.getElementById("left");
  butn.style.transition = ".4s ease";
  butn.style.opacity = 1;
  let skil = document.getElementById("Skills");
  skil.style.transition = "1s linear";
  skil.style.transform = "translateX(0)";
  skil.style.zIndex = "1000";
  skil.style.opacity = 1;
  let right = document.getElementById("right");
  right.style.opacity = 0;
  right.style.marginTop = '35%';
  let contactR = document.getElementById("contactRight");
  contactR.style.transform = "translateX(0)";
  contactR.style.opacity='1';
  contactR.style.marginTop = '25%';
  let main = document.getElementById("contact");
  main.style.transition = ".6s all ease";
  main.style.transform = "translateX(0%)";
  main.style.marginLeft= '-90%';
};
const VisibleSwipes = () => {
  let info = document.getElementById("info");
  info.style.transition = ".6s all ease-in-out";
  info.style.transform = "translate(0%, 0%)";
  info.style.opacity = 1;
  info.style.zIndex= '100';
  let main = document.getElementById("contact");
  main.style.transition = ".6s all ease";
  main.style.transform = "translateX(0%)";
  main.style.marginLeft= '-90%';
  let butn = document.getElementById("left");
  butn.style.transition = ".4s ease";
  butn.style.opacity = 0;
  let right = document.getElementById("right");
  right.style.transition = ".4s all ease";
  right.style.opacity = 1;
  let skil = document.getElementById("Skills");
  skil.style.transition = "1s linear";
  skil.style.transform = "translateX(-250%)";
  skil.style.opacity = 0;
  let cont = document.getElementById("right");
  cont.style.opacity = 1;
  cont.style.marginTop = '35%';
  let contactR = document.getElementById("contactRight");
  contactR.style.transform = "translateX(0%)";
  contactR.style.opacity= 1;
  contactR.style.marginTop = '15%';
};

const ContactClick = () => {
  let main = document.getElementById("contact");
  main.style.transition = ".6s all ease";
  main.style.transform = "translateX(0)";
  main.style.opacity = 1;
  main.style.marginLeft = '2%';
  let skil = document.getElementById("Skills");
  skil.style.transition = "1s linear";
  skil.style.transform = "translateX(-250%)";
  skil.style.opacity = 0;
  let info = document.getElementById("info");
  info.style.transition = ".9s linear";
  info.style.transform = "translate(0%, 0%)";
  info.style.opacity = 0;
  let butn = document.getElementById("left");
  butn.style.transition = ".4s ease";
  butn.style.opacity = 1;
  let right = document.getElementById("right");
  right.style.transition = ".4s all ease";
  right.style.opacity = 1;
  right.style.marginTop = '25%';
  let contactR = document.getElementById("contactRight");
  contactR.style.transform = "translateX(0%)";
  contactR.style.opacity = 0;
  contactR.style.marginTop = '15%';
};


function Balls(props) {
  const ref = useRef();
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(80));
  return (
    <mesh {...props} ref={ref}>
      <Sphere visible args={[1.1, 64, 64]} position={[x, y, z]}>
        <meshStandardMaterial
          color={Math.random() * 0xffffff}
          roughness={0.3}
        />
      </Sphere>
    </mesh>
  );
}

export default function about() {
  return (
    <div className="mainContainer">
      <div className="containerInfo" id="info">
        <img
          src={img}
          alt="My logo"
          className="image"
        />
        <h1>
          About <span className="span">Me</span>
        </h1>
        <h5>
          I am Sumit Kumar, a motivated and responsible student pursuing a
          Bachelor of Engineering degree. I possess excellent collaboration,
          organizational, and time management skills. My goal is to develop my
          career and gain practical experience. As a dedicated intern in
          Computer Science, I actively seek opportunities to enhance my skills.
          I have analyzed and provided solutions at Analysed.in and worked as a
          Web-Dev Intern at Pie Infocomm, specializing in Gym Management and
          Electricity Billing System projects. Additionally, I volunteer at
          Little Paws Care. My interests encompass music, coding,
          reading, traveling, and writing.
        </h5>
        <br />
        <br />
        <div className="social">
          <a className="socialA" href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a> 
          &nbsp;&nbsp;
          <a className="socialA" href="/">
            <FontAwesomeIcon icon={faTelegram} />
          </a> 
          &nbsp;&nbsp;
          <a className="socialA" href="https://github.com/07sumit1002">
            <FontAwesomeIcon icon={faGithub} />
          </a> 
          &nbsp;&nbsp;
          <a className="socialA" href="https://wa.me/qr/PHUPXKVV6FMZH1">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a> 
          &nbsp;&nbsp;
          <a className="socialA" href="https://www.linkedin.com/in/er-sumit-kr/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a> 
          &nbsp;&nbsp;
        </div>
      </div>
      <div className="ContainerInfo" id="Skills">
        <ul className="Skilllist">
          <h1 className="skillh1">
            SKI<span className="skillspan">LLS</span>
          </h1>
          <br />
          <li className="skillLi">
            HTML&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Expert</h6>
          </li>
          <li className="skillLi">
            CSS&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Experienced</h6>
          </li>
          <li className="skillLi">
            JS&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Intermediate</h6>
          </li>
          <li className="skillLi">
            REACT&nbsp;| <span className="Lispan"></span>
            <h6 className="Lih6">Beginner</h6>
          </li>
          <li className="skillLi">
            PHP&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Experienced</h6>
          </li>
          <li className="skillLi">
            C++&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Expert</h6>
          </li>
          <li className="skillLi">
            C&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Expert</h6>
          </li>
          <li className="skillLi">
            PYTHON&nbsp;|<span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Intermediate</h6>
          </li>
          <li className="skillLi">
            JAVA&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Moderate</h6>
          </li>
        </ul>
        <ul className="Skilllist">
          <h1 className="skillh1">
            Lang<span className="skillspan">uages</span>
          </h1>
          <br />
          <li className="skillLi">
            English&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Professional</h6>
          </li><br />
          <li className="skillLi">
            Hindi&nbsp;| <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <span className="Lispan"></span>
            <h6 className="Lih6">Native Speaker</h6>
          </li><br /><br />
          <br />
          <br />
          <br />
          <br />
        </ul>
      </div>
      <div className="containerInfo" id="contact">
        <h1 className="contactH1">Contact <span className="contactSpan">Me</span></h1>
        <div className="Contactsocial">
          <a className="ContactsocialA insta" href="/">
            <FontAwesomeIcon icon={faInstagram} /><h6 className="contactH6">Instagram</h6>
          </a>
          &nbsp;&nbsp;
          <a className="ContactsocialA tele" href="/">
            <FontAwesomeIcon icon={faTelegram} /><h6 className="contactH6">Telegram</h6>
          </a> 
          &nbsp;&nbsp;
          <a className="ContactsocialA git" href="https://github.com/07sumit1002">
            <FontAwesomeIcon icon={faGithub} /><h6 className="contactH6">Github</h6>
          </a> 
          &nbsp;&nbsp;
          <a className="ContactsocialA whats" href="https://wa.me/qr/PHUPXKVV6FMZH1">
            <FontAwesomeIcon icon={faWhatsapp} /><h6 className="contactH6">Whatsapp</h6>
          </a> 
          &nbsp;&nbsp;
          <a className="ContactsocialA link" href="https://www.linkedin.com/in/er-sumit-kr/">
            <FontAwesomeIcon icon={faLinkedin} /><h6 className="contactH6">Linkedin</h6>
          </a> 
          &nbsp;&nbsp;
        </div>
      </div>

      <span title="Skills" id="right" onClick={HideHandleSwipes}>
      {/* <p className="btnp">2</p> */}
      <FontAwesomeIcon icon={faCircleArrowRight} />
      </span>
      <span title="Contacts" className="rightBtn contactBtn" id="contactRight" onClick={ContactClick}>
      {/* <p className="btnp">1</p> */}
      <FontAwesomeIcon icon={faCircleArrowRight} />
      </span>

      <span title="About" id="left" onClick={VisibleSwipes}>
      {/* <p className="btnp">4</p> */}
      <FontAwesomeIcon icon={faCircleArrowLeft} />
      </span>

      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight intensity={0.6} position={[30, 0, 0]} />
        <SpotLight intensity={1} position={[30, 0, 0]} />
        <Stars />
        <OrbitControls enableZoom={false} />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
        <Balls /> <Balls /> <Balls /> <Balls />
      </Canvas>
    </div>
  );
}
