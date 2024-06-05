import { fetchAPI } from "./base";
// TODO
// export const USER_INFO_FRAGMENT = graphql`
//     fragment UserInfo on Profile {
//         firstName
//         lastName
//         gender
//     }
// `
const query = `
  query GetSiteInfo {
    page(id: "2", idType: DATABASE_ID) {
      siteInfo {
        email
        phone
        timeline
      }
    }
  }
`

export async function getSiteInfo() {
    const data = await fetchAPI(
        query
    );

    return data?.page?.siteInfo;
}