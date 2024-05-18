import { fetchAPI } from "./base";

const query = `query FetchPosts($first: Int = 10) {
  posts(first: $first) {
    nodes {
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
      categories {
        nodes {
          name
          parent {
            node {
              name
            }
          }
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