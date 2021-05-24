import React from "react";
import styled from "styled-components";
import { E_COLOR, E_FONT_WEIGHT } from "../interfaces/dataTypes";

const Container = styled.div`
    width: calc(50% - 20px);
    min-height: 230px;
    margin: 10px;
    border-radius: 15px;
    background-color: ${E_COLOR.BROWN};
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;

const Name = styled.div`
    font-size: 13px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
    color: ${E_COLOR.WHITE};
`;

const Price = styled.div`
    padding-left: 5px;
    font-size: 13px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
    color: ${E_COLOR.DARK_BROWN};
`;

const Detail = styled.div`
    margin: 0 10px 15px;
    font-size: 12px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
    color: ${E_COLOR.DARK_BROWN};
`;

interface IProps {
    image: string;
    name: string;
    price: number;
    description: string;
    handleClick: (
        image: string,
        name: string,
        price: number,
        description: string
    ) => void;
}

const Card = ({ description, price, name, image, handleClick }: IProps) => {
    const handleClickedCard = (
        image: string,
        name: string,
        price: number,
        description: string
    ) => {
        handleClick(image, name, price, description);
    };

    return (
        <Container
            onClick={() => handleClickedCard(image, name, price, description)}
        >
            <Image src={image} />
            <HeaderContainer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </HeaderContainer>
            <Detail>{description}</Detail>
        </Container>
    );
};

export default Card;
