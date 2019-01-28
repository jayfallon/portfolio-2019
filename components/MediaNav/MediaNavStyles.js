import styled from "styled-components";

const MediaNavStyles = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	li {
		font-size: 1.45rem;
	}
	a {
		color: ${props => props.theme.globalText};
	}
`;

export default MediaNavStyles;
