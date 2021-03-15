import * as React from 'react';
import { graphql } from 'gatsby';
import PostCard from '../components/post-card/post-card';
// import Pagination from '../components/pagination/pagination';
import Layout from '../containers/layout';
// import SEO from '../components/seo';
import { BlogPostsWrapper, PostRow, PostCol } from './templates.style';

const BlogList = (props: any) => {
	const { data } = props;
	const Posts = data.allWpPost.edges;
	// const { currentPage, numPages } = props.pageContext;
	// const isFirst = currentPage === 1;
	// const isLast = currentPage === numPages;
	// const prevPage = currentPage - 1 === 1 ? '/page/1' : `/page/${(currentPage - 1).toString()}`;
	// const nextPage = `/page/${(currentPage + 1).toString()}`;
	// const PrevLink = !isFirst && prevPage;
	// const NextLink = !isLast && nextPage;

	return (
		<Layout>
			{/* <SEO title={`Page ${currentPage}`} /> */}

			<BlogPostsWrapper>
				<PostRow>
					{Posts.map(({ node }: any) => {
						return (
							<PostCol key={node.id}>
								<PostCard
									title={node.title || node.slug}
									image={node.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
									url={node.uri}
									date={node.date}
									tags={node.categories}
									// readTime={node.fields.readingTime.text}
								/>
							</PostCol>
						);
					})}
				</PostRow>

				{/* <Pagination
					prevLink={PrevLink}
					nextLink={NextLink}
					currentPage={`${currentPage}`}
					totalPage={`${numPages}`}
				/> */}
			</BlogPostsWrapper>
		</Layout>
	);
};

export default BlogList;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		sitePage {
			path
		}
		allWpPost(
			sort: {fields: date, order: DESC}
			limit: 10
		) {
			totalCount
			edges {
				node {
					id
					slug
					uri
					title
					date(formatString: "MMMM DD, YYYY")
					excerpt
					featuredImage {
						node {
							localFile {
								childImageSharp {
									fluid(maxWidth: 1170, quality: 90) {
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
				}
			}
		}
	}
`;
