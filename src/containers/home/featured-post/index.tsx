import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FeaturedCard from '../../../components/featured-card/featured-card';
import { FeaturedPostWrapper, FeaturedPostRow, FeaturedPostCol } from './style';

type FeaturedPostsProps = {};

const colors = ['#FFCCCA', '#FFEDEC', '#F8E9DD', '#FCEED1'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allWpPost(
				sort: {fields: date, order: DESC}
				limit: 3
				skip: 1
				filter: {isSticky: {eq: true}}
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
										fluid(maxWidth: 435, maxHeight: 400, quality: 100) {
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
	`);

	const posts = data.allWpPost.edges;

	return (
		<FeaturedPostWrapper>
			<FeaturedPostRow>
				{posts.map(({ node }: any) => {
					const title = node.title || node.slug;
					return (
						<FeaturedPostCol key={node.id}>
							<FeaturedCard
								postColor={getRandomColor(colors)}
								title={title}
								image={node.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
								url={node.uri}
								categories={node.categories}
								date={node.date}
								overlay={true}
							/>
						</FeaturedPostCol>
					);
				})}
			</FeaturedPostRow>
		</FeaturedPostWrapper>
	);
};

export default FeaturedPosts;
