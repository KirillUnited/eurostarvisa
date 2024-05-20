import { fetchAPI } from "./base";

const query = `query FetchPosts {
  posts {
    nodes {
      content
      date
      excerpt
      slug
      title
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    query,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getPostsByCategory(category = '') {
  const data = await fetchAPI(
    `query getPosts {
    categories(where: {name: $category}) {
        nodes {
            name
            posts {
                nodes {
                    featuredImage {
                    node {
                        sourceUrl
                    }
                    }
                    slug
                    title
                    excerpt
                    date
                    content
                }
            }
    }
    }
  }
  `,
    {
      variables: {
        category,
      },
    }
  );

  return data?.categories?.nodes;
}