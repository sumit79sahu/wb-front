type requestProps = {
  endpoint: string;
  credentials?: "omit" | "same-origin" | "include";
  cache?: "no-store" | "force-cache";
  next?: { revalidate: number; tags?: string[] };
  type?: "blob" | "json";
};

export const postRequest = async <T>({
  endpoint,
  credentials,
  cache,
  next,
  body,
}: requestProps & { body: T }) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials,
      cache,
      next,
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error: unknown) {

    return { success: false, message: "something went wrong" };
  }
};

export const getRequest = async ({
  endpoint,
  credentials,
  cache,
  next,
  id,
  type,
}: requestProps & { id?: string }) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoint + `${id ? "/" + id : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials,
        cache,
        next,
      },
    );

    if (type !== "blob") {
      return response.json();
    }
    return response.blob();
  } catch (error: unknown) {
        return { success: false, message: "something went wrong" };
  }
};

export const putRequest = async <T>({
  endpoint,
  credentials,
  cache,
  next,
  id,
  body,
}: requestProps & { id?: string; body: T }) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoint + `${id ? "/" + id : ""}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials,
        cache,
        next,
        body: JSON.stringify(body),
      },
    );

    return response.json();
  } catch (error: unknown) {
    return { success: false, message: "something went wrong" };
  }
};
export const deleteRequest = async <T>({
  endpoint,
  credentials,
  cache,
  next,
  id,
}: requestProps & { id?: string}) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoint + `${id ? "/" + id : ""}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials,
        cache,
        next,
      },
    );

    return response.json();
  } catch (error: unknown) {
    return { success: false, message: "something went wrong" };
  }
};
