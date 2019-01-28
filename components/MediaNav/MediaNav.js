import Link from "next/link";
import MediaNavStyles from "./MediaNavStyles";

const MediaNav = () => (
	<MediaNavStyles>
		<li>
			<Link href="https://www.linkedin.com/in/jayfallon/">
				<a title="LinkedIn Profile" target="_blank">
					LinkedIn
				</a>
			</Link>
		</li>
		<li>
			<Link href="https://github.com/jayfallon">
				<a title="GitHub Profile" target="_blank">
					GitHub
				</a>
			</Link>
		</li>
	</MediaNavStyles>
);

export default MediaNav;
