import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostCard from '../../../components/post-card/post-card';
import PostCardFull from '../../../components/post-card-full/post-card-full';
import Button from '../../../components/button/button';
import BlogPostsWrapper, {
	PostRow,
	PostsList,
	PostCol,
	LoadMoreButton,
} from './style';

// small utility functions
function isFluid(value: number) {
	// return !(value % 5);
	return false;
}
const colors = ['#FFCCCA', '#FFEDEC', '#F8E9DD', '#FCEED1'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allWpPost(
				sort: {fields: date, order: DESC}
				filter: {isSticky: {ne: true}}
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
										fluid(maxWidth: 1360, quality: 100) {
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
	const totalPost = data.allWpPost.totalCount;

	const [visiblePost, setVisiblePost] = useState(8);
	const [loading, setLoading] = useState(false);

	const fetchMoreData = () => {
		setLoading(true);
		setTimeout(function () {
			setVisiblePost((prev) => prev + 8);
			setLoading(false);
		}, 1000);
	};

	return (
		<BlogPostsWrapper>
			<PostRow>
				<PostsList>
					{posts.slice(0, visiblePost).map(({ node }: any, idx: number) => {
						const title = node.title || node.slug;
						if (isFluid(idx)) {
							return (
								<PostCol key={node.id} className='full_width'>
									<PostCardFull
										postColor={getRandomColor(colors)}
										title={title}
										image={node.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
										url={node.uri}
										categories={node.categories}
										date={node.date}
									/>
								</PostCol>
							);
						}
						return (
							<PostCol key={node.id}>
								<PostCard
									postColor={getRandomColor(colors)}
									title={title}
									image={node.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
									url={node.uri}
									categories={node.categories}
									date={node.date}
								/>
							</PostCol>
						);
					})}
				</PostsList>
				<LoadMoreButton>
					{visiblePost < totalPost && (
						<Button
							title='More Stories'
							type='submit'
							onClick={fetchMoreData}
							isLoading={loading}
							loader='Loading..'
						/>
					)}
				</LoadMoreButton>
			</PostRow>
		</BlogPostsWrapper>
	);
};

export default Posts;
