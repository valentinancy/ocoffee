import { E_COLOR, E_FONT_WEIGHT } from "./../interfaces/dataTypes";
import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 0;
    background-color: ${E_COLOR.BROWN};
    height: calc(100vh - 100px);
    text-align: center;
`;

export const Header = styled.div`
    margin: 50px 0 10px;
    color: ${E_COLOR.WHITE};
    font-size: 22px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
`;

export const Detail = styled.div`
    color: ${E_COLOR.DARK_BROWN};
    font-size: 15px;
    font-weight: ${E_FONT_WEIGHT.REGULAR};
    font-style: italic;
`;

export const SubDetail = styled.div`
    margin: 60px 20px 0;
    color: ${E_COLOR.DARK_BROWN};
    font-size: 15px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 70vw;
    width: 70vw;
    background-color: ${E_COLOR.GREY};
    border-radius: 50%;
    border: 6px solid ${E_COLOR.DARK_BROWN};
`;

export const Icon = styled.img`
    display: block;
    margin: auto;
    width: 80%;
`;
