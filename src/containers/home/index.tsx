import * as React from "react";
import BlogWrapper from "./style";
import Posts from "./posts";
import FeaturedPosts from "./featured-post";
import Banner from "./banner";

type BlogProps = {};

const Blog: React.FunctionComponent<BlogProps> = (props) => {
	return (
		<BlogWrapper {...props}>
			<Banner />
			<FeaturedPosts />
			<Posts />
		</BlogWrapper>
	);
};

export default Blog;
