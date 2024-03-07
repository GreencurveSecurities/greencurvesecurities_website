import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import Scrollspy from "react-scrollspy";
import FooterTwo from "../component/footer/FooterTwo";

import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";

class Terms extends Component {
  render() {
    let title = "Terms and Condition";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="Terms and Condition" />
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
                    <a href="#service">Service</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>

                  <li>
                    <a href="#blog">Blog</a>
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
        <Breadcrumb title={"Terms and Condition"} />
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
                      <p><strong>GREENCURVE SECURITIES&nbsp; </strong>&nbsp;is just a name of the domain and we are not a trading platform.</p>
<p>Please carefully read all the provisions of this section. If you are not certain about the meaning of such provisions please consult an independent financial or legal advisor.</p>
<p><strong>GREENCURVE SECURITIES &nbsp;</strong>(the &ldquo;Company,&rdquo; or &ldquo;we&rdquo;) is a service provider. Facilitation of Shares and Brokerage services are offered through dedicated legal entities and broker-dealers</p>
<p>None of the information displayed on or downloadable from &nbsp;<a href="https://tradeunlisted.com/">www.GreencurveSecurities.com</a>&nbsp; (the &ldquo;Website&rdquo;) represents an offer to buy or sell or a solicitation of an offer to buy or sell any security. This Website is a publication and intellectual property of GREENCURVE SECURITIES . All content is believed to be factual, accurate, and up-to-date, but we cannot and do not guarantee its accuracy and it should not be regarded as a complete analysis of the subjects discussed. The Users are required to do their own due diligence while placing any references on the said data. All expressions of opinions reflect the judgment of the authors of such opinion as of the date of publication and are subject to change. Information on our Website does not involve the rendering of personalized investment advice but is limited to the dissemination of general information on products and services. A professional adviser should be consulted before implementing any of the options presented.</p>
<p>Each person on&nbsp;<strong>GREENCURVE SECURITIES&nbsp; &nbsp;</strong>facilitated the transaction is solely responsible for making his/her/its own financial and legal determination about the availability of an exemption from applicable securities laws.</p>
<p>Registered representatives of&nbsp;<strong>GREENCURVE SECURITIES </strong>&nbsp;do not (1) advise or assist in the determination of fair value of any security or investment, or (2) provide legal or tax services. Always consult an attorney or tax professional regarding your specific legal or tax situation. One of our affiliate companies will have an inhouse team for taxation but for your investments its mandatory you find your own independent legal, tax, finance advisor as we or any of our group companies/affiliates/ distributors/partners won&rsquo;t take responsibility of your investments, we don&rsquo;t deal in any fixed return products across our group companies and there is a possibility of negative returns and complete capital loss</p>
<p>Past performance may not be an indicator of future results. Hence, you should assume that the future performance of any specific investment, investment strategy (including the investments and/or investment strategies recommended by the adviser), or product made reference to directly or indirectly on this Website, or indirectly via hyperlink to any unaffiliated third-party website, will be profitable or equal to past performance levels</p>
<p>All investment strategies have the potential for profit or loss. Different types of investments involve varying degrees of risk, and there can be no assurance that any specific investment will either be suitable or profitable for your investment portfolio</p>
<p>Information regarding companies in our portfolio are available on the Website has been collected from or generated from publicly available sources. The availability of company information does not indicate that such company has endorsed, supports, or otherwise participates with&nbsp;<strong>GREENCURVE SECURITIES </strong>. Company "Research Reports" are the opinions of&nbsp;<strong>GREENCURVE SECURITIES </strong>&nbsp;and or the authors of the opinion as of the date of such opinion and are not recommendations to buy, sell, or hold any security of such company.</p>
<p>Please note that access to this Website is provided for informational purposes and for your convenience only and without any warranties, expressed or implied, regarding the accuracy, completeness, timeliness, or results obtained from any information posted to this Website or any third party website linked to this Website.&nbsp;<strong>GREENCURVE SECURITIES</strong>&nbsp;assumes no liability or responsibility for any errors or omissions in the content of this Website. Under no circumstances and under no legal theory shall <strong>GREENCURVE SECURITIES </strong>&nbsp;be liable to a viewer of this Website or any other person for any damages, whether direct, indirect, incidental, consequential or special arising from viewer's access to or use of this Website.</p>
<p>All trademarks on this Website including but not limited to&nbsp;<strong>GREENCURVE SECURITIES's</strong>&nbsp;logo, are registered trademarks. All other trademarks are the property of their respective owners</p>
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
export default Terms;
