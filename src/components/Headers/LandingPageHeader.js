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
import { UncontrolledTooltip, Container } from "reactstrap";

// core components
import Pdf from "../../resume.pdf";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/sfBackground.JPG") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>James Zhou</h1>
            <h3>Computer Science Student at UCLA</h3>
            <br />

            <a
              href="https://github.com/jamesszhou"
              class="p-3"
              style={{ color: "#D3D3D3" }}
              id="Github"
              target="_blank"
            >
              <i class="fa fa-github fa-2x"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="Github">
              Github
            </UncontrolledTooltip>
            <a
              href="https://www.linkedin.com/in/jamesszhou/"
              class="p-3"
              style={{ color: "#D3D3D3" }}
              id="LinkedIn"
              target="_blank"
            >
              <i class="fa fa-linkedin fa-2x"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="LinkedIn">
              LinkedIn
            </UncontrolledTooltip>
            <a
              href={Pdf}
              class="p-3"
              style={{ color: "#D3D3D3" }}
              id="Resume"
              target="_blank"
            >
              <i class="fa fa-file fa-2x"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="Resume">
              Resume
            </UncontrolledTooltip>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
