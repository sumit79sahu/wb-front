

type requestProps = {
    endpoint: string,
    credentials?: "omit" | "same-origin" | "include",
    cache?: "no-store" | "force-cache";
    next?: { revalidate: number, tags?: string[] }
}


export const postRequest = async <T>({ endpoint, credentials, cache, next, body }: requestProps & { body: T }) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials,
            cache,
            next,
            body: JSON.stringify(body)

        })
        return response.json()
    } catch (error: unknown) {
        console.log(error)
        return { success: false, message: "something went wrong" }
    }
}

export const getRequest = async ({ endpoint, credentials, cache, next, id }: requestProps & { id: string }) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint + `${"/" + id && ""}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials,
            cache,
            next,

        })
        return response.json()
    } catch (error: unknown) {
        console.log(error)
    }
}