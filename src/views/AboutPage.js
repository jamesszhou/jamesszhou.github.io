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
  Button,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
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
                Hello! My name is James Zhou. I'm currently a third year student
                studying computer science at UCLA. Outside of coding, I enjoy
                playing ultimate frisbee competitively, photography, and others
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
                      <li>GPA: 3.67</li>
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
                <ul class="textList">
                  <li>
                    <p>
                      <b>Amazon Web Services </b>- Software Development
                      Engineering Intern, <i>Seattle, WA</i>{" "}
                      <span style={{ float: "right" }}>
                        June 2020 - September 2020
                      </span>
                    </p>
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
                  </li>

                  <li>
                    <p>
                      <b>Code Inspector </b>- Software Development Contractor,{" "}
                      <i>San Francisco, CA</i>
                      <span style={{ float: "right" }}>
                        June 2019 - September 2019
                      </span>
                    </p>
                    <ul>
                      <li>
                        Design and Implemented a{" "}
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
                  </li>
                  <li>
                    <p>
                      <b>Daily Bruin </b>- Web Developer, <i>Los Angeles, CA</i>
                      <span style={{ float: "right" }}>
                        April 2019 - June 2020
                      </span>
                    </p>

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
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <h4>Relevant Coursework</h4>
                <Table hover>
                  <tbody>
                    <tr>
                      <td id="cs180">
                        Introduction to Algorithms and Complexity
                      </td>
                    </tr>
                    <UncontrolledCollapse toggler="#cs180">
                      Introduction to design and analysis of algorithms. Design
                      techniques: divide-and-conquer, greedy method, dynamic
                      programming; selection of prototypical algorithms; choice
                      of data structures and representations; complexity
                      measures: time, space, upper, lower bounds, asymptotic
                      complexity; NP-completeness.
                    </UncontrolledCollapse>
                    <tr>
                      <td id="cs111">Operating Systems Principles</td>
                    </tr>
                    <UncontrolledCollapse toggler="#cs111">
                      Introduction to operating systems design and evaluation.
                      Computer software systems performance, robustness, and
                      functionality. Kernel structure, bootstrapping,
                      input/output (I/O) devices and interrupts. Processes and
                      threads; address spaces, memory management, and virtual
                      memory. Scheduling, synchronization. File systems: layout,
                      performance, robustness.
                    </UncontrolledCollapse>{" "}
                    <tr>
                      <td id="cs33">Introduction to Computer Organization</td>
                    </tr>
                    <UncontrolledCollapse toggler="#cs33">
                      Computer architecture, assembly language, and operating
                      systems fundamentals. Number systems, machine language,
                      and assembly language. Procedure calls, stacks,
                      interrupts, and traps. Assemblers, linkers, and loaders.
                      Operating systems concepts: processes and process
                      management, input/output (I/O) programming, memory
                      management, file systems.
                    </UncontrolledCollapse>{" "}
                    <tr>
                      <td id="cs35l">Software Construction Laboratory</td>
                    </tr>
                    <UncontrolledCollapse toggler="#cs35l">
                      Fundamentals of commonly used software tools and
                      environments, particularly open-source tools to be used in
                      upper-division computer science courses.
                    </UncontrolledCollapse>
                    <tr>
                      <td id="math33">Linear Alegbra and Applications</td>
                    </tr>
                    <UncontrolledCollapse toggler="#math33">
                      Introduction to linear algebra: systems of linear
                      equations, matrix algebra, linear independence, subspaces,
                      bases and dimension, orthogonality, least-squares methods,
                      determinants, eigenvalues and eigenvectors, matrix
                      diagonalization, and symmetric matrices.
                    </UncontrolledCollapse>
                    <tr>
                      <td id="math61">Introduction to Discrete Structures</td>
                    </tr>
                    <UncontrolledCollapse toggler="#math61">
                      Discrete structures commonly used in computer science and
                      mathematics, including sets and relations, permutations
                      and combinations, graphs and trees, induction.
                    </UncontrolledCollapse>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PageFooter />
    </>
  );
}

export default AboutPage;
