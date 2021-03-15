import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import PostDetails from '../components/post-details/post-details';
import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
} from 'react-share';
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoReddit,
} from 'react-icons/io';

import {
	BlogPostDetailsWrapper,
	BlogPostFooter,
	PostShare,
} from './templates.style';

const BlogPostTemplate = ({ pageContext, ...props }: any) => {
	const post = props.data.wpPage;
	const siteUrl = props.data.site.siteMetadata.siteUrl;
	const shareUrl = urljoin(siteUrl, post.seo.canonical);

	return (
		<Layout>
			<SEO
				title={post.title}
				description={post.seo.metaDesc || post.excerpt}
			/>
			<BlogPostDetailsWrapper>
				<PostDetails
					title={post.title}
					date={post.date}
					preview={post.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
					description={post.content}
				/>

				<BlogPostFooter
					className={post.featuredImage == null ? 'center' : ''}
				>
					<PostShare>
						<FacebookShareButton url={shareUrl} quote={post.seo.metaDesc}>
							<IoLogoFacebook size='23px' />
						</FacebookShareButton>
						<TwitterShareButton url={shareUrl} title={post.title}>
							<IoLogoTwitter size='23px' />
						</TwitterShareButton>
						<RedditShareButton
							url={shareUrl}
							title={post.title}
						>
							<IoLogoReddit size='23px' />
						</RedditShareButton>
					</PostShare>
				</BlogPostFooter>
			</BlogPostDetailsWrapper>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPageBySlug($slug: String!) {
		site {
			siteMetadata {
				siteUrl
			}
		}
		wpPage(slug: { eq: $slug }) {
			slug
			uri
			title
			date(formatString: "MMMM DD, YYYY")
			content
			featuredImage {
				node {
					localFile {
						childImageSharp {
							fluid(maxWidth: 860, maxHeight: 500, quality: 100) {
								...GatsbyImageSharpFluid_withWebp_tracedSVG
							}
						}
					}
				}
			}
			seo {
				canonical
				metaDesc
			}
		}
	}
`;
