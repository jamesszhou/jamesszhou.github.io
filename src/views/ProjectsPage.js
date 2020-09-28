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
import "../assets/css/Projects.css";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import OtherPageHeader from "components/Headers/OtherPageHeader.js";
import PageFooter from "components/Footers/PageFooter.js";

function ProjectsPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
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
      <Container>
        <div className="section profile-content">
          <div className="owner">
            <div class="name">
              <h4 class="title" name="title">
                Projects
              </h4>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h4 class="Extension" name="Extension">
              Code Inspector Chrome Extension
            </h4>
            <h6>Description</h6>
            <Row>
              <Col lg="6">
                <ul>
                  <li>
                    <p>
                      <a href="https://www.code-inspector.com">
                        Code Inspector{" "}
                      </a>
                      conducts analyses on code quality to help users manage
                      technical debt. Whereas small problems over time can make
                      a project unwieldy and difficult to maintain, Code
                      Inspector prevents this by pointing the users to
                      Violations, Duplicates, Complex Functions within their
                      code.
                    </p>
                  </li>
                  <li>
                    <p>
                      The
                      <a
                        href="https://chrome.google.com/webstore/detail/code-inspector/nmeniolijnmncfnelopaefhbfjfffilm?hl=en&gl=US"
                        target="_blank"
                      >
                        {" "}
                        Google Chrome Extension{" "}
                      </a>
                      displays the results of the analyses directly on github.
                      It provides the user with information along the project of
                      which files need the most attention as well as what kind
                      of error is present. In the file view, errors are
                      highlighted by line and on clicking the badge, a dropdown
                      with an explanation for the error appears.
                    </p>
                  </li>
                </ul>
              </Col>
              <Col lg="6">
                <img
                  src={require("assets/img/file:repo.png")}
                  alt="Code Inspector Chrome Extension"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <img
                  className="displayNoneSmall"
                  src={require("assets/img/file.png")}
                  alt="Code Inspector Chrome Extension"
                />
              </Col>
              <Col lg="6">
                <h6>Design</h6>
                <ul class="textList">
                  <li>
                    <p>
                      Using data fetched from Code Inspector’s GraphQL API, the
                      extension parses the DOM and inserts informative badges.
                      Badge color if based upon the amount of error compared to
                      a standard distribution of that kind of error across all
                      files in the given directory.
                    </p>
                  </li>
                  <li>
                    <p>
                      In the file view, the extension recursively fetches for
                      all errors. At each of the errors’ respective lines, it
                      inserts a colored summary badge and highlights the line. A
                      CSS dropdown with a detailed explanation for the error
                      appears upon clicking such a badge.
                    </p>
                    <li>
                      <p>
                        Used Bootstrap form validation as well as a test query
                        to authenticate the user's API keys.
                      </p>
                    </li>
                  </li>
                </ul>
              </Col>
            </Row>

            <a
              href="https://github.com/codeinspectorio/chrome-extension"
              target="_blank"
            >
              <button type="button" class="btn btn-primary">
                For Code Click Here
              </button>
            </a>
          </div>

          <Row>
            <Col>
              <div>
                <h4 class="Extension" name="Extension">
                  iAwake
                </h4>
                <h6>Description</h6>
                <Row>
                  <Col lg="6">
                    <ul>
                      <li>
                        <p>
                          Created at LAHacks 2019 on a team with four other UCLA
                          students, this app implemented both on iOS and Desktop
                          machines aim to solve the issue of driver drowsiness
                          on the road. iAwake solves this problem by using
                          computer vision to identify if the driver is dozing at
                          the wheel. The app sounds an alarm if the driver is
                          deemed to be sleeping. Along with this, we have
                          implemented a geolocation notification which will
                          message emergency contacts when the individual dozes
                          off three or more times. Finally, the app also directs
                          the driver to the nearest gas station via opening
                          Google Maps so that they may rest up before continuing
                          their journey safely.
                        </p>
                      </li>
                    </ul>
                  </Col>
                  <Col lg="6">
                    <div
                      className="video"
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 25,
                        height: 0
                      }}
                    >
                      <iframe
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/d2sDJEFb9yk`}
                        frameBorder="0"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h6>Design</h6>
                  <ul class="textList">
                    <li>
                      <p>Desktop Implementation - Python</p>
                      <ul>
                        <li>
                          Using an open source facial recognition project as our
                          base, we then determined metrics for when the driver
                          is "sleeping".
                        </li>
                        <li>
                          Called Twilio's API to message emergency contacts with
                          location.
                        </li>
                        <li>
                          Called Google Maps API to route driver to nearest gas
                          station.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>iOS Implementation - Swift</p>
                      <ul>
                        <li>
                          Worked with Apple's ARKit (used for animojis) to
                          conduct facial landmarking for driver "sleeping"
                          state.
                        </li>
                        <li>
                          Used the same APIs as the desktop implementation
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Col>
              </Row>
              <a href="https://github.com/jamesszhou/iAwake" target="_blank">
                <button type="button" class="btn btn-primary">
                  For Code Click Here
                </button>
              </a>
            </Col>
          </Row>

          <div>
            <h4 class="Extension" name="Extension">
              ZombieDash
            </h4>
            <h6>Description</h6>
            <Row>
              <Col lg="6">
                <ul>
                  <li>
                    <p>
                      The goal of the game is for you, Penelope Dolittle, zombie
                      hunter, to bring all the citizens to safety via the exit
                      on every level before they are infected and turned into
                      Zombies themselves. After you rescue all the citizens, you
                      must go to the exit yourself, continuing on to the next
                      level. Once all the citizens are saved on the final level
                      the game finishes. Killing some zombies in the process as
                      well as maintaining the safety of the citizens contribute
                      to your final score.
                    </p>
                  </li>
                </ul>
                <br />
                <h6>Design</h6>
                <ul class="textList">
                  <li>
                    <p>
                      Class project to demonstrate concepts such as inheritance
                      and polymorphism by using a base class from which all game
                      objects are derived.
                    </p>
                  </li>

                  <li>
                    <p>Written in C++</p>
                  </li>
                </ul>
              </Col>
              <Col lg="6">
                <img
                  style={{ width: "80%" }}
                  src={require("assets/img/zombieDash.jpg")}
                  alt="ZombieDash"
                />
              </Col>
              <a
                href="https://github.com/jamesszhou/ZombieDash"
                target="_blank"
              >
                <button type="button" class="btn btn-primary">
                  For Code Click Here
                </button>
              </a>
            </Row>
          </div>
        </div>
      </Container>
      <PageFooter />
    </>
  );
}

export default ProjectsPage;
