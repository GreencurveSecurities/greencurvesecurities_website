import React, { Component,  Fragment } from "react";
import ReactDOM from 'react-dom';

import Slider from "react-slick";
import { Link } from "react-router-dom";
import { slickDot } from "../page-demo/script";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import Particles from "react-tsparticles";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Faq from "react-faq-component";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./header.css";

import ReactWhatsappButton from "react-whatsapp-button";
import logo1 from "../../public/assets/images/brand/main/3.png";
import logo2 from "../../public/assets/images/brand/main/4.png";
import logo3 from "../../public/assets/images/brand/main/5.png";
import logo4 from "../../public/assets/images/brand/main/6.png";
import logo5 from "../../public/assets/images/brand/main/7.png";
import logo6 from "../../public/assets/images/brand/main/8.png";
import logo7 from "../../public/assets/images/brand/main/9.png";
import logo8 from "../../public/assets/images/brand/main/10.png";
import logo9 from "../../public/assets/images/brand/main/11.png";
import logo10 from "../../public/assets/images/brand/main/12.png";
import SlidingPopup from "../component/popup/popup";



ReactDOM.render(
  <React.StrictMode>
    <SlidingPopup />
  </React.StrictMode>,
  document.getElementById('root')
);



const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "",
    description: "",
    buttonText: "Contact Us",
    buttonLink: "#contact",
  },
];
const showInMapClicked = () => {
  window.open(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.32443710302!2d72.83285409999999!3d19.1372706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6234f5bf525%3A0xd01d989a0eaae657!2sOberoi%20Chambers%2C%20Off%20New%20Link%20Rd%2C%20Veera%20Desai%20Industrial%20Estate%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400102!5e0!3m2!1sen!2sin!4v1685816387294!5m2!1sen!2sin"
  );
};

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 19.45082,
    lng: 72.806765,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDbuhtVPrZ17NV1mjvBe8CC_cdOe8ni54Y">
      <GoogleMap mapContainerStyle={mapStyles} zoom={30} center={defaultCenter}>
        <Marker
          title={"Green Curve Securities"}
          position={defaultCenter}
          onClick={showInMapClicked}
          animation={2}
          label={{ text: "GCS", color: "green" }}
        />
      </GoogleMap>
    </LoadScript>
  );
};



const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "What all documents do I need to buy unlisted shares? ",
      content: `To buy unlisted shares in your demat account, you need to provide CML copy from your broker, your PAN card and cancelled cheque of account from which funds are transferred.`,
    },
    {
      title: "Can I buy shares in cash? ",
      content:
        "No, payments are accepted only through NEFT, RTGS or IMPS, from the same account holder, i.e ; the shares would be transferred to the same individual from whom funds are received.",
    },
    {
      title:
        "How much time does it take for the shares to get credited in my demat? ",
      content: `The shares are transferred within 24 hours of the fund transfer, however transfer cannot take place during bank holidays.`,
    },
  ],
};
const LocationPin = ({ text }) => (
  <div onclick={showInMapClicked} className=" theme-color">
    <Icon icon={locationIcon} width="30px" height="auto" className="pin-icon" />
    <p>{text}</p>
  </div>
);
const styles = {
  // bgColor: 'white',
  titleTextColor: "Black",
  rowTitleColor: "green",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

class HomeParticles extends Component {
  static defaultProps = {
    center: {
      lat: 19.45082,
      lng: 72.806765,
    },
    zoom: 18,
  };

  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}
  render() {
    

    const PostList = BlogContent.slice(0, 5);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="Green Curve Securities" />

        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed default-color">
        <SlidingPopup />
          <div>
            <div className="mainmenunav">
              <ul className="mainmenu">
                <li>
                  <a href="tel:+91 8452852626" className="nav-contact-link">Contact:+91 8452852626</a>
                </li>

                <li>
                  <a href="mailto:care@greencurvesecurities.com" className="nav-email-link">
                    Email: care@greencurvesecurities.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

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
                  {/* <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  
                  <li>
                    <a href="#blog">Blog</a>
                  </li> */}
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </Scrollspy>
              </nav>
              <div className="header-btn"></div>
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
        {/* End Header Area  */}

        {/* Start Slider Area   */}

        <div
          className="slider-activation slider-creative-agency with-particles"
          id="home"
        >
          <div className="frame-layout__particles">
            <Particles
              className="particle"
              options={{
                style: {
                  position: "absolute",
                },
                fpsLimit: 100,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 100,
                      duration: 2,
                      opacity: 0.8,
                      size: 10,
                      color: "#888",
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4,
                      color: "#888",
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#888",
                  },
                  links: {
                    color: "#888",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 2000,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
          <div className="main container grid grid--col-2">
            <div className="header__btn-box">

              <h1 className="h1-resp">Invest in Unlisted Shares with Expert Insights and Personalized Advisory</h1>
              <p className="p-resp">Diversify your portfolio by investing in Unlisted or Pre-IPO shares</p>
              {SlideList.map((value, index) => (
                <div
                  className="slide slide-style-2 slider-paralax d-flex align-items-end justify-content-center"
                  key={index}
                >
                        <div className={`inner ${value.textPosition}`}>
                          {value.buttonText ? (
                            <div className="slide-btn btn-mb">
                              <a
                                className="rn-button-style--2 btn-primary-color"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
              ))}
            </div>
            <div className="header__logo-box">
              <div className="box">
                <div>
                  {" "}
                  <img src={logo1} alt="img1" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo2} alt="img2" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo3} alt="img3" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo4} alt="img4" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo5} alt="img5" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo6} alt="img6" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo7} alt="img7" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo8} alt="img8" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo9} alt="img9" />{" "}
                </div>
                <div>
                  {" "}
                  <img src={logo10} alt="img10" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="section-title text-left mb--30">
                  <h2>Our Services</h2>
                  {/* <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--5" id="about">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/Green Curve Website/about.jpg"
                      alt="About Images"
                    />
                    
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">Why Green Curve Securities </h2>
                      <p className="description">
                        Headquartered in Mumbai, our team diligently works on
                        providing suitable investment options to our clients,
                        curated as per their risk profile and financial goals.
                        Beyond financial advisory, we are specialized in
                        providing opportunities to buy high potential businesses
                        before they get listed in market.
                        <br></br>
                        <b>SEBI RA registration number:- INH000010308</b>
                      </p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">About Founder</h3>
                          <p>
                            {/* The founder of GCS, Mr. Gaurav Sharma, is a certified Research Analyst from NISM (National Institute of Securities Market) for Investment Advisory and further on the path of receiving SEBI registration for the same.  */}
                            The founder of GCS, Mr. Gaurav Sharma, has an
                            experience of more than 6 years in Indian Equity
                            market and is a SEBI Registered Research Analyst.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Our Team</h3>
                          <p>
                            The team of GCS consists of varied professional
                            market enthusiasts like Chartered Accountants,
                            Lawyers, Equity Analysts, & Digital Marketers,
                            holding years of experience in delivering their best
                            financial services to the clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Portfolio Area */}
        {/* <div
          className="portfolio-area pt--120 pb--140 bg_color--1"
          id="portfolio"
        >
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">Our Portfolio</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...slickDot}>
                      {list.map((value, index) => (
                        <div className="portfolio" key={index}>
                          <div className="thumbnail-inner">
                            <div className={`thumbnail ${value.image}`}></div>
                            <div
                              className={`bg-blr-image ${value.image}`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.category}</p>
                              <h4>
                                <a href="/portfolio-details">{value.title}</a>
                              </h4>
                              <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">
                                  Case Study
                                </a>
                              </div>
                            </div>
                          </div>
                          <Link
                            className="link-overlay"
                            to="/portfolio-details"
                          ></Link>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Portfolio Area */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Testimonial Area */}
        {/* <div
          className="rn-testimonial-area bg_color--5 ptb--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        {/* <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-title text-left">
                  <h2>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
              <div className="col-lg-12">
                <Slider {...slickDot}>
                  {PostList.map((value, i) => (
                    <div className="blog blog-style--1" key={i}>
                      <div className="thumbnail">
                        <a href="/blog-details">
                          <img
                            src={`/assets/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <a href="/blog-details">{value.title}</a>
                        </h4>
                        <div className="blog-btn">
                          <a className="rn-btn text-white" href="/blog-details">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Blog Area */}
        {/* Start Brand Area */}
        <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">
                    Some popular unlisted shares
                  </h3>
                  <BrandTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}
        {/* Start FAQ Style  */}

        <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Faq data={data} styles={styles} />
              </div>
            </div>
          </div>
        </div>
        {/* End FAQ Style  */}
        <div className="container">
          <h3>Any other Queries. Connect with us.</h3>
        </div>
        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5 " id="contact">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact With Phone Number</h4>
                    <p>
                      Gaurav Sharma:
                      <a href="tel:+91 8452852626">
                        {<br></br>} +91 8452852626
                      </a>
                    </p>
                    {<br></br>}
                    <p>
                      Shyamjeet Yadav:{" "}
                      <a href="tel:+91 8149939063">
                        {<br></br>} +91 8149939063
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email Address</h4>
                    <p>
                      <a href="mailto:gaurav.sharma@greencurvesecurities.com">
                        gaurav.sharma{"\n"}@greencurvesecurities.com
                      </a>
                    </p>
                    <br />
                    <p>
                      <a href="mailto:shyamjeet.yadav@greencurvesecurities.com">
                        shyamjeet.yadav{"\n"}@greencurvesecurities.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p>

                    <a href="https://goo.gl/maps/UDjtPNhwWKyQE2hm9">
                      Office No. 303, B- Wing, 03rd Floor,
                      Oberoi Chambers, Off New Link Rd,
                      Veera Desai Industrial Estate, Andheri West,
                      Mumbai, Maharashtra 400053{" "}
                    </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Us */}
        <div className="rn-contact-us ptb--120 bg_color--5">
          <Contact />
        </div>
        {/* End Contact Us */}
        {/* Start Contact Map  */}
        {/* <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <MapContainer></MapContainer>
          </div>
        </div> */}
        {/* End Contact Map  */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        <ReactWhatsappButton
          countryCode="91"
          phoneNumber="8452852626"
          animated="true"
          style={{
            bottom: "40px",
            left: "30px",
            right: "unset",
          }}
        />
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default HomeParticles;
