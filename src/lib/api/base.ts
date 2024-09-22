const API_URL = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export async function fetchAPI(
    query = "",
    { variables }: Record<string, any> = {}
) {
    const headers = { "Content-Type": "application/json" };

    try {
        const res = await fetch(API_URL, {
            headers,
            method: "POST",
            body: JSON.stringify({
                query,
                variables,
            }),
        });
        
        if (!res.ok) {
            throw new Error("Failed to fetch API: " + res.status);
        }

        const json = await res.json();

        return json.data;
    }
    catch (error) {
        console.error(error);
    }

}