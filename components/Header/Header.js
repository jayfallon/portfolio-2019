import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import HeaderStyles from "./HeaderStyles";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import { DownloadButton } from "../Buttons/Buttons";
import ReactGA from "react-ga";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = (props) => (
  <HeaderStyles>
    <a name="top" />
    <div className="header__inner">
      <div className="header__title logo__title">Brand:</div>
      <div className="header__title nav__title">Navigation:</div>
      <div className="header__title utilities__title">Utilities:</div>
      <div className="header__block logo__eleme">
        <Logo />
      </div>
      <div className="header__block nav__elem">
        <Nav />
      </div>
      <div className="header__block utilities__elem">
        <DownloadButton
          href={
            "https://jayfallon-portfolio-2020.s3.amazonaws.com/jayfallon-resume-2020.pdf"
          }
          title={"Download Resume"}
          label={"myResume"}
        />
      </div>
    </div>
  </HeaderStyles>
);

export default Header;
