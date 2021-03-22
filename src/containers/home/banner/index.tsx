import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BannerPosts from './banner-post';
import {
	BannerWrapper,
	BannerInner,
	BannerPostArea,
	BannerBlurbArea,
} from './style';
import { PostTitle, RawHTML } from '../../../components/post-details/post-details.style';

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			wpPage(slug: {eq: "home"}) {
				slug
				content
				title
			}
		}
	`);

	const blurb = data.wpPage;
	return (
		<BannerWrapper>
			<BannerInner>
				<BannerPostArea>
					<BannerPosts />
				</BannerPostArea>
				<BannerBlurbArea>
					<PostTitle>{blurb.title}</PostTitle>
					<RawHTML dangerouslySetInnerHTML={{ __html: blurb.content }} />
				</BannerBlurbArea>
			</BannerInner>
		</BannerWrapper>
	);
};

export default Banner;
