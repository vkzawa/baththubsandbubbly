import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';
import {
	PostDetailsWrapper,
	PostTitle,
	PostDate,
	PostCategory,
	PostPreview,
	PostDescriptionWrapper,
	// PostDescription,
	RawHTML,
	PostTags,
} from './post-details.style';

type PostDetailsProps = {
	title: string;
	date?: string;
	preview?: any;
	description: any;
	tags?: [];
	categories?: {
		uri: string,
		name: string,
	}[];
	className?: string;
	imagePosition?: 'left' | 'top';
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
	title,
	date,
	preview,
	description,
	tags,
	categories,
	className,
	imagePosition,
	...props
}) => {
	const addClass: string[] = ['post_details'];

	if (imagePosition == 'left') {
		addClass.push('image_left');
	}

	if (className) {
		addClass.push(className);
	}

	return (
		<PostDetailsWrapper {...props} className={addClass.join(' ')}>
			{imagePosition == 'left' ? (
				<>
					{preview == null ? null : (
						<PostPreview className='post_preview'>
							<Img fluid={preview} alt={title} />
						</PostPreview>
					)}
				</>
			) : (
				''
			)}

			{imagePosition == 'top' ? (
				<>
					{categories == null ? null : (
						<PostCategory>
							{Boolean(categories.length) &&
								categories.map((category, index) => (
									<Link key={index} to={category.uri}>
										{category.name}
									</Link>
								))}
						</PostCategory>
					)}
					<PostTitle>{title}</PostTitle>
					<PostDate>{date}</PostDate>
				</>
			) : (
				''
			)}

			{imagePosition == 'top' ? (
				<>
					{preview == null ? null : (
						<PostPreview className='post_preview'>
							<Img fluid={preview} alt={title} />
						</PostPreview>
					)}
				</>
			) : (
				''
			)}
			<PostDescriptionWrapper className='post_des_wrapper'>
				{imagePosition == 'left' ? (
					<>
						<PostTitle>{title}</PostTitle>
						<PostDate>{date}</PostDate>
					</>
				) : (
					''
				)}
				<RawHTML
					dangerouslySetInnerHTML={{ __html: description }}
					className='post_des'
				/>
				{tags == null ? null : (
					<PostTags>
						{tags.map((tag, index) => (
							<Link key={index} to={tag.uri}>
								{tag.name}
							</Link>
						))}
					</PostTags>
				)}
			</PostDescriptionWrapper>
		</PostDetailsWrapper>
	);
};

PostDetails.defaultProps = {
	imagePosition: 'top',
};

export default PostDetails;
