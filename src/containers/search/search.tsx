import React, { useReducer, useEffect } from 'react';
import SearchReducer, { initialState } from './search-reducer';
import { useStaticQuery, graphql } from 'gatsby';
import { Scrollbars } from 'react-custom-scrollbars';
import { rebuildIndex } from './search-index-builder-function';
import PostList from '../../components/post-list/post-list';
import {
	SearchWrapper,
	SearchForm,
	SearchResult,
	NoResult,
} from './search.style';

function Search() {
	const [state, dispatch] = useReducer(SearchReducer, initialState);

	const data = useStaticQuery(graphql`
		query {
			allWpPost {
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
										fluid(maxWidth: 62, maxHeight: 62, quality: 90) {
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

	const dataset = data.allWpPost.edges;

	/**
	 * handles the input change and perfom a search with js-search
	 * in which the results will be added to the state
	 */
	const searchData = (e: any) => {
		const { search } = state;
		const queryResult = search.search(e.target.value);
		dispatch({
			type: 'SET_SEARCH_QUERY',
			payload: { searchQuery: e.target.value, searchResults: queryResult },
		});
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	useEffect(() => {
		if (dataset.length !== 0) {
			let data: any = [];
			dataset.forEach(({ node }: any) => {
				let formatedData = {
					...node,
				};
				data.push(formatedData);
			});

			dispatch({ type: 'SET_DATA', payload: data });
			const dataToSearch = rebuildIndex(data);
			if (dataToSearch) {
				dispatch({
					type: 'SET_SEARCH',
					payload: dataToSearch,
				});
			}
		}
	}, [dataset]);

	const { searchResults, searchQuery } = state;
	const queryResults = searchResults;

	return (
		<SearchWrapper>
			<SearchForm onSubmit={handleSubmit}>
				<input
					id='Search'
					value={searchQuery}
					onChange={searchData}
					placeholder='Enter Your Search Topic'
				/>
			</SearchForm>
			<SearchResult>
				{queryResults.length == 0 && searchQuery !== '' ? (
					<NoResult>No result found</NoResult>
				) : (
					''
				)}

				{queryResults.length !== 0 && (
					<Scrollbars
						autoHeight={true}
						autoHeightMax={505}
						className='search-scrollbar'
					>
						{queryResults.map((item: any) => {
							return (
								<PostList
									key={item.id}
									title={item.title}
									url={item.uri}
									image={item.featuredImage?.node?.localFile?.childImageSharp?.fluid || null}
									date={item.date}
									tags={item.tags}
								/>
							);
						})}
					</Scrollbars>
				)}
			</SearchResult>
		</SearchWrapper>
	);
}

export default Search;
