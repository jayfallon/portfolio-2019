import styled from "styled-components";

const HeaderStyles = styled.header`
	margin: ${props => props.theme.pageMargin};
	padding: 1.6rem;
	max-width: ${props => props.theme.pageWidth};
	@media (min-width: 900px) {
		padding: 3.2rem 1.6rem;
	}

	.header__inner {
		border-bottom: 0.1rem solid ${props => props.theme.globalRestText};
		display: grid;
		grid-template-columns: auto;
		grid-auto-rows: 8.956rem auto;
		grid-gap: 0;
		@media (min-width: 900px) {
			border-top: 0.1rem solid ${props => props.theme.globalRestText};
			grid-template-columns: 23.2rem auto 21.2rem;
			grid-auto-rows: auto;
		}
		.header__title {
			display: none;
			@media (min-width: 900px) {
				padding: 1rem;
				border-right: 0.1rem solid ${props => props.theme.globalRestText};
				border-bottom: 0.1rem solid ${props => props.theme.globalRestText};
				color: ${props => props.theme.globalRestText};
				font-size: 1.3rem;
				text-transform: uppercase;
				display: block;
			}
		}

		.header__block {
			padding: 1.6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			@media (min-width: 900px) {
				padding: 1.6rem;
				border-right: 0.1rem solid ${props => props.theme.globalRestText};
			}
		}

		.utilities__elem,
		.utilities__title {
			border-right: 0;
		}
	}
`;

export default HeaderStyles;
