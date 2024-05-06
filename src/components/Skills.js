import React from "react";
import "../css/projects.css";
import api from "../images/api.svg";
import bootstrap from "../images/bootstrap.svg";
import css from "../images/css.png";
import express from "../images/express.png";
import html from "../images/html.png";
import java from "../images/java.svg";
import js from "../images/js.svg";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import npm from "../images/npm.png";
import react from "../images/react.png";
import spring from "../images/spring.png";
import sql from "../images/sql.svg";
import aws from "../images/aws.png";
import cloudfront from "../images/cloudfront.jpg";
import cloudwatch from "../images/cloudwatch.png";
import dynamo from "../images/dynamo.webp";
import ec2 from "../images/ec2.jpg";
import ebs from "../images/ebs.webp";
import lambda from "../images/lambda.png";
import s3 from "../images/s3.png";
import sns from "../images/sns.webp";
import vpc from "../images/vpc.png";

export default function Skills() {
  return (
    <div className="thirdSection">
      <h1 id="skillheading"> My Skills</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Frontend Technologies
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <span className="tech">
                <span className="tech-icon">
                  <img src={html} alt="" />
                </span>
                <span className="tech-title">HTML</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={css} alt="" />
                </span>
                <span className="tech-title">CSS</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={js} alt="" />
                </span>
                <span className="tech-title">Javascript</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={react} alt="" />
                </span>
                <span className="tech-title">React js</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={npm} alt="" />
                </span>
                <span className="tech-title">npm</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={bootstrap} alt="" />
                </span>
                <span className="tech-title">Bootstrap</span>
              </span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Backend Technologies
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <span className="tech">
                <span className="tech-icon">
                  <img src={java} alt="" />
                </span>
                <span className="tech-title">Java</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={node} alt="" />
                </span>
                <span className="tech-title">Node Js</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={express} alt="" />
                </span>
                <span className="tech-title">Express Js</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={spring} alt="" />
                </span>
                <span className="tech-title">Spring</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={sql} alt="" />
                </span>
                <span className="tech-title">MySQL</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={mongo} alt="" />
                </span>
                <span className="tech-title">Mongo DB</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={api} alt="" />
                </span>
                <span className="tech-title">API</span>
              </span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Cloud Technologies
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <span className="tech">
                <span className="tech-icon">
                  <img src={aws} alt="" />
                </span>
                <span className="tech-title">AWS</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={cloudfront} alt="" />
                </span>
                <span className="tech-title">Cloudfront</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={cloudwatch} alt="" />
                </span>
                <span className="tech-title">Cloudwatch</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={dynamo} alt="" />
                </span>
                <span className="tech-title">Dynamo DB</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={ebs} alt="" />
                </span>
                <span className="tech-title">EBS</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={ec2} alt="" />
                </span>
                <span className="tech-title">EC2</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={lambda} alt="" />
                </span>
                <span className="tech-title">Lambda</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={sns} alt="" />
                </span>
                <span className="tech-title">SNS</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={s3} alt="" />
                </span>
                <span className="tech-title">S3</span>
              </span>
              <span className="tech">
                <span className="tech-icon">
                  <img src={vpc} alt="" />
                </span>
                <span className="tech-title">VPC</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
