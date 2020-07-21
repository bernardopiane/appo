import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import CompanyInfo from "./components/CompanyInfo";
import AppPresentation from "./components/AppPresentation";
import Video from "./components/Video";
import Download from "./components/Download";
import Quote from "./components/Quote";
import AppAd from "./components/AppAd";
// import Navbar from "./components/BackuipNavbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import { HashRouter, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="body">
      <HashRouter>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <Header>
              <MyNavbar />
            </Header>
            <Services />
            <CompanyInfo />
            <AppPresentation />
            <Video />
            <Download />
            <Quote />
            <AppAd />
            <Footer />
          </Route>
          <Route path="/features">
            <MyNavbar />
            <CompanyInfo />
            <Download />
            <Quote />
          </Route>
          <Route path="/pricing">
            <MyNavbar />
            <AppAd />
            <AppPresentation />
            <Video />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
