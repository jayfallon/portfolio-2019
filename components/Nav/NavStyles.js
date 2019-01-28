import styled from "styled-components";

const NavStyles = styled.nav`
	ul {
		display: flex;
		li {
			padding: 0 1rem;
			font-size: 1.6rem;
			@media (min-width: 900px) {
				padding: 0 1.75rem;
			}
		}
		a {
			color: ${props => props.theme.globalText};
			text-decoration: none;
			:hover {
				color: ${props => props.theme.globalText};
			}
		}
	}
`;

export default NavStyles;
