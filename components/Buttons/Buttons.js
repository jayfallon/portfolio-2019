import Link from "next/link";
import { DownloadButtonStyles } from "./ButtonStyles";

const DownloadButton = props => (
	<DownloadButtonStyles>
		<Link href={props.href}>
			<a rel="noreferrer" title={props.title} target="_blank">
				{props.title}
				<i className="fas fa-file-pdf" />
			</a>
		</Link>
	</DownloadButtonStyles>
);

export { DownloadButton };
