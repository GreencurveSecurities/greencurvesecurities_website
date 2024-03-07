import React, { Component, Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopupForm from '../PopupForm/PopupForm';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        {/* Define your other routes */}
                        <Route path="/">
                            <PopupForm />
                            {/* Rest of your main component JSX */}
                        </Route>
                    </Switch>
                </Router>
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {this.props.children}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer />

            </Fragment>
        )
    }
}

export default App;
