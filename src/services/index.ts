export const getData = async (url: string, params?: string) => {
    try {
        const response = await fetch(`${url}${params ? params : ""}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};

export const postData = async (url: string, requestPayload: any) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestPayload),
        });

        return response.json();
    } catch (err) {}
};
