import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import PostCard from '../components/post-card/post-card';
import SEO from '../components/seo';
import {
	TagPostsWrapper,
	TagPageHeading,
	TagName,
	CategoryPostCol,
	PostsList,
	PostRow,
} from './templates.style';

const Tags = ({ pageContext, data }: any) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allWpPost;

	const colors = ['#FFCCCA', '#FFEDEC', '#F8E9DD', '#FCEED1'];
	function getRandomColor(values: string[]) {
		const random = Math.floor(Math.random() * values.length);
		return values[random];
	}

	return (
		<Layout>
			<SEO title={tag} description={`A collection of ${totalCount} post`} />

			<TagPostsWrapper>
				<TagPageHeading>
					<TagName>{tag}</TagName>
					{`A collection of ${totalCount} post`}
				</TagPageHeading>
				<PostRow>
					<PostsList>
						{edges.map(({ node }: any) => (
							<CategoryPostCol key={node.id}>
								<PostCard
									postColor={getRandomColor(colors)}
									title={node.title}
									image={node.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
									date={node.date}
									url={node.uri}
								/>
							</CategoryPostCol>
						))}
					</PostsList>
				</PostRow>
			</TagPostsWrapper>
		</Layout>
	);
};

export default Tags;

export const pageQuery = graphql`
	query($slug: String) {
		allWpPost(
			sort: {fields: date, order: DESC}
			limit: 3
			filter: {tags: {nodes: {elemMatch: {slug: {eq: $slug}}}}}
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
									fluid(maxWidth: 635, maxHeight: 390, quality: 100) {
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
