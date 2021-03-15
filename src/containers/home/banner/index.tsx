import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BannerPosts from './banner-post';
// import TrendingPost from '../../../components/trending-post/trending-post';
import {
	BannerWrapper,
	BannerInner,
	BannerPostArea,
	// TrendingPosts,
	// Title,
} from './style';
import { PostTitle, RawHTML } from '../../../components/post-details/post-details.style';

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
	// const data = useStaticQuery(graphql`
	// 	`);

	// const blurb = data.wpPage;
	return (
		<BannerWrapper>
			<BannerInner>
				<BannerPostArea>
					<BannerPosts />
				</BannerPostArea>
				{/* <TrendingPosts>
					<Title>Trending Posts</Title>
					{posts.map(({ node }: any) => {
						const title = node.title || node.slug;
						return (
							<TrendingPost
								key={node.id}
								title={title}
								url={node.uri}
								tags={node.tags}
							/>
						);
					})}
				</TrendingPosts> */}
			</BannerInner>
		</BannerWrapper>
	);
};

export default Banner;
