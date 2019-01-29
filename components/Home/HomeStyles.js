import styled from "styled-components";

const HomeStyles = styled.main`
	margin: ${props => props.theme.pageMargin};
	padding: 0 1.6rem;
	max-width: ${props => props.theme.pageWidth};
	h2 {
		color: ${props => props.theme.globalText};
		font-family: source-serif-pro, serif;
		font-size: 2.2rem;
		font-weight: 700;
		@media (min-width: 900px) {
			font-size: 2.6rem;
		}
	}
	h3 {
		color: ${props => props.theme.globalText};
		font-family: source-serif-pro, serif;
		font-size: 1.75rem;
		font-weight: 700;
		line-height: 2rem;
		display: flex;
		flex-direction: column;
		@media (min-width: 900px) {
			font-size: 2rem;
			flex-direction: row;
			justify-content: space-between;
		}
		span:first-child:after {
			content: ",";
			@media (min-width: 900px) {
				content: "";
			}
		}
	}
	section {
		padding: 3rem 0.8rem;
		border-bottom: 0.1rem solid ${props => props.theme.globalText};
		:last-child {
			border: 0;
		}
		@media (min-width: 900px) {
			padding: 2rem 0.8rem;
		}
	}
	article {
		padding-top: 2.4rem;
		@media (min-width: 900px) {
			padding-top: 4rem;
		}
	}
	p {
		padding-top: 0.8rem;
		font-size: 1.6rem;
		line-height: 1.5;
		:last-child {
			padding-bottom: 4rem;
			@media (min-width: 900px) {
				padding-top: 1.6rem;
				padding-bottom: 8rem;
				font-size: 1.9rem;
				line-height: 1.6;
			}
		}
		@media (min-width: 900px) {
			padding-top: 1.6rem;
			font-size: 1.9rem;
			line-height: 1.6;
		}
	}
	p.title {
		font-weight: 700;
	}

	.home__grid {
		margin: 2rem 0.5rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, 1fr);
		.home__grid--item {
			background-color: ${props => props.theme.flatWhite};
			padding: 0.9rem;
			box-shadow: ${props => props.theme.boxShadow};
			img {
				width: 100%;
			}
		}
	}
`;

export default HomeStyles;
