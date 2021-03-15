import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../containers/layout";
import Blog from "../containers/home";
import SEO from "../components/seo";

interface IndexPageProps extends PageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
			};
		};
	};
}
export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
const IndexPage: React.FC<IndexPageProps> = (props) => {
	const { data } = props;

	return (
		<Layout>
			<SEO
				title="🛁 & 🍾"
				description={data.site.siteMetadata.description}
			/>
			<Blog />
		</Layout>
	);
};

export default IndexPage;
