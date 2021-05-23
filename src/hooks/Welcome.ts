import { useHistory } from "react-router-dom";

export const useWelcomeHook = () => {
    const history = useHistory();

    const handleClickedButton = () => {
        history.push("/menus");
    };

    return {
        handleClickedButton,
    };
};
