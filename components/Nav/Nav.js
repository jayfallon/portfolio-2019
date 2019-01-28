import Link from "next/link";
import NavStyles from "./NavStyles";

const Nav = () => (
	<NavStyles>
		<ul>
			<li>
				<Link href="/">
					<a title="Home Page">Home</a>
				</Link>
			</li>
			<li>
				<Link href="/featured">
					<a title="Featured Work Page">Featured Work</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a title="About Page">About</a>
				</Link>
			</li>
			<li>
				<Link href="/resume">
					<a title="Resume Page">Resume</a>
				</Link>
			</li>
		</ul>
	</NavStyles>
);

export default Nav;
