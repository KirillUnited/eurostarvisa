import React from 'react'
import { CollectionItemProps, getCollection } from '@/lib/api/collections'
import PostCard from './post-card'
import { fetchAPI } from '@/lib/api/base'

interface PostListProps {
    postList: CollectionItemProps[]
}

const query = `query FetchPosts {
        categories(where: {name: "Блог"}) {
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
`;

async function getPosts(first = 10) {
    const data = await fetchAPI(
        query,
        {
            variables: {
                first,
            },
        }
    );

    return data?.categories?.nodes;
}

async function PostList() {
    const postList = await getPosts(10);
    const posts = postList && postList[0]?.posts?.nodes;

    if (!posts || posts.length === 0) {
        return <p className='my-4 text-center'>Нет постов</p>
    }

    return (
        <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {posts.map((item: any) => {
                return (
                    <li
                        key={item.slug}>
                        <PostCard
                            slug={item.slug}
                            date={item.date}
                            title={item.title}
                            description={item.excerpt}
                            thumbnail={item.featuredImage.node.sourceUrl}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default PostList