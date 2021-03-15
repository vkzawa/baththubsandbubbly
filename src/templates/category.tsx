import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import PostCard from '../components/post-card/post-card';
import SEO from '../components/seo';
import {
	TagPostsWrapper,
	TagPageHeading,
	TagName,
	PostRow,
	PostsList,
	CategoryPostCol,
} from './templates.style';

const Category = ({ pageContext, data }: any) => {
	const category = data.wpCategory;
	const { edges, totalCount } = data.allWpPost;

	const colors = ['#FFCCCA', '#FFEDEC', '#F8E9DD', '#FCEED1'];
	function getRandomColor(values: string[]) {
		const random = Math.floor(Math.random() * values.length);
		return values[random];
	}

	return (
		<Layout>
			<SEO
				title={category.name}
				description={`A collection of ${totalCount} post`}
			/>

			<TagPostsWrapper>
				<TagPageHeading>
					<TagName>{category.name}</TagName>
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

export default Category;

export const pageQuery = graphql`
	query($slug: String) {
		wpCategory(slug: {eq: $slug}) {
			name
		}
		allWpPost(
			sort: {fields: date, order: DESC}
			limit: 3
			filter: {categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}
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
