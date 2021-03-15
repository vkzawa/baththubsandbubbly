import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PostDetailsWrapper = styled.div`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	width: 860px;
	@media (max-width: 1200px) {
		width: 800px;
	}
	@media (max-width: 1024px) {
		width: 720px;
	}
	@media (max-width: 767px) {
		width: 100%;
	}
	&.image_left {
		@media (min-width: 1024px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: flex-start;
		}
		.post_preview {
			margin-top: 0;
			@media (min-width: 1024px) {
				flex: 0 0 42%;
				max-width: 42%;
				padding-right: 60px;
				margin: 0;
				&:before {
					width: calc(80% - 60px);
				}
			}
		}
		.post_des_wrapper {
			@media (min-width: 1024px) {
				flex: 0 0 58%;
				max-width: 58%;
				margin: 0;
			}
			.post_des {
				margin-top: 60px;
			}
		}
	}
`;

export const PostTitle = styled.h1`
	text-align: center;
	color: ${themeGet('colors.primary', '#121213')};
	line-height: 1;
	margin-bottom: 0.25em;
	font-family: ${themeGet('fontFamily.0', "'Poppins', sans-serif")};
	font-size: 32px;

	@media (min-width: 720px) {
		font-size: 48px;
	}
`;

export const PostDate = styled.div`
	text-align: center;
	font-size: ${themeGet('fontSizes.5', '18')}px;
	color: ${themeGet('colors.lightTextColor', '#121213')};
	margin-bottom: 50px;
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.4', '16')}px;
	}
	@media (max-width: 767px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
		margin-bottom: 40px;
	}
	@media (max-width: 575px) {
		font-size: ${themeGet('fontSizes.2', '14')}px;
		margin-bottom: 30px;
	}
`;

export const PostCategory = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
	margin-left: -5px;
	margin-right: -5px;
	@media (max-width: 1024px) {
		margin-bottom: 20px;
	}
	@media (max-width: 767px) {
		margin-bottom: 15px;
	}
	a {
		font-size: 12px;
		background-color: ${themeGet('colors.primary', '#FF2E55')};
		font-weight: ${themeGet('fontWeights.6', '700')};
		text-transform: uppercase;
		color: ${themeGet('colors.textColor', '#000000')};
		padding: 2px 10px;
		display: inline-block;
		margin: 0 5px 5px;
		@media (max-width: 575px) {
			font-size: ${themeGet('fontSizes.0', '10')}px;
		}
	}
`;

export const PostPreview = styled.div`
	margin: 30px -30px 0;
	position: relative;
	@media (max-width: 1200px) {
		margin-top: 40px;
	}
	@media (max-width: 575px) {
		margin-top: 35px;
	}
`;

export const PostDescriptionWrapper = styled.div`
	margin-top: 60px;
	max-width: 100%;
	@media (max-width: 575px) {
		margin-top: 50px;
	}
`;

export const PostDescription = styled.div`
	font-size: ${themeGet('fontSizes.6', '16')}px;
	@media (max-width: 767px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
	}
	.mermaid {
		margin-bottom: 60px;
		@media (max-width: 767px) {
			margin-bottom: 40px;
		}
	}

	p {
		font-size: ${themeGet('fontSizes.6', '16')}px;
		font-weight: ${themeGet('fontWeights.2', '300')};
		font-family: 'Lato';
		color: ${themeGet('colors.textLightColor', '#5e5e5e')};
		margin-bottom: 25px;
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.3', '15')}px;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 500;
		margin-bottom: 0.75em;
	}

	h1 {
		font-size: 30px;
		margin-bottom: 0.75em;
	}

	h2 {
		font-size: 25px;
		margin-bottom: 0.75em;
	}

	h3 {
		font-size: 21px;
	}

	h4 {
		font-size: 17px;
	}

	h5 {
		font-size: 15px;
	}

	h6 {
		font-size: 13px;
	}

	ol,
	ul {
		margin-left: 1.5rem;
		margin-bottom: 2rem;
		line-height: 2;
	}

	li {
		margin-bottom: 0.45rem;

		p {
			margin-bottom: 1em;
		}
	}

	blockquote {
		font-family: 'Lato', sans-serif;
		font-size: 21px;
		font-weight: 500;
		line-height: 2;
		margin: 60px 0;
		@media (max-width: 1200px) {
			margin: 50px 0;
			font-size: 19px;
		}
		@media (max-width: 575px) {
			margin: 40px 0;
			font-size: 15px;
		}
		&:before,
		&:after {
			content: '';
			width: 30px;
			height: 1px;
			display: block;
			background: #292929;
		}
		&:before {
			margin-bottom: 60px;
			@media (max-width: 1200px) {
				margin-bottom: 50px;
			}
			@media (max-width: 575px) {
				margin-bottom: 40px;
			}
		}
		&:after {
			margin-top: 60px;
			@media (max-width: 1200px) {
				margin-top: 50px;
			}
			@media (max-width: 575px) {
				margin-top: 40px;
			}
		}

		p {
			font-size: 21px;
			font-weight: 500;
			line-height: 2;
			margin-bottom: 23px;
			@media (max-width: 1200px) {
				font-size: 19px;
			}
			@media (max-width: 1200px) {
				font-size: 17px;
			}
			@media (max-width: 575px) {
				font-size: 15px;
			}
			&:last-child {
				margin-bottom: 0;
			}
		}
		h4 {
			font-size: 16px;
			margin: 0;
			font-family: 'Fira Sans', sans-serif;
			font-weight: 400;
		}
	}

	a {
		font-weight: 500;
		transition: 0.15s ease-in-out;
		color: ${themeGet('primary', '#D10068')};
	}
`;

export const PostTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 60px;

	a {
		display: block;
		margin-right: 30px;
		font-size: 14px;
		font-weight: 400;
		color: ${themeGet('primary', '#D10068')};
	}
`;

export const RawHTML = styled.div`
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	letter-spacing: 0.05em;
	font-weight: ${themeGet('fontWeights.2', '300')};
	font-family: 'Lato';
	color: ${themeGet('colors.textLightColor', '#5e5e5e')};
	margin-bottom: 25px;
	line-height: 1.625;
	font-size: ${themeGet('fontSizes.6', '16')}px;

	@media (max-width: 767px) {
		font-size: 16px;
		line-height: 1.25;
	}

	:target {
		&:before {
			content: '';
			display: block;
			position: relative;
			left: 0;
			margin-top: -130px;
			padding-top: 130px;
			height: 1px;
			visibility: hidden;
			pointer-events: none;
			z-index: -1;
		}
	}

	> *:last-child {
		margin-bottom: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 1rem;
		text-align: left;
	}
	/* fontSizes: [10, 12, 14, 15, 16, 18, 24, 30, 36, 48, 80, 96], */

	h1 {
		font-size: ${themeGet('fontSizes.10', '16')}px;
	}
	h2 {
		font-size: ${themeGet('fontSizes.9', '16')}px;
	}
	h3 {
		font-size: ${themeGet('fontSizes.8', '16')}px;
	}
	h4 {
		font-size: ${themeGet('fontSizes.7', '16')}px;
	}
	h5 {
		font-size: ${themeGet('fontSizes.6', '16')}px;
	}
	h6 {
		font-size: ${themeGet('fontSizes.5', '16')}px;
	}

	p {
		margin-bottom: 1em;
		line-height: 1.625;
		font-size: ${themeGet('fontSizes.6', '16')}px;

		@media (max-width: 767px) {
			font-size: 18px;
		}
	}

	a,
	a:visited {
		color: ${themeGet('colors.primary', '#000')};
		display: inline-block;
		font-weight: bold;
	}

	b,
	strong {
		font-weight: bold;
	}

	i,
	em {
		font-style: italic;
	}

	mark {
		background-color: ${themeGet('colorStyles.primary.backgroundColor', '#d0d0d0')};
	}

	hr {
		display: block;
		width: 100%;
		height: 2px;
		background-color: ${themeGet('colorStyles.primary.backgroundColor', '#d0d0d0')};
		border: none;
	}

	abbr {
		text-decoration-color: ${themeGet('colorStyles.primary.backgroundColor', '#d0d0d0')};
		cursor: help;
	}

	small {
		font-size: 0.8em;
		line-height: 1.2;
	}

	blockquote {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1em;
		font-size: 1.4em;
		font-weight: bold;
		max-width: 800px;
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: center;

		> * {
			font-size: inherit;
			margin: 0;
		}
	}

	figure {
		> figcaption {
			font-size: 0.6em;
			font-style: italic;
		}
	}

	code {
		display: block;
		width: 100%;
		overflow-x: auto;
		background-color: rgba(black, 0.1);
		padding: 0.5em;
	}

	> * + h1 {
		margin-top: 20px;
	}

	h1 + h2 {
		margin-top: 0;
	}

	ol,
	ul {
		padding-left: 1.5em;
	}

	ul ul {
		margin-bottom: 0;
		margin-top: 10px;
		padding-left: 20px;


		&::marker{
			color: ${themeGet('colorStyles.primary.backgroundColor', '#d0d0d0')};
			}
	}

	li {
		margin-bottom: 10px;

		&::marker{
			color: ${themeGet('colorStyles.primary.backgroundColor', '#d0d0d0')};
		}
	}

	ol li {
		&::marker{
			color: ${themeGet('colorStyles.primary.backgroundColor', '#d0d0d0')};
		}
	}

	ol {
		list-style-type: decimal;
	}

	ol ol {
		list-style-type: lower-alpha;
	}

	ol ol ol {
		list-style-type: lower-roman;
	}

	ul {
		list-style-type: disc;
	}

	ul ul {
		list-style-type: circle;
	}

	img {
		height: auto;
		max-width: 100%;
	}

	figure {
		margin: 0;
	}

	.alignright,
	.alignleft {
		max-width: 50%;

		img {
			width: 100%;
			height: auto;
		}
	}

	.alignright {
		float: right;
		margin-right: 0;
		margin-left: 1em;
	}

	.alignleft {
		float: left;
		margin-left: 0;
		margin-right: 1em;
	}

	.has-text-align-center { text-align: center; }
	.has-text-align-right { text-align: right; }
	.has-text-align-justify { text-align: justify; }
`
