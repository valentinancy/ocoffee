import { URL_ORDERS } from "../constants";
import { postData } from ".";

export const postPaylaterTransaction = async (request: any) => {
    try {
        const url = URL_ORDERS;
        const response = await postData(url, request);

        return response;
    } catch {
        return null;
    }
};
