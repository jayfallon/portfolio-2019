import Link from "next/link";
import LogoStyles from "./LogoStyles";

const Logo = () => (
	<LogoStyles>
		<Link href="/">
			<a title="Jay Fallon | UX Engineer">
				<span>Jay Fallon | UX Engineer</span>
			</a>
		</Link>
	</LogoStyles>
);

export default Logo;
