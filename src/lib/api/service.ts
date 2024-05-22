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

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
      post(id: $id, idType: SLUG) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        date
        excerpt
        seo {
          breadcrumbs {
            text
          }
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            id
          }
          opengraphSiteName
          opengraphTitle
          title
        }
      }
    }`
  ,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}

export async function getPostsByCategory(category: string) {
  const data = await fetchAPI(
    `query getPosts($name: NAME="") {
    categories(where: {name: $name}) {
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
  },
  {
    variables: {
      name: category,
    },
  }
  `
  );

  return data?.categories?.nodes;
}