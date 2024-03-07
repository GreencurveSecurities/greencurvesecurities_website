import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import Scrollspy from "react-scrollspy";
import FooterTwo from "../component/footer/FooterTwo";

import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";

class Refund extends Component {
  render() {
    let title = "Refund Policy";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="Refund Policy" />
        <header className="header-area formobile-menu header--fixed default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    className="logo-1"
                    src="assets/images/Green Curve Website/Logo.png"
                    alt="Logo Images"
                  />
                  <img
                    className="logo-2"
                    src="assets/images/Green Curve Website/Logo.png"
                    alt="Logo Images"
                  />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={[
                    "home",
                    "service",
                    "about",
                    "portfolio",

                    "blog",
                    "contact",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </Scrollspy>
              </nav>

              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Refund Policy"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-120">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">
                        <p>
                          <strong>REFUND POLICY</strong>
                        </p>
                        <p>
                          At Greencurve Securities, we strive to provide
                          exceptional financial advisory services to our
                          clients, ensuring their financial well-being and
                          success. We understand that circumstances may arise
                          where clients may request a refund for our services.
                          While we value our clients' satisfaction and endeavour
                          to meet their expectations, there are certain
                          situations where we may decline refund requests. This
                          policy aims to outline the reasons for declining
                          refunds and provide transparency to our clients.
                        </p>

                        <p>
                          <strong>Advisory Services Rendered</strong>
                        </p>
                        <p>
                          Once advisory services have been provided by our team
                          of experienced professionals, we consider the service
                          to be delivered and cannot offer refunds. We dedicate
                          significant time and expertise to understand your
                          financial goals, analyse market trends, and provide
                          tailored advice. Our commitment to delivering quality
                          advice remains consistent, regardless of the outcome
                          of the financial decisions made by our clients.
                        </p>
                        <p>
                          <strong>Nature of Financial Markets</strong>
                        </p>
                        <p>
                          Financial markets are inherently dynamic and subject
                          to various economic, political, and environmental
                          factors beyond our control. Investments involve risks,
                          and the value of investments may fluctuate. As a
                          result, we cannot guarantee specific investment
                          outcomes or returns. We provide advice based on our
                          best professional judgment and analysis, but we cannot
                          be held responsible for market fluctuations or
                          unfavourable investment performance.
                        </p>

                        <p>
                          <strong>Change of Mind</strong>
                        </p>
                        <p>
                          Refund requests due to a change of mind or a shift in
                          personal circumstances cannot be accommodated. Once
                          services have been rendered or the agreed-upon period
                          of engagement has begun, we allocate resources and
                          commit our expertise to serve our clients effectively.
                          In such cases, we recommend considering alternative
                          options, such as adjusting the advisory services to
                          align with new circumstances.
                        </p>
                        <p>
                          <strong>Force Majeure</strong>
                        </p>
                        <p>
                          In extraordinary circumstances beyond our control,
                          such as natural disasters, pandemics, or unforeseen
                          events, our ability to deliver advisory services may
                          be disrupted. While we will make every effort to
                          mitigate any adverse effects on our clients, we cannot
                          be held liable for circumstances beyond our reasonable
                          control and will not provide refunds for services
                          affected by force majeure events.
                        </p>

                        <p>
                          <strong>Legal and Regulatory Obligations</strong>
                        </p>
                        <p>
                          As a financial advisory firm, we operate within the
                          boundaries set by applicable laws, regulations, and
                          industry standards. In certain situations, legal or
                          regulatory requirements may restrict our ability to
                          provide refunds. We will always comply with these
                          obligations and limitations, which may result in the
                          declination of refund requests.
                          <br />
                          Please note that this refund policy does not affect
                          your rights and remedies available under consumer
                          protection laws or other applicable regulations.
                          <br />
                          We are committed to addressing any concerns or issues
                          you may have regarding our services. If you have any
                          questions about this refund policy or require further
                          clarification, please contact our customer service
                          team, and we will be happy to assist you.
                        </p>
                        <p>
                          <strong>Contact Us</strong>
                        </p>
                        <p>
                          If you have any questions about this Refund Policy,
                          you can contact us:
                        </p>
                        <p>
                          By email:&nbsp;
                          <a href="mailto:unlisted@greencurvesecurities.com">
                            unlisted@greencurvesecurities.com
                          </a>
                        </p>
                        <p>&nbsp;</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <FooterTwo />
      </React.Fragment>
    );
  }
}
export default Refund;
