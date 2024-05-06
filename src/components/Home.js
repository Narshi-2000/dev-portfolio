import React from "react";
import "../css/home.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import cloudfront from "../images/cloudfront.jpg";
import cloudwatch from "../images/cloudwatch.png";
import dynamo from "../images/dynamo.webp";
import ec2 from "../images/ec2.jpg";
import ebs from "../images/ebs.webp";
import lambda from "../images/lambda.png";
import s3 from "../images/aws.png";
import sns from "../images/aws.png";
import api from "../images/api.svg";
import css from "../images/css.png";
import html from "../images/html.png";
import java from "../images/java.svg";
import js from "../images/js.svg";
import node from "../images/node.png";
import npm from "../images/npm.png";
import react from "../images/react.png";
import sql from "../images/sql.svg";
import resume from '../Narshi_resume.pdf';

export default function Home(props) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className="firstSection">
        <div className="leftSection">
          Hi, My name is
          <div id="name">Narshi</div>
          <div id="intoduction">
            Welcome to my portfolio website! I'm excited to share with you a
            glimpse of my work and experiences. As a software developer, I've
            had the opportunity to explore various projects that highlight my
            skills and passion. Whether it's frontend development, backend
            development, or cloud computing, I believe in pushing boundaries and
            creating meaningful solutions. Feel free to explore the different
            sections to view my projects, and get in touch with me.
          </div>
          <a href={resume} download="resume" target='_blank' rel="noreferrer">
            <button  className="btn btn-custom">Download CV</button>
          </a>
          <button className="btn btn-custom">
            <a href="https://github.com/Narshi-2000">GitHub</a>
          </button>
        </div>
        <div className="rightSection">
          <div className="orbit">
            <ul className="orbit-wrap">
              <li className="orbit-center">
                <i className="orbit-center__icon fa fa-code"></i>
              </li>

              <li>
                <ul className="ring-0">
                  <li>
                    <img src={s3} alt="" />
                  </li>
                  <li>
                    <img src={cloudfront} alt="" />
                  </li>
                  <li>
                    <img src={cloudwatch} alt="" />
                  </li>
                  <li>
                    <img src={dynamo} alt="" />
                  </li>
                </ul>
              </li>

              <li>
                <ul className="ring-1">
                  <li>
                    <img src={ec2} alt="" />
                  </li>
                  <li>
                    <img src={ebs} alt="" />
                  </li>
                  <li>
                    <img src={lambda} alt="" />
                  </li>
                </ul>
              </li>
              <li>
                <ul className="ring-2">
                  <li>
                    <img src={java} alt="" />
                  </li>
                  <li>
                    <img src={node} alt="" />
                  </li>
                  <li>
                    <img src={npm} alt="" />
                  </li>
                  <li>
                    <img src={api} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={sql} alt="" />
                  </li>
                  <li>
                    <img src={sns} alt="" />
                  </li>
                  <li></li>
                </ul>
              </li>
              <li>
                <ul className="ring-3">
                  <li>
                    <img src={html} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={js} alt="" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Projects />

      <Skills />

      <Contact showAlert={props.showAlert} />

      <Footer />
    </div>
  );
}
