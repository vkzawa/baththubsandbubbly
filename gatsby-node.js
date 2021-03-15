const path = require(`path`);
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const blogPage = path.resolve(`./src/templates/blog-page.tsx`);
  const tagTemplate = path.resolve(`./src/templates/tags.tsx`);
  const categoryTemplate = path.resolve(`./src/templates/category.tsx`);

  return graphql(`
    {
      allWpPost(sort: {fields: date, order: DESC}) {
        totalCount
        edges {
          node {
            slug
            uri
          }
        }
      }
      allWpCategory {
        edges {
          node {
            slug
            uri
          }
        }
      }
      allWpTag {
        edges {
          node {
            slug
            uri
          }
        }
      }
      allWpPage {
        edges {
          node {
            slug
            uri
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts.
    const posts = result.data.allWpPost.edges;
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.uri,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      });
    });

    // Create blog category pages.
    const categories = result.data.allWpCategory.edges;
    categories.forEach((category) => {
      createPage({
        path: category.node.uri,
        component: categoryTemplate,
        context: {
          slug: category.node.slug,
        },
      });
    });

    // Create blog tag pages.
    const tags = result.data.allWpTag.edges;
    tags.forEach((tag) => {
      createPage({
        path: tag.node.uri,
        component: tagTemplate,
        context: {
          slug: tag.node.slug,
        },
      });
    });

    // Create site pages.
    const pages = result.data.allWpPage.edges;
    pages.forEach((page, index) => {
      createPage({
        path: page.node.uri,
        component: blogPage,
        context: {
          slug: page.node.slug,
        },
      });
    });

    return null;
  });
};
