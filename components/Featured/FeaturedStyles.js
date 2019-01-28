import styled from "styled-components";

const FeaturedStyles = styled.main`
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
		line-height: 1.75;
		display: flex;
		flex-direction: column;
		@media (min-width: 900px) {
			font-size: 2rem;
			flex-direction: row;
			justify-content: space-between;
		}
	}
	h4 {
		color: ${props => props.theme.globalText};
		font-size: 1.7rem;
		font-weight: 700;
		line-height: 1.65;
		display: flex;
		flex-direction: column;
		@media (min-width: 900px) {
			font-size: 2rem;
			flex-direction: row;
			justify-content: space-between;
		}
		a {
			color: ${props => props.theme.globalText};
			font-size: 1.7rem;
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
	}

	.featured__grid {
		margin: 2rem 0.5rem;
		display: grid;
		grid-gap: 0.9rem;
		grid-template-columns: repeat(auto-fill, 28.4rem);
		.featured__grid--item {
			background-color: ${props => props.theme.flatWhite};
			padding: 0.9rem;
			box-shadow: ${props => props.theme.boxShadow};
			img {
				width: 26.6rem;
			}
		}
	}

	.featured__grid--onesie {
		margin: 2rem 0.5rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, 1fr);
		.featured__grid--item {
			background-color: ${props => props.theme.flatWhite};
			padding: 0.9rem;
			box-shadow: ${props => props.theme.boxShadow};
			img {
				width: 100%;
			}
		}
	}
`;

export default FeaturedStyles;
