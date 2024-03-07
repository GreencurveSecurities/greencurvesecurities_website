import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import Scrollspy from "react-scrollspy";
import FooterTwo from "../component/footer/FooterTwo";

import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

import ScrollToTop from 'react-scroll-up';


class Disclaimer extends Component{
    render(){
        let title = 'Disclaimer'
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Disclaimer' />
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
              {/* <div className="header-btn">
                <a className="rn-btn" href="/">
                  <span>buy now</span>
                </a>
              </div> */}
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
                <Breadcrumb title={'Disclaimer'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                {/* <div className="col-lg-5">
                                    <div className="thumbnail">
                                    
                                    </div>
                                </div> */}
                                <div className="col-lg-120">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">
                                            You understand and confirm that you have decided to use the website and platform, and to make transaction(s)/Investment(s), after fully understanding the product features, associated risks with such investment(s), applicable charges and keeping in mind your own risk appetite and financial position

                                            </p>
                                            <p>
                                            You hereby confirm that you have neither been influenced nor been given any assurance of guaranteed/fixed returns or any returns whatsoever, in any manner whatsnever, by GREENCURVE SECURITIES, its affiliates, employees, distributors and Partner companies or by any of their employee(s) or representative or relationship manager in relation to the investment(s)/transaction(s) detailed.
                                            </p>
                                            <p>
                                            You have decided to purchase or purchased such shares / properties / financial products offered by them after your due diligence and have bought this product out of your own accord.
                                            </p>
                                            <p>
                                            You fully understand that GREENCURVE SECURITIES or its affiliates, distributors, partner companies, and employees act as referrals or distributors and they are not responsible in any case for the profit or loss arising out of the Investment. They are also not responsible for any capital loss occurring from the products offered by them. You hereby indemnify a GREENCURVE SECURITIES, its subsidiaries, parent company if any, Promoters, Distributors affiliates, officers and employees harmless from any claim, demand or damage, including reasonable attorneys' fees
                                            </p>
                                            <p>
                                            You hereby declare and confirm that you are making the payment towards purchasing of shares/ real estate/ any other product through your own bank account or from the income from your source which is a legal income/earning in nature.
                                            </p>
                                            <p>
                                            GREENCURVE SECURITIES is just a name of the domain. Trade Unlisted is neither a trading portal nor a stock exchange. The transactions are not conducted between two individual investors. Predominantly, the shares are held by the Company in its books or as received by its channel partners to create liquidity, are placed for these transactions. We don't guarantee any returns. Investments in Unlisted shares carry risk and there are chances of losing entire capital also.
                                            </p>
                                            <p>
                                            GREENCURVE SECURITIES is just a transactional platform; We are neither an advisor nor an advisory platform. You should not completely rely on the research reports, past performance or future projections of the companies placed on the website. The Clients/Buyers/Referral Partners/Business Associates should do their due diligence as we are referral partners.
                                            </p>
                                            <p>
                                            The GREENCURVE SECURITIES ’s services should be used only by personnel who have read and understood all the terms and has complete knowledge regarding products listed on the platform. GREENCURVE SECURITIES is not a securities broker, and nothing on this site constitutes an offer to buy or sell securities. No contract can be entered into on this website and no transaction is processed or cleared by GREENCURVE SECURITIES. Any transactions described here, if and when approved, will be handled through a licensed broker-dealer affiliated with GREENCURVE SECURITIES.
                                            </p>
                                            <p>
                                            Although there is a screening process for which issuers will be listed on the GREENCURVE SECURITIES platform, GREENCURVE SECURITIES does not advise parties on the merits of a particular transaction, assist in negotiation, transaction, or financial dealings between members or with the issuer of company shares, or provide legal or advisory services to its users. GREENCURVE SECURITIES does not participate or invest in any way or allow its employees to invest or participate in any way in transactions between its members, except: (i) through an affiliated, duly licensed and/or registered fund advisor, by organizing, advising, and servicing investment funds for the benefit of its investor members, and in some cases earning a management fee and carried interest in them, and (ii) in individual cases as supervised and approved by broker-dealers subject to their compliance policies, allowing employees and affiliates to participate in GREENCURVE SECURITIES -related transactions.
                                            </p>
                                            <p>
                                            GREENCURVE SECURITIES is intended for sophisticated private equity shareholders, for owners of other private equity securities and interests, and for persons who are “accredited investors”, all of whom must pass GREENCURVE SECURITIES ’s vetting process and meet any other qualifications required by Indian securities laws and regulations, and any other laws and regulations that apply in their jurisdictions. Some GREENCURVE SECURITIES services, but not all, are open to persons representing organizations as fund managers and advisors, or representing clients as brokers, wealth advisors, or the like.
                                            </p>
                                            <p>
                                            Use of this site/service is governed by the GREENCURVE SECURITIES Terms of Service and Privacy Policy, as well as various notices, rules, policies, and procedures that may be published on this site. Your use of the site/services serves as your acknowledgement and acceptance of these terms, conditions, and disclaimers. It is the sole responsibility of the user/client/investor to stay updated with these modified terms on a timely basis.
                                            </p>
                                            <p>
                                            Neither GREENCURVE SECURITIES, its subsidiary, joint venture, holding, if any, nor any of their officers, directors, agents, distributors, affiliates and employees makes any warranty, express or implied, of any kind whatsoever related to the adequacy, accuracy or completeness of any information on this site/products/services or the use of information on this site/product/services. Offers to sell securities can only be made through official offering documents that contain important information about the investment and the issuers, including risks. Investors should carefully read the offering documents. Investors should conduct their own due diligence and are encouraged to consult with their tax, legal and financial advisors.
                                            </p>
                                            <p>
                                            Neither GREENCURVE SECURITIES, its subsidiary, joint venture, holding, if any, nor any of their officers, directors, agents, distributors, affiliates and employees, verify the information provided by companies on this Site and makes no assurance as to the completeness or accuracy of any such information. Investors should verify any issuer information they consider important before making an investment.
                                                
                                            </p>
                                            <p>

                                            Investments in private companies are particularly risky and may result in total loss of invested capital. Past performance of a security or a company does not guarantee future results or returns. Only investors who understand the risks of an early-stage investment may invest.
By accessing the Site/services and any pages thereof, you agree to be bound by the GREENCURVE SECURITIES Portal’s Terms of Use and Privacy Policy and/or GREENCURVE SECURITIES ’s Terms of Use and Privacy Policy.
                                            </p>
                                            <p>
                                                Information Provided on the Website or research reports are allowed access solely on request. If you are not so authorized or you haven’t requested you must immediately destroy the Document. If you receive Reports, whether through a System or by any other means, you agree that you shall not copy, revise, amend, create a derivative work, provide to any third party, or in any way commercially exploit any research provided, and that you shall not extract data from any research or estimates provided to you via Research or otherwise, without the prior written consent of GREENCURVE SECURITIES. Information is for distribution only as may be permitted by law. It is not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any locality, state, country or other jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or would subject GREENCURVE SECURITIES to any registration or licensing requirement within such jurisdiction. This document is a general communication and is educational in nature; it is not an advertisement nor is it a solicitation or an offer to buy or sell any financial instruments or to participate in any particular trading strategy. Nothing in this document or on this site/services constitutes a representation that any investment strategy or recommendation is suitable or appropriate to an investor’s individual circumstances or otherwise constitutes a personal recommendation. By providing this document, none of GREENCURVE SECURITIES or its representatives has any responsibility or authority to provide or have provided investment advice in a fiduciary capacity or otherwise. Investments involve risks, and investors should exercise prudence and their own judgment in making their investment decisions. None of GREENCURVE SECURITIES or its representatives is suggesting that the recipient or any other person take a specific course of action or any action at all. By receiving this document, the recipient acknowledges and agrees with the intended purpose described above and further disclaims any expectation or belief that the information constitutes investment advice to the recipient or otherwise purports to meet the investment objectives of the recipient. The value of any investment or income may go down as well as up, and investors may not get back the full (or any) amount invested. Past performance is not necessarily a guide to future performance. Neither GREENCURVE SECURITIES nor any of its directors, employees or agents accepts any liability for any loss (including investment loss) or damage arising out of the use of all or any of the Information. Prior to making any investment or financial decisions, any recipient of this site/services or document or the information should take steps to understand the risk and return of the investment and seek individualized advice from his or her personal financial, legal, tax and other professional advisors that takes into account all the particular facts and circumstances of his or her investment objectives. Any prices stated in this document or on these site/services are for information purposes only and do not represent valuations for individual securities or other financial instruments. There is no representation that any transaction can or could have been effected at those prices, and any prices do not necessarily reflect GREENCURVE SECURITIES 's internal books and records or theoretical model-based valuations and may be based on certain assumptions. Different assumptions by GREENCURVE SECURITIES or any other source may yield different results. No representation or warranty, either expressed or implied, is provided in relation to the accuracy, completeness or reliability of the information contained in any materials to which this document/Information relates. The Information is not intended to be a complete statement or summary of the securities, markets or developments referred to in the document or on this site/ services. GREENCURVE SECURITIES does not undertake to update or keep current the Information. Any opinions expressed in this document or on the site/services may change. In no circumstances may this document or any of the Information (including any forecast, value, index or other calculated amount ("Values")) on the site/services be used for any of the following purposes: ( I ) valuation or accounting purposes; (ii) to determine the amounts due or payable, the price or the value of any financial instrument or financial contract; or (iii) to measure the performance of any financial instrument including, without limitation, for the purpose of tracking the return or performance of any Value or of defining the asset allocation of portfolio or of computing performance fees.
                                            </p>
                                            <p>
                                            The Buyer hereby agrees that in case the Seller is not able to provide inventory, or the prices of the concerned stocks have changed, due to whatsoever reason, the Seller will return the transaction amount (as received from the Buyer) in the same Bank account through which the funds were received, without any penalty or any interest. During the time of high volatility, the chances of changes in prices of the stock, and unavailability of the inventory in the market, the Seller has a right to cancel the deal and refund the consideration amount to the client.
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
        )
    }
}
export default Disclaimer