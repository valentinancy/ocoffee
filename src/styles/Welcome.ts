import { E_FONT_WEIGHT, E_COLOR } from "./../interfaces/dataTypes";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    width: 100%;
    height: calc(100vh - 200px);
    background-color: ${E_COLOR.BROWN};
`;

export const LogoImg = styled.img`
    width: 200px;
`;

export const Brand = styled.div`
    margin: 12px 0;
    font-size: 25px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
    color: ${E_COLOR.DARK_BROWN};
    font-family: cursive;
`;

export const Button = styled.div`
    cursor: pointer;
    position: fixed;
    bottom: 0;
    width: 190px;
    padding: 14px;
    margin-bottom: 50px;
    border-radius: 26px;
    text-align: center;
    font-size: 17px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
    color: ${E_COLOR.LIGHT_BROWN};
    background-color: ${E_COLOR.DARK_BROWN};
`;
