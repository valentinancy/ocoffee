import React from "react";
import Card from "../components/Card";
import FloatingButton from "../components/FloatingButton";
import {
    Container,
    SubContainer,
    Title,
    Message,
    Loader,
} from "../styles/Menus";
import { useMenuHook } from "../hooks/Menu";
import { IMenu } from "../interfaces";
import LoaderAsset from "../asset/loading.gif";

const Menus = () => {
    const {
        menuList,
        handleSelectMenu,
        selectedMenuList,
        handleClickedNext,
    } = useMenuHook();

    return (
        <Container>
            <Title>Hi, there!</Title>
            <Message>
                A good day starts with a coffee. How do you want to start your
                day?
            </Message>
            <SubContainer>
                {menuList.length > 0 ? (
                    menuList.map((menu: IMenu) => {
                        const { image, name, price, description } = menu;
                        return (
                            <Card
                                key={name}
                                handleClick={() =>
                                    handleSelectMenu({
                                        image,
                                        name,
                                        price,
                                        description,
                                    })
                                }
                                description={description}
                                image={image}
                                name={name}
                                price={price}
                            />
                        );
                    })
                ) : (
                    <Loader src={LoaderAsset} />
                )}
            </SubContainer>
            <FloatingButton
                isFinalButton={false}
                totalItems={selectedMenuList.length}
                handleClicked={handleClickedNext}
                isDisabled={selectedMenuList.length === 0}
            />
        </Container>
    );
};

export default Menus;
