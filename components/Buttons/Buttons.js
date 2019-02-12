import Link from "next/link";
import { DownloadButtonStyles } from "./ButtonStyles";
var ReactGA = require("react-ga");

const DownloadButton = props => (
	<DownloadButtonStyles>
		<ReactGA.OutboundLink rel="noreferrer" eventLabel={props.label} to={props.href} target="_blank">
			{props.title} <i className="fas fa-file-pdf" />
		</ReactGA.OutboundLink>
	</DownloadButtonStyles>
);

export { DownloadButton };
