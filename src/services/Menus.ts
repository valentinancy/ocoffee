import { URL_MENUS } from "./../constants/index";
import { getData } from ".";

export const getMenuList = async () => {
    try {
        const url = URL_MENUS;
        const response = await getData(url);

        return response;
    } catch {
        return [];
    }
};
