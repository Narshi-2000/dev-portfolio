import React from "react";
import "../css/projects.css";
import project1 from "../images/image1.png";
import project2 from "../images/image3.png";
import project3 from "../images/notebook.png";
import project4 from "../images/news.png";
import project5 from "../images/textutil.png";
import project6 from "../images/weather_img.png";
import project7 from "../images/costanalysis.png";
import project8 from "../images/dockerscreen.png";
import project9 from "../images/rdsscreen.png";
import api from "../images/api.svg";
import bootstrap from "../images/bootstrap.svg";
import css from "../images/css.png";
import express from "../images/express.png";
import html from "../images/html.png";
import js from "../images/js.svg";
import jwt from "../images/jwt.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import npm from "../images/npm.png";
import react from "../images/react.png";
import ec2 from "../images/ec2.jpg";
import sns from "../images/sns.webp";
import ecr from "../images/ecr.jpg";
import tomcat from "../images/tomcat.png";
import rds from "../images/rds.png";
import sqs from "../images/sqs.png";
import athena from "../images/athena.png";
import kinesis from "../images/kinesis.png";
import socket from "../images/socket.png";

export default function Projects() {
  return (
    <div className="secondSection">
      <h1 id="heading">My Projects</h1>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>Ittii : An e-commerce site</h1>
            <div className="contents">
              <div className="left">
                <img src={project1} alt="" />
              </div>
              <div className="right">
                <p>
                  Ittii is an e-commerce site on which a user can scroll through
                  various products, view their prices, ratings, and can
                  also search for products based on various categories like clothes,
                  accessories, fragrances, etc.
                </p>
                <p>Various features:</p>
                <ul className="features">
                  <li>
                    Signup to create a new account or login to already created
                    account to view products in the cart and previously placed
                    orders
                  </li>
                  <li>The home page displays various products to explore.</li>
                  <li>
                    We can search based on various categories like
                    fragrances, shirts, men's shoes, etc.
                  </li>
                  <li>
                    We can add any product to the cart and can view the added products
                    in the cart
                  </li>
                  <li>
                    We can place order for all products added to cart, provide
                    information like address, email, name etc. and place an order
                  </li>
                  <li>We can also view all the previously placed orders</li>
                </ul>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={mongo} alt="" />
                  </li>
                  <li>
                    <img src={express} alt="" />
                  </li>
                  <li>
                    <img src={node} alt="" />
                  </li>
                  <li>
                    <img src={npm} alt="" />
                  </li>
                  <li>
                    <img src={jwt} alt="" />
                  </li>
                  <li>
                    <img src={html} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>iChat : A Real-time Chat Application</h1>
            <div className="contents">
              <div className="left">
                <img src={project2} alt="" />
              </div>
              <div className="right">
                <p>
                  A Chat application where multiple users can join in and send
                  messages to each other.
                </p>
                <p>Various features:</p>
                <ul className="features">
                  <li>Various users can join in the chat</li>
                  <li>
                    Real-time messaging where users can interact with each other
                    in real time
                  </li>
                  <li>A sound is made whenever a user receives a message</li>
                  <li>
                    Messages to all other users are displayed whenever a new
                    user joins or leaves the chat
                  </li>
                </ul>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={node} alt="" />
                  </li>
                  <li>
                    <img src={socket} alt="" />
                  </li>
                  <li>
                    <img src={html} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>iNotebook: A Note-taking Application</h1>
            <div className="contents">
              <div className="left">
                <img src={project3} alt="" />
              </div>
              <div className="right">
                <p>
                  iNotebook is an application where users can login and create
                  their accounts. Users can store notes regarging various topics
                  in it and can access them anywhere and anytime.
                </p>
                <p>Various features:</p>
                <ul className="features">
                  <li>
                    User has to first signup to create new account or login to
                    their account{" "}
                  </li>
                  <li>Users will be able to view all their notes</li>
                  <li>User can add notes and access them anytime, anywhere</li>
                  <li>Users can also update an note and delete notes</li>
                </ul>
                <div>Various technologies used:</div>
                <ul className="technologies">
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={mongo} alt="" />
                  </li>
                  <li>
                    <img src={express} alt="" />
                  </li>
                  <li>
                    <img src={node} alt="" />
                  </li>
                  <li>
                    <img src={npm} alt="" />
                  </li>
                  <li>
                    <img src={jwt} alt="" />
                  </li>
                  <li>
                    <img src={html} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>NewsMonkey : An Application to access latest news</h1>
            <div className="contents">
              <div className="left">
                <img src={project4} alt="" />
              </div>
              <div className="right">
                <p>
                  NewsMonkey is an application where users can view latest news.
                  Users can also access news of particular categories like
                  entertainment, sports, business etc.
                </p>
                <p>Various features:</p>
                <ul className="features">
                  <li>Users can view latest news</li>
                  <li>
                    Users can search and view news of various categories like
                    business, sports etc.
                  </li>
                  <li>
                    Users can view the news in more detail by clicking on read
                    more
                  </li>
                </ul>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={api} alt="" />
                  </li>
                  <li>
                    <img src={bootstrap} alt="" />
                  </li>
                  <li>
                    <img src={html} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>Weather App : An application to check weather</h1>
            <div className="contents">
              <div className="left">
                <img src={project6} alt="" />
              </div>
              <div className="right">
                <p>
                  Users can view weather of different states and countries.
                  Various details like wind speed, humidity, temperature are
                  displayed.
                </p>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={html} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>TextUtils : A Text-transformation Application</h1>
            <div className="contents">
              <div className="left">
                <img src={project5} alt="" />
              </div>
              <div className="right">
                <p>
                  TextUtils is an application where users can transform their
                  data. It has various features like converting to uppercase,
                  lowercase, removing spaces, etc. It also displays the word
                  count, character count, reading speed etc.
                </p>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={html} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>
              Analyse a Usecase for cloud & on-premises implementation
            </h1>
            <div className="contents">
              <div className="left">
                <img src={project7} alt="" />
              </div>
              <div className="right">
                <p>
                  Analyze the architecture of a basic team communication
                  solution to scale for 100K users across multi geo locations
                  with a 20% YoY growth. Did a cost analysis for both cloud &
                  on-premises implementation of the same architecture with short
                  & long term benefits. Finally, prepared a recommendation for
                  the suggested way forward
                </p>
                <p>Various skills and tools used:</p>
                <ul className="features">
                  <li>Architecture analysis</li>
                  <li>AWS cost calculator</li>
                  <li>On-prem vs cloud cost comparison</li>
                  <li>Implementation Recommendation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>Containerization of Applications</h1>
            <div className="contents">
              <div className="left">
                <img src={project8} alt="" />
              </div>
              <div className="right">
                <p>
                  Implemented a solution leveraging a set of containerization
                  services to demonstrate expertise on these services.
                  Understood the pros & cons of these technologies over
                  traditional infrastructural deployments
                </p>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={ec2} alt="" />
                  </li>
                  <li>
                    <i
                      className="fa-brands fa-docker"
                      style={{ fontSize: 45 }}
                    ></i>
                  </li>
                  <li>
                    <img src={ecr} alt="" />
                  </li>
                  <li>
                    <img src={tomcat} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <h1>Managed Services on AWS</h1>
            <div className="contents">
              <div className="left">
                <img src={project9} alt="" />
              </div>
              <div className="right">
                <p>
                  Implemented a solution leveraging a set of AWS Managed
                  Services to demostrate expertise on aws managed services like rds, sns, sqs, athena and kinesis. Understood
                  the pros & cons of using these cloud services over on-premises
                  implementation.
                </p>
                <div>Various technologies used:</div>
                <ul>
                  <li>
                    <img src={rds} alt="" />
                  </li>
                  <li>
                    <img src={sqs} alt="" />
                  </li>
                  <li>
                    <img src={sns} alt="" />
                  </li>
                  <li>
                    <img src={athena} alt="" />
                  </li>
                  <li>
                    <img src={kinesis} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
