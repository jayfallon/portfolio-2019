import styled from "styled-components";

const FooterStyles = styled.footer`
	margin: ${props => props.theme.pageMargin};
	padding: 1.6rem;
	max-width: ${props => props.theme.pageWidth};
	@media (min-width: 900px) {
		padding: 3.2rem 1.6rem;
	}

	.footer__inner {
		background-color: ${props => props.theme.flatWhite};
		border: 0.1rem solid ${props => props.theme.globalRestText};
		display: grid;
		grid-template-columns: auto;
		grid-auto-rows: 8.956rem auto;
		grid-gap: 0;
		@media (min-width: 900px) {
			border-top: 0.1rem solid ${props => props.theme.globalRestText};
			grid-template-columns: 23.2rem auto auto auto;
			grid-auto-rows: auto;
		}

		a {
			color: ${props => props.theme.globalText};
			font-size: 1.6rem;
			text-decoration: none;
		}
		.footer__title {
			display: none;
			@media (min-width: 900px) {
				padding: 1rem;
				border-right: 0.1rem solid ${props => props.theme.globalRestText};
				border-bottom: 0.1rem solid ${props => props.theme.globalRestText};
				color: ${props => props.theme.globalText};
				font-size: 1.25rem;
				text-transform: uppercase;
				display: block;
			}
		}

		.footer__block {
			padding: 1.6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			@media (min-width: 900px) {
				padding: 1.6rem;
				border-right: 0.1rem solid ${props => props.theme.globalRestText};
				:last-child {
					border: 0;
				}
			}
		}

		.contact__elem {
			display: flex;
			justify-content: center;
			align-items: stretch;

			ul {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
			}

			a {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;

				i {
					font-size: 3rem;
				}
				span {
					margin-top: 0.5rem;
					font-size: 1.6rem;
				}
			}
		}

		.social__elem {
			display: flex;
			align-items: stretch;
			ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;
				@media (min-width: 900px) {
					width: 100%;
					justify-content: center;
				}
				li {
					margin: 0 0.5rem;
					text-align: center;
				}
				a {
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					i {
						font-size: 3rem;
					}
					span {
						margin-top: 0.5rem;
						font-size: 1.6rem;
					}
				}
			}
		}

		.utilities__elem {
			i {
				font-size: 3rem;
			}
		}

		.contact__elem .utilities__elem,
		.utilities__title {
			border-right: 0;
		}
	}
`;

export default FooterStyles;
