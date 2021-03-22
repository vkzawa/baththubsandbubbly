import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BannerPostWrapper, BannerPostRow } from './style';
import PostCard from '../../../../components/post-card/post-card';

type BannerPostsProps = {};

const BannerPosts: React.FunctionComponent<BannerPostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allWpPost(
				sort: {fields: date, order: DESC}
				limit: 1
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
										fluid(maxWidth: 985, quality: 100) {
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
		<BannerPostWrapper>
			<BannerPostRow>
				{posts.map(({ node }: any) => {
					const title = node.title || node.slug;
					return (
						<PostCard
							key={node.id}
							postColor={'#FFCCCA'}
							title={title}
							image={node.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
							url={node.uri}
							categories={node.categories}
							date={node.date}
						/>
					);
				})}
			</BannerPostRow>
		</BannerPostWrapper>
	);
};

export default BannerPosts;
