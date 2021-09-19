/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Table,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  Card,
  CardBody,
  Button
  
} from "reactstrap";
import { Link } from "react-router-dom";
import "../assets/css/AboutPage.css";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import OtherPageHeader from "components/Headers/OtherPageHeader.js";
import PageFooter from "components/Footers/PageFooter.js";

function AboutPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <OtherPageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/portrait.jpg")}
              />
            </div>

            <div class="name">
              <h4>James Zhou</h4>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Hello! My name is James Zhou. I'm currently a fourth year student
                studying computer science at UCLA. Outside of coding, I enjoy
                playing music, photography, and others
                that you can check out on my hobbies page!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="details">
        <Container>
          <Row>
            <Col>
              <div>
                <h4 class="education" name="education">
                  Education
                </h4>
                <ul class="textList">
                  <li>
                    <p>
                      UCLA, Samueli School of Engineering, Computer Science -
                      Expected June 2022
                    </p>
                    <ul>
                      <li>GPA: 3.66</li>
                    </ul>
                  </li>
                  <li>
                    <p>Miramonte High School - Graduated June 2018</p>
                    <ul>
                      <li>Academic GPA: 4.46 weighted</li>
                      <li>
                        COSMOS attendee, Latin Club Officer, Public
                        Speaking/Debate Team, Ultimate Frisbee Team Captain,
                        Swim Instructor/Lifeguard
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <h4 class="experience" name="experience">
                  Experience
                </h4>   
                <Table hover borderless>
                  <tbody>
                    <tr>
                      <td id="uber">
                      <Row style={{padding: "20px 0px"}}>
                          <Col xs="4" sm="2">
                          <img src={require("assets/img/uber.svg")} alt="uber logo" ></img>
                          </Col>
                          <Col>
                          <b>Uber</b>
                          <p>
                            Software
                            Engineer Intern, <i>San Francisco, CA</i>
                          </p>
                          <p>
                            June 2021 - September 2021
                          </p>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <UncontrolledCollapse toggler="#uber">
                      <Card>
                        <CardBody>
                        <ul>
                      <li>
                       Developed tools for platform migration as member of Experimentation API team
                      </li>
                      <li>
                      Created a utility tool that assists users with migrating experiments to the new platform
                              </li>
                      <li>
                      Built tool to safely shut down 25K experiments in old platform with minimum impact to live services
                      </li>
                      <li>
                      Improved performance by minimizing latency in realtime configuration fetching process
                      </li>
                      <li>
                      Technologies: Python, Golang, SQL, Apache Thrift, S3
                      </li>
                    </ul>
               
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>{" "}
                    <tr>
                      <td id="aws">
                        <Row style={{padding: "20px 0px"}}>
                          <Col xs="4" sm="2">
                          <img src={require("assets/img/aws.png")} alt="aws logo" style={{ height: "auto"}}></img>
                          </Col>
                          <Col>
                          <b>Amazon Web Services</b>
                          <p>
                            Software Development
                            Engineering Intern, <i>Seattle, WA</i>
                          </p>
                          <p>
                            June 2020 - September 2020
                          </p>
                          </Col>
                        </Row>
                        
                        </td>
                    </tr>
                    <UncontrolledCollapse toggler="#aws">
                      <Card>
                        <CardBody>
                        <ul>
                      <li>
                        Created serverless ETL jobs pipeline to parse and scale
                        server thermal validation Excel reports for the
                        manufacturer and quality assurance lab
                      </li>
                      <li>
                        Independently architected the solution, optimized
                        further to reduce the runtime by 80% using threads
                      </li>
                      <li>
                        Developed visualizations for thermal engineers to
                        analyze/compare report data in Elasticsearch/Kibana
                      </li>
                      <li>
                        Technologies: Python, AWS: Lambda, Elasticsearch,
                        Kinesis, Cognito, Glue, Redshift and others
                      </li>
                    </ul>
              
                        </CardBody>
                      </Card>
                        </UncontrolledCollapse>
                    <tr>
                      <td id="codeInspector">
                      <Row style={{padding: "20px 0px"}}>
                          <Col xs="4" sm="2">
                          <img src={require("assets/img/codeinspector.png")} alt="code inspector logo" style={{maxWidth:120, height: "auto"}}></img>
                          </Col>
                          <Col>
                          <b>Code Inspector</b>
                          <p>
                            Software Development Contractor, <i>San Francisco, CA</i>
                          </p>
                          <p>
                            June 2019 - September 2019
                          </p>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <UncontrolledCollapse toggler="#codeInspector">
                    <Card>
                      <CardBody>
                      <ul>
                      <li>
                        Designed and Implemented a{" "}
                        <a
                          href="https://chrome.google.com/webstore/detail/code-inspector/nmeniolijnmncfnelopaefhbfjfffilm?hl=en&gl=US"
                          target="_blank"
                        >
                          Google Chrome Extension{" "}
                        </a>
                        to display Code Inspector analysis results in github.
                        Code Inspector is a new platform that conducts analyses
                        on code quality to help users manage technical debt.
                      </li>
                      <li>
                        Developed Unit Tests and verified the extension using
                        Mocha, Sinon, Chai
                      </li>
                      <li>
                        Produced{" "}
                        <a
                          href="https://www.youtube.com/watch?v=XAMcQnfc6cw"
                          target="_blank"
                        >
                          video{" "}
                        </a>
                        and wrote{" "}
                        <a
                          href="https://medium.com/code-inspector-blog/chrome-extension-for-github-10d9b9f1915a"
                          target="_blank"
                        >
                          article{" "}
                        </a>
                        to market product.
                      </li>
                      <li>Technologies: Javascript, HTML, CSS</li>
                    </ul>
                      </CardBody>
                    </Card>
                    
                    </UncontrolledCollapse>
                    <tr>
                      <td id="dailyBruin">
                      <Row style={{padding: "20px 0px"}}>
                          <Col xs="4" sm="2">
                          <img src={require("assets/img/db-logo.png")} alt="daily bruin logo" style={{maxWidth:120, height: "auto"}} ></img>
                          </Col>
                          <Col>
                          <b>Daily Bruin</b>
                          <p>
                            Web Developer, <i>Los Angeles, CA</i>
                          </p>
                          <p>
                            April 2019 - June 2020
                          </p>
                          </Col>
                        </Row>

                      </td>
                    </tr>
                    <UncontrolledCollapse toggler="#dailyBruin">
                      <Card>
                        <CardBody>
                        <ul>
                      <li>
                        Built dynamic and interactive flatpages as a member of
                        the External Sites team.
                      </li>
                      <li>
                        Developed React Components for UCLA special events (UCLA
                        beach volleyball championship, UCLA Centennial etc.)
                        based on figmas from the design team
                      </li>
                      <li>
                        Wrote Python script to convert old markdown article
                        files into ArchieML Google Docs, enabling reader access
                        to older editions of PRIME, the award winning quarterly
                        magazine
                      </li>
                      <li>Technologies: React, Typescript, Gatsby</li>
                    </ul>
                 
                        </CardBody>
                      </Card>
                  </UncontrolledCollapse>
                  </tbody>
                </Table>
             
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <h4>Relevant Coursework</h4>
                <ul>
                      <li>
                        Introduction to Algorithms and Complexity
                       </li>
                       <li>
                       Data Structures
                       </li>
                       <li>
                       Discrete Math
                       </li>
                       <li>
                       Databases
                       </li>
                       <li>
                         Operating Systems Principles
                       </li>
                       <li>
                         Computer Architecture
                       </li>
                       <li>
                       Distributed Algorithms and Blockchains 
                       </li>
                       <li>
                       Machine Learning/AI
                       </li>
                       <li>
                       Networking
                       </li>
                  
                    </ul>
                     </div>
            </Col>
          </Row>
          <Row>
            
            <Link tag={Link} to="/projects">
            <div>
            <Button>
              
              Check out my Projects Here
              
              </Button>
            </div>
            </Link>
            
        
          </Row>
        </Container>
      </div>
      <PageFooter />
    </>
  );
}

export default AboutPage;
