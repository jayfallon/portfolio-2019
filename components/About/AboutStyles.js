import styled from "styled-components";

const AboutStyles = styled.main`
	margin: ${props => props.theme.pageMargin};
	padding: 0 1.6rem;
	max-width: ${props => props.theme.pageWidth};
	font-size: 1.6rem;
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
	}
	.about__grid {
		margin: 3rem auto;
		width: 32rem;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(3, 10rem);
		@media (min-width: 470px) {
			width: 43rem;
			grid-template-columns: repeat(4, 10rem);
		}
		@media (min-width: 580px) {
			width: 54rem;
			grid-template-columns: repeat(5, 10rem);
		}
		@media (min-width: 690px) {
			width: 65rem;
			grid-template-columns: repeat(6, 10rem);
		}
		@media (min-width: 820px) {
			width: 76rem;
			grid-template-columns: repeat(7, 10rem);
		}
		@media (min-width: 910px) {
			width: 87rem;
			grid-template-columns: repeat(8, 10rem);
		}

		div {
			background-color: ${props => props.theme.flatWhite};
			padding: 0.6rem;
			border: 0.1rem solid ${props => props.theme.aboutGridBorder};
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			@media (min-width: 820px) {

			}
			i {
				color: ${props => props.theme.aboutGridText};
				font-size: 6rem;
			}
			
			span {
				padding-top: 0.5rem;
				color: ${props => props.theme.aboutGridText};
				font-size: 1.25rem;
				text-align: center;
			}
		}
`;

export default AboutStyles;
