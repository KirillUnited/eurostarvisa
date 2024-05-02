import { cache } from 'react'
import 'server-only'

const FAKE_API = 'https://fakestoreapi.com';

export type CollectionItemProps = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

// export const preload = (name: string) => {
//     void getCollection(name)
// }
// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
const getCollection = cache(async (name: string) => {
    const res = await fetch(`${FAKE_API}/${name}`)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return res.json();
});

// async function getCollectionItem(slug: string, name: string) {
//     const items = await getCollection(name);
//     return items.find((item) => item?.slug === slug)
// }

export {
    getCollection,
    // getCollectionItem
}