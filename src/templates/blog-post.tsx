import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
// import { DiscussionEmbed } from 'disqus-react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
// import FeaturedCard from '../components/featured-card/featured-card';
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
	IoIosArrowBack,
	IoIosArrowForward,
} from 'react-icons/io';

import {
	BlogPostDetailsWrapper,
	PostPaginationWrapper,
	PrevButton,
	NextButton,
	PostName,
	Text,
	ThumbImg,
	PostInfo,
	// RelatedPostWrapper,
	// RelatedPostItems,
	// RelatedPostItem,
	BlogPostFooter,
	PostShare,
	// BlogPostComment,
} from './templates.style';

const colors = ['#FFCCCA', '#FFEDEC', '#F8E9DD', '#FCEED1'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

const BlogPostTemplate = ({ pageContext, ...props }: any) => {
	const post = props.data.wpPost;
	const siteUrl = props.data.site.siteMetadata.siteUrl;
	const shareUrl = urljoin(siteUrl, post.seo.canonical);
	const categories = post.categories;
	const { next, previous } = pageContext;

	// const disqusConfig = {
	// 	shortname: process.env.GATSBY_DISQUS_NAME,
	// 	config: { identifier: slug, post.title },
	// };

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
					categories={categories}
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

				<PostPaginationWrapper>
					<PrevButton>
						{next && (
							<Link to={next.uri}>
								<ThumbImg>
									<img
										src={next.featuredImage?.node?.localFile?.childImageSharp?.fluid?.srcWebp || null}
										alt={next.title}
									/>
								</ThumbImg>
								<PostInfo>
									<Text>
										<IoIosArrowBack />
										&nbsp; Previous
									</Text>
									<PostName>
										<h2>{next.title}</h2>
									</PostName>
								</PostInfo>
							</Link>
						)}
					</PrevButton>

					<NextButton>
						{previous && (
							<Link to={previous.uri}>
								<ThumbImg>
									<img
										src={previous.featuredImage?.node?.localFile?.childImageSharp?.fluid?.srcWebp || null}
										alt={previous.title}
									/>
								</ThumbImg>
								<PostInfo>
									<Text>
										Next &nbsp;
										<IoIosArrowForward />
									</Text>
									<PostName>
										<h2>{previous.title}</h2>
									</PostName>
								</PostInfo>
							</Link>
						)}
					</NextButton>
				</PostPaginationWrapper>

				{/* <BlogPostComment
					className={post.frontmatter.cover == null ? 'center' : ''}
				>
					<DiscussionEmbed {...disqusConfig} />
				</BlogPostComment> */}
			</BlogPostDetailsWrapper>

			{/* {edges.length !== 0 && (
				<RelatedPostWrapper>
					<RelatedPostItems>
						{edges.map(({ node }: any) => (
							<RelatedPostItem key={node.id}>
								<FeaturedCard
									postColor={getRandomColor(colors)}
									title={title}
									image={
										node.frontmatter.cover == null
											? null
											: node.frontmatter.cover.childImageSharp.fluid
									}
									url={node.uri}
									categories={node.frontmatter.categories}
									date={node.date}
									overlay={true}
								/>
							</RelatedPostItem>
						))}
					</RelatedPostItems>
				</RelatedPostWrapper>
			)} */}
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				siteUrl
			}
		}
		wpPost(slug: { eq: $slug }) {
			slug
			uri
			title
			date(formatString: "MMMM DD, YYYY")
			excerpt
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
			categories {
				nodes {
					name
					uri
				}
			}
			tags {
				nodes {
					name
					uri
				}
			}
			seo {
				canonical
				metaDesc
			}
		}
	}
`;
