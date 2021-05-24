import { URL_MERCHANTS } from "./../constants/index";
import { getData } from ".";

export const getMerchantList = async () => {
    try {
        const url = URL_MERCHANTS;
        const response = await getData(url);

        return response;
    } catch {
        return [];
    }
};
