import Link from "next/link";
import styled from "styled-components";

const DownloadButtonStyles = styled.div`
	a {
		background-color: transparent;
		padding: 1.5rem;
		border: 0.1rem solid ${props => props.theme.globalText};
		color: ${props => props.theme.globalText};
		font-size: 1.6rem;
		text-decoration: none;
		:hover {
			background-color: ${props => props.theme.globalText};
			color: ${props => props.theme.globalBg};
		}
		:active,
		:focus {
			background-color: ${props => props.theme.easyBlue};
			color: ${props => props.theme.globalBg};
			border-color: ${props => props.theme.flatWhite};
		}
		i {
			margin-left: 0.6rem;
		}
	}
`;

export { DownloadButtonStyles };
