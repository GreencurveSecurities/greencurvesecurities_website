import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import Scrollspy from "react-scrollspy";
import FooterTwo from "../component/footer/FooterTwo";

import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";

class Policy extends Component {
  render() {
    let title = "Privacy Policy";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="Privacy Policy" />
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
        <Breadcrumb title={"Privacy Policy"} />
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
                          <strong>PRIVACY POLICY</strong>
                        </p>
                        <p>
                          This Privacy Policy describes Our policies and
                          procedures on the collection, use and disclosure of
                          Your information when You use the Service and tells
                          You about Your privacy rights and how the law protects
                          You.
                        </p>
                        <p>
                          We use Your Personal data to provide and improve the
                          Service. By using the Service, you agree to the
                          collection and use of information in accordance with
                          this Privacy Policy.&nbsp; We can use your data
                          (mobile, email, social media communication, etc.) to
                          offer you services related to our group, Affiliate,
                          partner or investee companies.
                        </p>
                        <p>
                          <strong>Interpretation</strong>
                        </p>
                        <p>
                          The words of which the initial letter is capitalized
                          have meanings defined under the following conditions.
                          <br /> The following definitions shall have the same
                          meaning regardless of whether they appear in singular
                          or in plural.
                        </p>
                        <p>
                          <strong>Definitions</strong>
                        </p>
                        <p>For the purposes of this Privacy Policy:</p>
                        <ul>
                          <li>
                            <strong>You</strong>&nbsp;means the individual
                            accessing or using the Service, or the company, or
                            other legal entity on behalf of which such
                            individual is accessing or using the Service, as
                            applicable.
                          </li>
                          <li>
                            <strong>Company</strong>&nbsp;(referred to as either
                            "the Company", "We", "Us" or "Our" in this
                            Agreement) refers to Greencurve Securities or its
                            group, partner, investee companies
                          </li>
                          <li>
                            <strong>Affiliate</strong>&nbsp;means an entity that
                            controls, is controlled by or is under common
                            control with a party, where "control" means
                            ownership of some of the shares, equity interest or
                            other securities entitled to vote for election of
                            directors or other managing authority, or he is a
                            referral or distribution partner with any of our
                            group companies
                          </li>
                          <li>
                            <strong>Distributors</strong>&nbsp;: who have shown
                            their desire or interest to work with us
                          </li>
                          <li>
                            <strong>Partner companies</strong>: we have any
                            working relationship
                          </li>
                          <li>
                            <strong>Account</strong>&nbsp;means a unique account
                            created for You to access our Service or parts of
                            our Service.
                          </li>
                          <li>
                            <strong>Website</strong>&nbsp;refers to or any of
                            Greencurve Securities or our group companies&rsquo;
                            website
                          </li>
                          <li>
                            <strong>Service</strong>&nbsp;refers to the Website
                          </li>
                          <li>
                            <strong>Country</strong>&nbsp;refers to: Mumbai,
                            India
                          </li>
                          <li>
                            <strong>Service Provider</strong>&nbsp;means any
                            natural or legal person who processes the data on
                            behalf of the Company. It refers to third-party
                            companies or individuals employed by the Company to
                            facilitate the Service, to provide the Service on
                            behalf of the Company, to perform services related
                            to the Service or to assist the Company in analyzing
                            how the Service is used.
                          </li>
                          <li>
                            <strong>Third-party Social Media Service</strong>
                            &nbsp;refers to any website or any social network
                            website through which a User can log in or create an
                            account to use the Service.
                          </li>
                          <li>
                            Personal Data is any information that relates to an
                            identified or identifiable individual.
                          </li>
                          <li>
                            <strong>Cookies</strong>&nbsp;are small files that
                            are placed on Your computer, mobile device or any
                            other device by a website, containing the details of
                            Your browsing history on that website among its many
                            uses.
                          </li>
                          <li>
                            <strong>Usage Data</strong>&nbsp;refers to data
                            collected automatically, either generated by the use
                            of the Service or from the Service infrastructure
                            itself (for example, the duration of a page visit).
                          </li>
                        </ul>
                        <p>
                          <strong>
                            Collecting and Using Your Personal Data
                          </strong>
                        </p>
                        <p>Types of Data Collected</p>
                        <p>
                          <strong>Personal Data</strong>
                        </p>
                        <p>
                          While using Our Service, we may ask You to provide Us
                          with certain personally identifiable information that
                          can be used to contact or identify You. Personally,
                          identifiable information may include, but is not
                          limited to:
                        </p>
                        <ul>
                          <li>Email address</li>
                          <li>First name and last name</li>
                          <li>Phone number</li>
                          <li>
                            Address, State, Province, ZIP/Postal code, City
                          </li>
                          <li>Usage Data</li>
                          <li>
                            Social Media- Facebook, LinkedIn, Twitter,
                            Instagram, Etc.
                          </li>
                        </ul>
                        <p>
                          <strong>Usage Data</strong>
                          <br /> Usage Data may include information such as Your
                          Device's Internet Protocol address (e.g., IP address),
                          browser type, browser version, the pages of our
                          Service that You visit, the time and date of Your
                          visit, the time spent on those pages, unique device
                          identifiers and other diagnostic data. When You access
                          the Service by or through a mobile device, we may
                          collect certain information automatically, including,
                          but not limited to, the type of mobile device You use,
                          your mobile device unique ID, the IP address of Your
                          mobile device, your mobile operating system, the type
                          of mobile Internet browser You use, unique device
                          identifiers and other diagnostic data. We may also
                          collect information that Your browser sends whenever
                          You visit our Service or when You access the Service
                          by or through a mobile device, when you access our
                          platform, we can use any of your available information
                        </p>
                        <p>
                          <strong>Tracking Technologies and Cookies</strong>
                        </p>
                        <p>
                          We use Cookies and similar tracking technologies to
                          track the activity on Our Service and store certain
                          information. Tracking technologies used are beacons,
                          tags, and scripts to collect and track information and
                          to improve and analyze Our Service. You can instruct
                          Your browser to refuse all Cookies or to indicate when
                          a Cookie is being sent. However, if You do not accept
                          Cookies, you may not be able to use some parts of our
                          Service. Cookies can be "Persistent" or "Session"
                          Cookies. Persistent Cookies remain on your personal
                          computer or mobile device when You go offline, while
                          Session Cookies are deleted as soon as You close your
                          web browser.
                          <br /> We use both session and persistent Cookies for
                          the purposes set out below:
                        </p>
                        <p>
                          <strong>Necessary / Essential Cookies</strong>
                          <br /> Type: Session Cookies
                          <br /> Administered by: Us
                          <br /> Purpose: These Cookies are essential to provide
                          You with services available through the Website and to
                          enable You to use some of its features. They help to
                          authenticate users and prevent fraudulent use of user
                          accounts. Without these Cookies, the services that You
                          have asked for cannot be provided, and We only use
                          these Cookies to provide You with those services.
                        </p>
                        <p>
                          <strong>
                            Cookies Policy / Notice Acceptance Cookies
                          </strong>
                        </p>
                        <p>
                          Type: Persistent Cookies
                          <br /> Administered by: Us
                          <br /> Purpose: These Cookies identify if users have
                          accepted the use of cookies on the Website.
                        </p>
                        <p>
                          <strong>Functionality Cookies</strong>
                        </p>
                        <p>
                          Type: Persistent Cookies
                          <br /> Administered by: Us
                          <br /> Purpose: These Cookies allow us to remember
                          choices You make when You use the Website, such as
                          remembering your login details or language preference.
                          The purpose of these Cookies is to provide You with a
                          more personal experience and to avoid You having to
                          re-enter your preferences every time You use the
                          Website.
                        </p>
                        <p>
                          <strong>Log Files</strong>
                          <br /> GREENCURVE SECURITIES follows a standard
                          procedure of using log files. These files log visitors
                          when they visit websites. All hosting companies do
                          this and a part of hosting services' analytics. The
                          information collected by log files include internet
                          protocol (IP) addresses, browser type, Internet
                          Service Provider (ISP), date and time stamp,
                          referring/exit pages, and possibly the number of
                          clicks. These are not linked to any information that
                          is personally identifiable.
                          <br /> The purpose of the information is for analyzing
                          trends, administering the site, tracking users'
                          movement on the website, and gathering demographic
                          information.
                        </p>
                        <p>
                          <strong>&nbsp;</strong>
                        </p>
                        <p>
                          <strong>Use of Your Personal Data</strong>
                        </p>
                        <p>
                          The Company may use Personal Data for the following
                          purposes:
                        </p>
                        <ul>
                          <li>
                            <strong>To provide and maintain our Service</strong>
                            , including to monitor the usage of our Service.
                          </li>
                          <li>
                            <strong>To manage Your Account:</strong>&nbsp;to
                            manage Your registration as a user of the Service.
                            The Personal Data You provide can give You access to
                            different functionalities of the Service that are
                            available to You as a registered user.
                          </li>
                          <li>
                            <strong>For the performance of a contract:</strong>
                            &nbsp;the development, compliance and undertaking of
                            the purchase contract for the products, items or
                            services You have purchased or of any other contract
                            with Us through the Service.
                          </li>
                          <li>
                            <strong>To contact You:</strong>&nbsp;To contact You
                            by email, telephone calls, SMS, or other equivalent
                            forms of electronic communication, such as a mobile
                            application's push notifications regarding updates
                            or informative communications related to the
                            functionalities, products or contracted services,
                            including the security updates, when necessary or
                            reasonable for their implementation.
                          </li>
                          <li>
                            <strong>To provide You with news</strong>, special
                            offers and general information about other goods,
                            services and events which we offer that are similar
                            to those that you have already purchased or enquired
                            about unless You have opted not to receive such
                            information.
                          </li>
                          <li>
                            <strong>
                              To manage Your requests or to offer diff Products
                              or services:
                            </strong>
                            &nbsp;To attend and manage Your requests to Us.
                          </li>
                        </ul>
                        <p>
                          We may share your personal information in the
                          following situations:
                        </p>
                        <ul>
                          <li>
                            <strong>With Service Providers:</strong>&nbsp;We may
                            share Your personal information with Service
                            Providers to monitor and analyze the use of our
                            Service, to show advertisements to You to help
                            support and maintain Our Service, to contact You, to
                            advertise on third party websites to You after You
                            visited our Service or for payment processing.
                          </li>
                          <li>
                            <strong>For Business transfers</strong>: We may
                            share or transfer Your personal information in
                            connection with, or during negotiations of, any
                            merger, sale of Company assets, financing, or
                            acquisition of all or a portion of our business to
                            another company.
                          </li>
                          <li>
                            <strong>With Affiliates</strong>: We may share Your
                            information with Our affiliates, in which case we
                            will require those affiliates to honor this Privacy
                            Policy. Affiliates include Our parent company and
                            any other subsidiaries, joint venture partners or
                            other companies that We control or that are under
                            common control with Us.
                          </li>
                          <li>
                            <strong>With Business partners</strong>: We may
                            share Your information with Our business partners to
                            offer You certain products, services or promotions.
                          </li>
                          <li>
                            <strong>With other users:</strong>&nbsp;when You
                            share personal information or otherwise interact in
                            the public areas with other users, such information
                            may be viewed by all users and may be publicly
                            distributed outside. If You interact with other
                            users or register through a Third-Party Social Media
                            Service, your contacts on the Third-Party Social
                            Media Service may see Your name, profile, pictures
                            and description of Your activity. Similarly, other
                            users will be able to view descriptions of Your
                            activity, communicate with You and view Your
                            profile.
                          </li>
                        </ul>

                        <p>
                          GREENCURVE SECURITIES &ndash; 's Privacy Policy does
                          not apply to other advertisers or websites. Thus, we
                          are advising you to consult the respective Privacy
                          Policies of these third-party ad servers for more
                          detailed information. It may include their practices
                          and instructions about how to opt-out of certain
                          options.
                        </p>
                        <p>
                          You can choose to disable cookies through your
                          individual browser options. To know more detailed
                          information about cookie management with specific web
                          browsers, it can be found at the browsers' respective
                          websites.
                        </p>
                        <p>
                          <strong>
                            Your rights in relation to your personal data Rights
                          </strong>
                        </p>
                        <p>
                          GREENCURVE SECURITIES&nbsp; takes reasonable steps
                          that are designed to keep your personal data accurate,
                          complete, and up to date for the purposes for which it
                          is collected and used and to ensure that processing of
                          your personal data complies with applicable law. Under
                          certain circumstances and in accordance with EU, you
                          may have the right to:
                        </p>
                        <p>
                          The right to access &ndash; You have the right to
                          request copies of your personal data. We may charge
                          you a small fee for this service.
                        </p>
                        <p>
                          The right to rectification &ndash; You have the right
                          to request that we correct any information you believe
                          is inaccurate. You also have the right to request that
                          we complete the information you believe is incomplete.
                        </p>
                        <p>
                          The right to erasure &ndash; You have the right to
                          request that we erase your personal data, under
                          certain conditions.
                        </p>
                        <p>
                          The right to restrict processing &ndash; You have the
                          right to request that we restrict the processing of
                          your personal data, under certain conditions.
                        </p>
                        <p>
                          The right to object to processing &ndash; You have the
                          right to object to our processing of your personal
                          data, under certain conditions.
                        </p>
                        <p>
                          The right to data portability &ndash; You have the
                          right to request that we transfer the data that we
                          have collected to another organization, or directly to
                          you, under certain conditions.
                        </p>
                        <p>
                          If you make a request, we have one month to respond to
                          you. If you would like to exercise any of these
                          rights, please contact us.
                        </p>
                        <p>
                          <strong>Users</strong>
                        </p>
                        <p>
                          If you are visiting from the United States of America
                          or European Union or other regions with laws governing
                          data collection and use, please note that you are
                          agreeing to the transfer of your information to us and
                          processing globally. By providing your information you
                          consent to any transfer and processing in accordance
                          with this Privacy Policy. The onus of Compliance with
                          requisite laws, applicable in a specific country, will
                          be on person accessing GREENCURVE SECURITIES
                          -TRADEUNLISTED or any of our group company.
                        </p>
                        <p>
                          <strong>Retention of Your Personal Data</strong>
                        </p>
                        <p>
                          The Company will retain Your Personal Data only for as
                          long as is necessary for the purposes set out in this
                          Privacy Policy. We will retain and use Your Personal
                          Data to the extent necessary to comply with our legal
                          obligations (for example, if we are required to retain
                          your data to comply with applicable laws), resolve
                          disputes, and enforce our legal agreements and
                          policies. The Company will also retain Usage Data for
                          internal analysis purposes. Usage Data is generally
                          retained for a shorter period of time, except when
                          this data is used to strengthen the security or to
                          improve the functionality of Our Service, or We are
                          legally obligated to retain this data for longer time
                          periods.
                        </p>
                        <p>
                          <strong>Transfer of Your Personal Data</strong>
                        </p>
                        <p>
                          Your information, including Personal Data, is
                          processed at the Company's operating offices and in
                          any other places where the parties involved in the
                          processing are located. It means that this information
                          may be transferred to &mdash; and maintained on
                          &mdash; computers located outside of Your state,
                          province, country or other governmental jurisdiction
                          where the data protection laws may differ than those
                          from Your jurisdiction. Your consent to this Privacy
                          Policy followed by Your submission of such information
                          represents Your agreement to that transfer. The
                          Company will take all steps reasonably necessary to
                          ensure that Your data is treated securely and in
                          accordance with this Privacy Policy and no transfer of
                          Your Personal Data will take place to an organization
                          or a country unless there are adequate controls in
                          place including the security of Your data and other
                          personal information.
                        </p>
                        <p>
                          <strong>Disclosure of Your Personal Data</strong>
                        </p>
                        <p>
                          <strong>Business Transactions</strong>
                        </p>
                        <p>
                          If the Company is involved in a merger, acquisition or
                          asset sale, Your Personal Data may be transferred. We
                          will provide notice before Your Personal Data is
                          transferred and becomes subject to a different Privacy
                          Policy.
                        </p>
                        <p>
                          <strong>&nbsp;</strong>
                        </p>
                        <p>
                          <strong>Law enforcement</strong>
                        </p>
                        <p>
                          Under certain circumstances, the Company may be
                          required to disclose Your Personal Data if required to
                          do so by law or in response to valid requests by
                          public authorities (e.g., a court or a government
                          agency).
                        </p>
                        <p>
                          <strong>Other legal requirements</strong>
                        </p>
                        <p>
                          The Company may disclose Your Personal Data in the
                          good faith belief that such action is necessary to:
                        </p>
                        <ul>
                          <li>Comply with a legal obligation</li>
                          <li>
                            Protect and defend the rights or property of the
                            Company
                          </li>
                          <li>
                            Prevent or investigate possible wrongdoing in
                            connection with the Service
                          </li>
                          <li>
                            Protect the personal safety of Users of the Service
                            or the public
                          </li>
                          <li>Protect against legal liability</li>
                        </ul>
                        <p>
                          <strong>Security of Your Personal Data</strong>
                        </p>
                        <p>
                          The security of Your Personal Data is important to Us,
                          but remember that no method of transmission over the
                          Internet, or method of electronic storage is 100%
                          secure. While We strive to use commercially acceptable
                          means to protect Your Personal Data, We cannot
                          guarantee its absolute security
                        </p>
                        <p>
                          <strong>Children's Privacy</strong>
                        </p>
                        <p>
                          Our Service does not address anyone under the age of
                          13. We do not knowingly collect personally
                          identifiable information from anyone under the age of
                          13. If You are a parent or guardian and You are aware
                          that Your child has provided Us with Personal Data,
                          please contact Us. If We become aware that We have
                          collected Personal Data from anyone under the age of
                          13 without verification of parental consent, we take
                          steps to remove that information from Our servers. We
                          also may limit how We collect, use, and store some of
                          the information of Users between 13 and 18 years old.
                          In some cases, this means We will be unable to provide
                          certain functionality of the Service to these users.
                        </p>
                        <p>
                          If We need to rely on consent as a legal basis for
                          processing Your information and Your country requires
                          consent from a parent, we may require Your parent's
                          consent before We collect and use that information.
                        </p>
                        <p>
                          <strong>&nbsp;</strong>
                        </p>
                        <p>
                          <strong>&nbsp;</strong>
                        </p>
                        <p>
                          <strong>Links to Other Websites</strong>
                        </p>
                        <p>
                          Our Service may contain links to other websites that
                          are not operated by Us. If You click on a third-party
                          link, you will be directed to that third party's site.
                          We strongly advise You to review the Privacy Policy of
                          every site You visit.
                        </p>
                        <p>
                          We have no control over and assume no responsibility
                          for the content, privacy policies or practices of any
                          third-party sites or services.
                        </p>
                        <p>
                          <strong>Changes to this Privacy Policy</strong>
                        </p>
                        <p>
                          We may update our Privacy Policy from time to time. We
                          will notify You of any changes by posting the new
                          Privacy Policy on this page. We will let You know via
                          email and/or a prominent notice on Our Service, prior
                          to the change becoming effective and update the "Last
                          updated" date at the top of this Privacy Policy. You
                          are advised to review this Privacy Policy periodically
                          for any changes. Changes to this Privacy Policy are
                          effective when they are posted on this page.
                        </p>
                        <p>
                          <strong>New Uses of Personal Information</strong>
                        </p>
                        <p>
                          From time to time, we may desire to use Personal
                          Information for uses not previously disclosed in our
                          Privacy Policy. If our practices change regarding
                          previously collected Personal Information in a way
                          that would be materially less restrictive than stated
                          in the version of this Privacy Policy in effect at the
                          time, we collected the information, we will make
                          reasonable efforts to provide notice and obtain
                          consent to any such uses as may be required by law.
                        </p>
                        <p>
                          <strong>Contact Us</strong>
                        </p>
                        <p>
                          If you have any questions about this Privacy Policy,
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
export default Policy;
