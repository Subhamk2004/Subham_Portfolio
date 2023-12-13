import React from "react";
import $ from "jquery"; //******* */
import reactLogo from "./background.jpg";

import reactLogo2 from "./about2.jpg";
import reactLogo3 from "./c++.png";
import reactLogo4 from "./python.png";
import reactLogo5 from "./webd.png";
import reactLogo6 from "./react.png";
import reactLogo7 from "./bootstrap.png";
import reactLogo8 from "./cert1.png";
import reactLogo9 from "./cert2.png";
import reactLogo10 from "./in.png";
import reactLogo11 from "./insta.png";
import reactLogo12 from "./gmail.png";
import reactLogo13 from "./hack.png";
export default function Landingpage() {
  return (
    <>
      <div class="front container-fluid ">
        <div id="home_front1" className="landing_page ">
          <img className="imgok img-fluid" src={reactLogo} alt="react logo" />
          <h1 className="head text-center">Hey there !</h1>
          <div className="head2 container-fluid">
            <h2 className="sechead text-center">I am Subham Kumar</h2>
            <h2 id="appear" className="sechead">
              A Front-end Developer
            </h2>
          </div>
          <div className="picdata container-fluid ">
            <div className=" para">
              <p className=" frontp text-center container">
                Frontend development is my creative playground, where I merge
                design and technology to build captivating user experiences.
                Through code, I bring ideas to life, crafting intuitive
                interfaces that captivate and inspire. Each line of code is a
                brushstroke, and every project is a chance to shape the digital
                world with innovation and ingenuity.
              </p>
            </div>
          </div>
        </div>
        <div id="about_me" className="about container-fluid text-center">
          <hr className="abouthr"></hr>
          <h2 id="abouth2" className="text-center">
            About Me
          </h2>
          <img
            className="imgabout img-fluid"
            src={reactLogo2}
            alt="react logo"
          />
          <p className="aboutpara text-center container">
            Hello! I'm currently pursuing my BE in <em>Computer Engineering</em>{" "}
            from AIT Pune. I'm a frontend web developer with expertise in{" "}
            <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>,
            <code>Bootstrap</code>, and <code>React</code>. Additionally, I
            excel in competitive programming, holding a 6-star rating in
            algorithms and problem-solving on HackerRank. My passion lies in
            creating captivating user interfaces and tackling complex coding
            challenges, blending creativity with logical problem-solving to
            bring digital ideas to life.
          </p>
        </div>
        <div id="skill" className="skills container-fluid">
          <hr></hr>
          <h2 className="skillh2 text-center">Skills</h2>
          <div className="skillcont my-5">
            <div id="box1" className="skillbox  container">
              <img
                id="clogo"
                className="logo img-fluid"
                src={reactLogo3}
                alt="react logo"
              />
            </div>
            <div id="box2" className="skillbox  container-fluid">
              <img
                id="pylogo"
                className="logo img-fluid"
                src={reactLogo4}
                alt="react logo"
              />
            </div>
            <div id="box3" className="skillbox  container-fluid">
              <img
                id="hlogo"
                className="logo1 img-fluid"
                src={reactLogo5}
                alt="react logo"
              />
            </div>
            <div id="box4" className="skillbox container-fluid">
              <img
                className="logo2 img-fluid"
                src={reactLogo6}
                alt="react logo"
              />
              <img
                className="logo2 img-fluid"
                src={reactLogo7}
                alt="react logo"
              />
            </div>
          </div>
          <hr></hr>
          <h2 className="skillh2 text-center">Certifications</h2>
          <div className="cercont  container-fluid">
            <div className="certbox ">
              <a href="https://www.freecodecamp.org/certification/fcc9440cd3c-b6f3-477d-899b-086a57f73d49/responsive-web-design">
                <img
                  className="certimg img-fluid"
                  src={reactLogo8}
                  alt="react logo"
                />
              </a>
            </div>
            <div className="certbox ">
              <a href="https://www.freecodecamp.org/certification/fcc9440cd3c-b6f3-477d-899b-086a57f73d49/javascript-algorithms-and-data-structures">
                <img
                  className="certimg img-fluid"
                  src={reactLogo9}
                  alt="react logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <hr></hr>
          <h2 className="skillh2 text-center">Contact</h2>
          <p className="contactpara text-center">
            <code>You can contact me on below socials :)</code>
          </p>
          <div className="socont container-fluid">
          <a href = "https://www.linkedin.com/in/subham-kumar-73b98b252/" target = "_blank">
            <div className="socials">
              <p>LinkedIn</p>
              <img
                className=" imgsocial  img-fluid"
                src={reactLogo10}
                alt="react logo"
              />
            </div>
            </a>
            <a href="https://www.instagram.com/subhamkumar1932/" target = "_blank">
              <div className="socials">
                <p>Instagram</p>
                <img
                  className="  imgsocial img-fluid"
                  src={reactLogo11}
                  alt="react logo"
                />
              </div>
            </a>

            <a href="subhamk1978@gmail.com">
              <div className="socials">
                <p>subhamk1978@gmail.com</p>
                <img
                  id="gm"
                  className=" imgsocial  img-fluid"
                  src={reactLogo12}
                  alt="react logo"
                />
              </div>
            </a>

            <a href="https://www.hackerrank.com/profile/subhamk1978" target = "_blank">
              <div className="socials">
                <p>@subhamk1978</p>
                <img
                  className=" imgsocial  img-fluid"
                  src={reactLogo13}
                  alt="react logo"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
$(document).ready(function () {
  $("#appear").hide(0);
  $(".frontp").hide(150);
  $("h1").hover(function () {
    $("#appear").fadeIn(650);
    $("#appear").animate({
      fontSize: "34px",
    });
  });
  $(".frontp").slideDown(1000);
  $(".frontp").animate({
    fontSize: "25px",
  });
  $(".skillbox").hide(0);
  $(".logo").hide(0);
  $(".logo1").hide(0);
  $("#skill").mouseenter(function () {
    $("#box1").slideDown(500);
    $("#box2").slideDown(500);
    $("#box3").slideDown(500);
    $("#box4").slideDown(500);
    $("#clogo").fadeIn(2000);
    $("#pylogo").fadeIn(2000);
    $("#hlogo").fadeIn(2000);
    $("#blogo").fadeIn(2000);
  });
  /*$("#skill").mouseleave(function(){
    $(".skillcont").slideUp(200);
  });*/
  $("#box1").mouseenter(function () {
    $("#clogo").animate({
      height: "90%",
    });
  });
  $("#box1").mouseleave(function () {
    $("#clogo").animate({
      height: "70%",
    });
  });
  $("#box2").mouseenter(function () {
    $("#pylogo").animate({
      height: "90%",
    });
  });
  $("#box2").mouseleave(function () {
    $("#pylogo").animate({
      height: "70%",
    });
  });
  $("#box3").mouseenter(function () {
    $("#hlogo").animate({
      width: "100%",
    });
  });
  $("#box3").mouseleave(function () {
    $("#hlogo").animate({
      width: "85%",
    });
  });
  $("#box4").mouseenter(function () {
    $(".logo2").animate({
      height: "77%",
    });
  });
  $("#box4").mouseleave(function () {
    $(".logo2").animate({
      height: "58%",
    });
  });
});
