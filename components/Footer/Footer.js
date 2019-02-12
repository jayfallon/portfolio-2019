import Link from "next/link";
import Logo from "../Logo/Logo";
import FooterStyles from "./FooterStyles";
var ReactGA = require("react-ga");

const FooterLink = props => (
	<ReactGA.OutboundLink rel="noreferrer" eventLabel={props.label} to={props.href} target="_blank">
		<i className={`fab ${props.faicon}`} />
		<span>{props.title}</span>
	</ReactGA.OutboundLink>
);

const Footer = props => (
	<FooterStyles>
		<div className="footer__inner">
			<div className="footer__title logo__title">Brand:</div>
			<div className="footer__title contact__title">Contact:</div>
			<div className="footer__title social__title">Follow:</div>
			<div className="footer__title utilities__title">Back to top:</div>
			<div className="footer__block logo__eleme">
				<Logo />
			</div>
			<div className="footer__block contact__elem">
				<ul>
					<li>
						<Link href="mailto:jayfallon@gmail.com">
							<a>
								<i className="far fa-at" />
								<span>jayfallon@gmail.com</span>
							</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer__block social__elem">
				<ul>
					<li>
						<FooterLink
							href={"https://www.linkedin.com/in/jayfallon/"}
							label={"LinkedIn Outbound"}
							title={"LinkedIn"}
							faicon={"fa-linkedin"}
						/>
					</li>
					<li>
						<FooterLink
							href={"https://github.com/jayfallon"}
							label={"GitHub Outbound"}
							title={"GitHub"}
							faicon={"fa-github"}
						/>
					</li>
					<li>
						<FooterLink
							href={"https://medium.com/@jayfallon"}
							label={"Medium Outbound"}
							title={"Medium"}
							faicon={"fa-medium-m"}
						/>
					</li>
					<li>
						<FooterLink
							href={"https://www.instagram.com/jayfallon/"}
							label={"Instagram Outbound"}
							title={"Instagram"}
							faicon={"fa-instagram"}
						/>
					</li>
				</ul>
			</div>
			<div className="footer__block utilities__elem">
				<Link href="#top">
					<a title="back to top">
						<i className="fal fa-arrow-to-top" />
					</a>
				</Link>
			</div>
		</div>
	</FooterStyles>
);

export default Footer;
