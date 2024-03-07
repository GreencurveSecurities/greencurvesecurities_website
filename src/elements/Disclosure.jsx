import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import Scrollspy from "react-scrollspy";
import FooterTwo from "../component/footer/FooterTwo";

import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";

class Disclosure extends Component {
  render() {
    let title = "Disclosure";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="Disclosure" />
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
        <Breadcrumb title={"Disclosure"} />
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
                      <p><strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;is neither a trading portal, nor a stock exchange. The transactions are not conducted between two individual investors. Predominantly, the shares are held by the Company in its books or as received by its channel partners to create liquidity, are placed for these transactions. We don't guarantee any returns. Investments in Unlisted shares carry risk and there are chances of losing entire capital also.</p>
<p><strong>GREENCURVE SECURITIES - Trade Unlisted</strong>&nbsp;is just a transactional platform; We are neither an advisor nor an advisory platform.<br /> You should not completely rely on the research reports, past performance or future projections of the companies placed on the website. The Clients/Buyers/Referral Partners/Business Associates should do their due diligence as we are referral partners.</p>
<p>This site/service (the &ldquo;Site/services&rdquo;) is owned and maintained by&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>, which is not a registered broker-dealer.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;does not give any investment advice, endorsement, analysis or recommendations with respect to any securities whatsoever. All securities listed here are being offered by, and all information included on this site/service is the responsibility of, the respective issuer of such securities.</p>
<p>Neither&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>, its subsidiary, joint venture, holding, if any, nor any of their officers, directors, agents, distributors, affiliates and employees make investment recommendations and no communication, through this Site/services or in any other medium should be construed as a recommendation for any security offered on or off this investment platform. Investment opportunities posted on this Site are private placements of securities that are not publicly traded, involve a high degree of risk, and may lose value. These securities are subject to holding period requirements and are intended for investors who do not need a liquid investment. Past performance should not be considered as an accurate indicator of future performance and results. Investors must be able to afford the loss of their entire investment. Only qualified investors, which may be restricted to only Accredited Investors, may invest in offerings hosted by GREENCURVE SECURITIES- TRADE UNLISTED.</p>
<p>Neither&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>, its subsidiary, joint venture, holding, if any, nor any of their officers, directors, agents, distributors, affiliates and employees makes any warranty, express or implied, of any kind whatsoever related to the adequacy, accuracy or completeness of any information on this site/products/services or the use of information on this site/product/services. Offers to sell securities can only be made through official offering documents that contain important information about the investment and the issuers, including risks. Investors should carefully read the offering documents. Investors should conduct their own due diligence and are encouraged to consult with their tax, legal and financial advisors.</p>
<p>Neither&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>, its subsidiary, joint venture, holding, if any, nor any of their officers, directors, agents, distributors, affiliates and employees, verify the information provided by companies on this Site and makes no assurance as to the completeness or accuracy of any such information. Investors should verify any issuer information they consider important before making an investment.</p>
<p>Investments in private companies are particularly risky and may result in total loss of invested capital. Past performance of a security or a company does not guarantee future results or returns. Only investors who understand the risks of an early-stage investment may invest.</p>
<p>By accessing the Site/services and any pages thereof, you agree to be bound by the&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;Portal&rsquo;s Terms of Use and Privacy Policy and/or&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;&rsquo;s Terms of Use and Privacy Policy.</p>
<p>There is no assurance that any of the companies you choose to invest in will go public soon, if ever, nor are there any assurances that the securities of those companies will become publicly traded or unrestricted. Private investments are not appropriate for all investors. This asset class involves a high degree of risk, volatility, and illiquidity, beyond that associated with traditional asset classes. Investors should have the financial ability and willingness to accept the risks (including, among other things, the risk of loss of their entire investment and the lack of liquidity) that are characteristic of these types of investments. Investors should consider private investments a supplement, comprising a modest portion of an overall investment strategy.</p>
<p>Buyers are solely responsible before making an investment decision with respect to Investment opportunities and review carefully the respective offering documents (including any relevant underlying agreements), and the related subscription documents regarding their Investments and are responsible for performing such due diligence as deemed appropriate, including but not limited to consulting their own independent legal, tax, and financial advisers. Any information provided by&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;and its affiliates should not form the primary or secondary basis of the investment decision. However,&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;does not represent or warrant that material provided is accurate, current, complete, and up-to-date.</p>
<p>Group may have its tax or Investment team, but for transactions related to&nbsp;<strong>GREENCURVE SECURITIES- Trade Unlisted</strong>&nbsp;or any transactions with our group companies you are advised to do your own diligence and consult an independent taxation, legal, advisory team.</p>
<p><strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;or any of its affiliates does not accept any responsibility to update any opinion, analyses or other information contained in the material. This material is for your general information, your investment calls should not be based on the information provided. It is not an offer or solicitation to buy or sell any security, which can be made only through the delivery of formal offering document(s) which include, among others, a confidential offering memorandum, subscription agreement, and related subscription documents. Such formal offering documents contain additional information not set forth herein, including information regarding certain risks of investing, which such additional information is material to any decision to invest in the Funds.</p>
<p>The information contained herein is based on certain assumptions, hypotheses, estimates, and anticipated outcomes which may or may not be true. This Website contains forward-looking statements, including observations about markets and industry and regulatory trends as of the publication date of this Website, the same may or may not be true. Forward-looking statements may be identified by, among other things, the use of words such as &ldquo;expects,&rdquo; &ldquo;anticipates,&rdquo; &ldquo;believes,&rdquo; or &ldquo;estimates,&rdquo; or the negatives of these terms, and similar expressions. Forward-looking statements reflect the Investment's views as of such date with respect to possible future events. Actual results of stock/any other investments could differ materially from those in the forward-looking statements as a result of factors beyond control. Investors are cautioned not to place reliance on such statements. No party has an obligation to update any of the forward-looking statements on this Website. Charts, tables, and graphs contained in this Website or any information memorandum or research reports are not intended to be used to assist the reader in determining which securities to buy or sell or when to buy or sell securities.</p>
<p>Statements made herein that are not attributed to a third-party source reflect the views and opinions of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>. No representation is made that any investor will or is likely to achieve results comparable to those shown or will make any profit or will be able to avoid incurring substantial losses. The past performance of stocks represented by&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;its principals, partners, or employees, or any of the securities referred to herein is not indicative of future returns. Performance results are generally net of applicable fees and reflect reinvestment of profits. Investment returns will fluctuate and may be volatile, especially over short time horizons.</p>
<p>Any trademarks or business names in this Website are included solely for informational purposes and, in certain cases, as examples of companies in the asset class in which the Clients or Company may invest, and any such trademarks and business names are owned by their respective trademark owners.</p>
<br />
<h3>Legal and Compliance</h3>
<br />

<p><strong>GREENCURVE SECURITIES -TRADE UNLISTED</strong>&nbsp;is not a trading portal; we Sell shares from our portfolio or refer clients, companies, institutions who wants liquidity from their Investments. Predominantly we are selling our own unlisted shares or buy if there is a good opportunity, we are not advisors and we are not recommending you to buy any stocks.</p>
<p><strong>GREENCURVE SECURITIES- TRADE UNLISTED&nbsp;</strong>is neither a trading portal, nor a stock exchange. The transactions are not conducted between two individual investors. Predominantly, the shares are held by the Company in its books or as received by its channel partners to create liquidity, are placed for these transactions. We don't guarantee any returns. Investments in Unlisted shares carry risk and there are chances of losing entire capital also.</p>
<p>GREENCURVE SECURITIES - Trade Unlisted is just a transactional platform; We are neither an advisor nor an advisory platform.<br /> You should not completely rely on the research reports, past performance or future projections of the companies placed on the website. The Clients/Buyers/Referral Partners/Business Associates should do their due diligence as we are referral partners.</p>
<p>This site/service (the &ldquo;Site/services&rdquo;) is owned and maintained by GREENCURVE<strong> SECURITIES- TRADE UNLISTED</strong>, which is not a registered broker-dealer.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;does not give any investment advice, endorsement, analysis or recommendations with respect to any securities whatsoever. All securities listed here are being offered by, and all information included on this site/service is the responsibility of, the respective issuer of such securities.</p>
<p>The information, software, products, and services included in or available through&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services may include inaccuracies or typographical errors. Changes are periodically made to&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services and to the information therein.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong> and/or its respective suppliers may make improvements and/or changes in&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services at any time. Advice received via&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services should not be relied upon for personal, medical, legal or financial decisions and you should consult an appropriate professional for specific advice tailored to your situation.</p>
<p><strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;and/or its respective suppliers/ Partners, Business Associates or employees make no representations about the suitability, reliability, availability, timeliness, lack of viruses or other harmful components and accuracy of the information, software, products, services and related graphics contained within&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services for any purpose. All such information, software, products, services and related graphics are provided "As is" without warranty of any kind. &nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;and/or its respective suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services and related graphics, including all implied warranties and conditions of merchantability, fitness for a particular purpose, workman like effort,</p>
<p>This site may contain links to other web sites operated by third parties ("Linked sites"). You acknowledge that, when you click on a link to visit a linked site, a frame may appear that contain GREENCURVE SECURITIES - TRADE UNLISTED logo, advertisements and/or other content selected by&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>. You acknowledge that GREENCURVE<strong> SECURITIES- TRADE UNLISTED</strong>&nbsp;and its sponsors neither endorse nor are affiliated with the linked site and are not responsible for any content of any linked site or any link contained in a link site, or any changes or updates to such sites. You also acknowledge that GREENCURVE<strong> SECURITIES- TRADE UNLISTED</strong>&nbsp;is providing these links to you only as a convenience and doesn&rsquo;t take any responsibility for the contents on such links and for any losses or profits incurred to you by placing reference to these links.</p>
<p>You specifically agree that&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;shall not be responsible for unauthorized access to or alteration of your transmissions or data, any material or data sent or received or not sent or received, or any transactions entered into through an <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;site/service. You specifically agree that <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;is not responsible or liable for any threatening, defamatory, obscene, offensive or illegal content or conduct of any other party or any infringement of another's rights, including intellectual property rights. You specifically agree that <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;is not responsible for any content sent using and/or included in an&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>site/service by any third party.</p>
<p>In no event shall&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services, with the delay or inability to use&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services or related services, the provision of or failure to provide services, or for any information, software, products, services and related graphics obtained through&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>sites/services, or otherwise arising out of the use of GREENCURVE SECURITIES - TRADE UNLISTED sites/services, whether based on contract, tort, negligence, strict liability or otherwise, even if GREENCURVE SECURITIES - TRADE UNLISTED or any of its suppliers has been advised of the possibility of damages.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;does not endorse in anyway any advertisers/ contents of advertisers on its webpages. Please therefore verify the veracity of all information on your own before undertaking reliance and actioning thereupon.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;shall not be responsible nor liable for any consequential damages arising on account of your relying on the contents of the advertisement.</p>
<p>Nothing contained on the&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>sites/services may be construed as investment advice, and use of the <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services constitute an explicit agreement that any use of the GREENCURVE SECURITIES - TRADE UNLISTED sites/services is qualified by your understanding and acceptance of the foregoing disclaimer. Information about companies presented on&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services is provided by third party sources, including user submitted comments and documents.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;makes no effort to verify the accuracy of any information and does not warrant the truthfulness or completeness of any company information viewable on <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services. GREENCURVE SECURITIES - TRADE UNLISTED expresses no opinion as to the suitability of any transaction for any person contemplating GREENCURVE SECURITIES - TRADE UNLISTED sites/services facilitated transactions. Any person contemplating&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services facilitated transaction should make his, her or its own independent investigation of the suitability of any proposed transaction based on the facts and circumstances of such person&rsquo;s financial situation, and&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;strongly recommends consultation with legal or financial advisors prior to initiating a transaction on&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services. <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services neither holds nor gives an opinion about the value of any company or that company&rsquo;s shares and securities</p>
<p>This agreement is governed by the laws of republic of India. You hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Mumbai, Maharashtra in all disputes arising out of or relating to the use of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>sites/services. Use of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>sites/services is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation to this paragraph. You agree to indemnify and hold&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>, its subsidiaries, parent company if any , Promoters, Directors, Distributors , affiliates, officers and employees harmless from any claim, demand or damage including reasonable attorneys' fees, asserted by any third party due to or arising out of your use of or conduct on&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services. <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;reserves the right to ask for and disclose any personal information about you or your use of GREENCURVE SECURITIES - TRADE UNLISTED sites/services, including its contents, without your prior permission if&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;has a good faith belief that such action is necessary to: (1) conform to legal requirements or comply with legal process; (2) protect and defend the rights or property of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;or its affiliated companies; (3) enforce the terms of use; or (4) act to protect the interests of its members or others.&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>'s right to comply with governmental, court and law enforcement requests or requirements relating to your use of&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED </strong>sites/services or information provided to or gathered by GREENCURVE SECURITIES - TRADE UNLISTED with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect. Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and GREENCURVE<strong> SECURITIES- TRADE UNLISTED</strong>&nbsp;with respect to GREENCURVE SECURITIES - TRADE UNLISTED sites/services and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and GREENCURVE<strong> SECURITIES- TRADE UNLISTED</strong>&nbsp;with respect to&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;sites/services.</p>
<p><strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;or are not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc.</p>
<p><strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>, its partner companies, promoters, distributors, referrals, employees are not answerable, responsible or liable for any information on this website or for any services rendered by us, our employees, and our servants.</p>

<br/>
<h3>Payment Policy</h3>
<br/>

<p>At the time of buying shares and securities, the buyer will have to make sure that he uses his/her own bank account/ card for making payment for buying securities. The Buyer can use Debit Cards and UPI as modes for making payments on the portal.</p>
<p>It will always be presumed that buyer uses his/her own bank account for purchasing securities from GREENCURVE SECURITIES - TRADE UNLISTED. Third Party transactions are strictly prohibited on the platform.</p>
<p>Buyer will be required to make the payments of the stocks, relevant charges and the applicable taxes as displayed on the portal.</p>
<p>Once the payment is done, the Buyer should complete the KYC process in quick easy steps as guided on the portal. Upon failure to complete the said KYC process, GREENCURVE SECURITIES- TRADE UNLISTED Group shall be at complete discretion to deal with these shares and buyer shall not be entitled to any refund of the payment.</p>
<p>It is explicitly agreed between the Parties that only after receiving full payment towards the shares, the entire lot shall be transferred to the buyer, and due to any reason seller is not able to transfer securities then entire payment is refunded without any penal interest or any other obligation towards GREENCURVE SECURITIES - TRADE UNLISTED.</p>
<p><strong>Delivery of Shares and Securities</strong><br /> Buyer will be delivered securities in accordance with the applicable law. Delivery period of securities in physical and Demat form will be the same as mentioned above. Shares will be transferred only in the name of a person from whose account we receive consideration amount.</p>
<p>The Buyer hereby agrees that in case the Seller is not able to provide inventory for whatsoever reason, the Seller will return the transaction amount (as received from the Buyer) in the same Bank account through which the funds were received, without any penalty or any interest. During the time of high volatility, the chances of changes in prices of the stocks, and unavailability of the inventory in the market, the Seller has a right to cancel the deal and refund the consideration amount to the client. Otherwise, except in the case stated above, it is obligatory for the Buyer to honor and pay the agreed amount in spite of any circumstances, force majeure shall not be applicable for the Buyer of shares.</p>
<p>Due to any reason, if the seller is not able to transfer securities then entire payment will be refunded without any penal interest or any other obligation towards&nbsp;<strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>.</p>
<p><strong>Transfer:</strong><br /> The shares will be transferred in the Demat account of the Buyer, as per the CML submitted during the KYC process. The said transfer shall take place as per the normal delivery time, depending on the stocks you choose to invest in.</p>
<p>Physical shares and securities purchased from GREENCURVE SECURITIES - TRADE UNLISTED should be lodged for transfer with the respective company in accordance with the applicable law. GREENCURVE SECURITIES - TRADE UNLISTED does not take any kind of legal or financial responsibility for the purchased shares and securities in dispute</p>
<p>Shares and Securities posted on GREENCURVE SECURITIES- TRADE UNLISTED which belongs to Dormant/ Vanished/ Liquidated/ Under-liquidation Company then GREENCURVE SECURITIES- TRADE UNLISTED and its employees, associates will not be responsible for getting shares and securities transferred in the name of the buyer. Buyers&rsquo; discretion is sought in dealing with Dormant/ Vanished/ Liquidated/ Under-liquidation Company. However, GREENCURVE SECURITIES- TRADE UNLISTED will exhibit all information of the company on its portal as reflected on the website with all errors and omissions.</p>
<p>In case of any objections received by the buyer in relation to transfer of shares and securities, buyer shall be responsible to provide a copy of courier slip for transfer of shares and only after authentication of the proof is confirmed by the concerned person of GREENCURVE SECURITIES- TRADE UNLISTED, the case shall be entertained on case-to-case basis.</p>
<p><strong>Cancellation and Refund Policy for Seller</strong><br /> <strong>GREENCURVE SECURITIES- TRADE UNLISTED</strong>&nbsp;can cancel any transaction which buyer has confirmed if they are not able to source shares and, in this case, buyer will get the entire refund without any penalty or interest.</p>
<p><strong>Cancellation and Refund Policy for Buyer</strong><br /> Buyer shall not be entitled to cancel the order placed for buying the shares and securities available on the portal for selling, once the buyer gives confirmation for buying the said shares and securities.</p>
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
export default Disclosure;
