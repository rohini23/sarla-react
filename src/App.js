import React, { Component, Fragment } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/navbar";

import Routes from "./routes/routes";

class App extends Component {
  state = {
    navbarCLass: ""
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (document.documentElement.scrollTop > 30 || document.body.scrollTop) {
      this.setState({ navbarCLass: "navbar-mh border" });
    } else {
      this.setState({ navbarCLass: "" });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar className={this.state.navbarCLass} />
        <main>
          <Routes />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
