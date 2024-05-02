import React from 'react'
import { CollectionItemProps, getCollection } from '@/lib/api/collections'
import PostCard from './post-card'
import { blog } from '@/content'

const blogList = blog.list
const FAKE_COLLECTION = 'products';

interface PostListProps {
    postList: CollectionItemProps[]
}

async function PostList() {
    const postList = await getCollection(FAKE_COLLECTION);

    return (
        <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogList.map((item) => {
                return (
                    <li key={item.date}>
                        <PostCard {...item} />
                    </li>
                )
            })}
            {postList?.map((item: CollectionItemProps) => {
                return (
                    <li
                        key={item.id}>
                        <PostCard
                            title={item.title}
                            description={item.description}
                            thumbnail={item.image}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default PostList