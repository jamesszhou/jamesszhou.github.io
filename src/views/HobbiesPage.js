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
  UncontrolledCarousel,
  Container,
  Row,
  Col,
  Media,
  Button,
} from "reactstrap";
import { Accordion } from "react-bootstrap";
import "../assets/css/AboutPage.css";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import OtherPageHeader from "components/Headers/OtherPageHeader.js";
import PageFooter from "components/Footers/PageFooter.js";

function HobbiesPage() {
  const PhotoItems = [
    {
      src: require("assets/img/Photography1.jpg"),
      altText: "Nightlife in Chengdu",
      caption: "China 2018",
      header: "Nightlife in Chengdu",
    },
    {
      src: require("assets/img/Photography2.jpg"),
      altText: "Lake Moraine",
      caption: "Banff National Park 2019",
      header: "Lake Moraine",
    },
    {
      src: require("assets/img/Photography3.jpg"),
      altText: "Bow Lake",
      caption: "Banff National Park 2019",
      header: "Bow Lake",
    },
    {
      src: require("assets/img/Photography4.JPG"),
      altText: "Xian Bell Tower",
      caption: "China 2018",
      header: "Xian Bell Tower",
    },
    {
      src: require("assets/img/Photography5.jpg"),
      altText: "Medicine Lake",
      caption: "Jasper National Park 2019",
      header: "Medicine Lake",
    },
  ];
  const UltimateItems = [
    {
      src: require("assets/img/ultimate1.gif"),
      altText: "Minneapolis Superior vs. Bay Area Happy Cows",
      caption: "Youth Club Championships 2018",
      header: "Minneapolis Superior vs. Bay Area Happy Cows",
    },
    {
      src: require("assets/img/ultimate2.jpg"),
      altText: "Rogue Bucks Ultimate",
      caption: "California High School State Championship",
      header: "Rogue Bucks Ultimate",
    },
    {
      src: require("assets/img/ultimate3.jpg"),
      altText: "Vermont Equinox vs. Bay Area Happy Cows",
      caption: "Youth Club Championships 2018",
      header: "Vermont Equinox vs. Bay Area Happy Cows",
    },
  ];
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

      <Container>
        <div className="section profile-content">
          <div className="owner">
            <div class="name">
              <h4 class="title" name="title">
                Hobbies
              </h4>
            </div>
          </div>
        </div>
      </Container>

      <div className="details">
        <Container>
          <Row>
            <Col>
              <div>
                <h4 class="ultimate" name="ultimate">
                  Ultimate Frisbee
                </h4>
                <p>
                  I began ultimate in my sophmore year of high school. What
                  started out on a whim, slowly morphed into passion. Along with
                  captaining my high school team, the Miramonte Rogue Bucks, my
                  senior year, I played for the Bay Area's U20 Mixed Team, Happy
                  Cows, at Youth Club Championships. After sidelined by a
                  concussion in 2019 while on UCLA Smaug, I've taken a safer
                  approach to the game by Captaining the developmental team UCLA
                  Smoke.
                </p>
              </div>
              <UncontrolledCarousel items={UltimateItems} interval="10000" />
            </Col>

            <Col>
              <div>
                <h4 class="photography" name="photography">
                  Food
                </h4>

                <p>
                  I've always had a life long obession with good eats. From
                  helping in the kitchen at a young age to developing my own
                  recipes, my journey has been a delicious ride. Through shelter
                  in place, I began to learn how to make sourdough as well as
                  various Chinese dishes.
                </p>
                <br />
                <a
                  href="https://www.instagram.com/zhoumuchdough/?hl=en"
                  target="_blank"
                >
                  <Button color="primary">
                    <i class="fa fa-instagram" aria-hidden="true"></i> Check out
                    my Instagram here
                  </Button>
                </a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <h4 class="music" name="music">
                  Music and Youtube
                </h4>

                <p>
                  I began photography in the summer of 2014. Currently, I enjoy
                  taking landscape shots, whether it be in busy cities or in
                  nature. The following were all shot on a Sony A7 Mark III.
                </p>
              </Row>
              <br />
              <Row>
                <a
                  href="https://www.youtube.com/channel/UC5orw18GAEnQRLqASljevoA?view_as=subscriber"
                  target="_blank"
                >
                  <Button color="danger">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i> Check
                    out my Youtube Channel Here
                  </Button>
                </a>{" "}
              </Row>
              <br />
              <Row>
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/900196597&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
                <div>
                  <a
                    href="https://soundcloud.com/james-zhou-904173562"
                    title="hummus17"
                    target="_blank"
                  >
                    hummus17
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://soundcloud.com/james-zhou-904173562/late-musings"
                    title="Midnight Musings"
                    target="_blank"
                  >
                    Midnight Musings
                  </a>
                </div>
              </Row>
            </Col>

            <Col>
              <div>
                <h4 class="photography" name="photography">
                  Photography
                </h4>

                <p>
                  I began photography in the summer of 2014. Currently, I enjoy
                  taking landscape shots, whether it be in busy cities or in
                  nature. The following were all shot on a Sony A7 Mark III.
                </p>
              </div>
              <UncontrolledCarousel items={PhotoItems} interval="10000" />
            </Col>
          </Row>
        </Container>
      </div>
      <PageFooter />
    </>
  );
}

export default HobbiesPage;
