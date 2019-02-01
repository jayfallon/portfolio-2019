import Link from "next/link";
import Logo from "../Logo/Logo";
import FooterStyles from "./FooterStyles";

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
						<Link href="https://www.linkedin.com/in/jayfallon/">
							<a rel="noreferrer" target="_blank" title="LinkedIn">
								<i className="fab fa-linkedin" />
								<span>LinkedIn</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://github.com/jayfallon">
							<a rel="noreferrer" target="_blank" title="GitHub">
								<i className="fab fa-github" />
								<span>GitHub</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://medium.com/@jayfallon">
							<a rel="noreferrer" target="_blank" title="Medium">
								<i className="fab fa-medium-m" />
								<span>Medium</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/jayfallon/">
							<a rel="noreferrer" target="_blank" title="Instagram">
								<i className="fab fa-instagram" />
								<span>Instagram</span>
							</a>
						</Link>
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
