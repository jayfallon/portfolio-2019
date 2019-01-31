import styled from "styled-components";

const LogoStyles = styled.h1`
	display: flex;
	a {
		background-image: url("https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/jayfallon-logo.svg");
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
