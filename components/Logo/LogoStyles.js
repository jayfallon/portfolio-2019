import styled from "styled-components";

const LogoStyles = styled.h1`
	display: flex;
	a {
		background-image: url("./static/graphics/jayfallon-logo.svg");
		background-repeat: no-repeat;
		background-size: 100%;
		width: 20rem;
        height: 5.5rem;
        @media (min-width: 900px) {
            height: 8rem;
        }
		span {
			display: none;
		}
	}
`;

export default LogoStyles;
