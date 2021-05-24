import { E_COLOR, E_FONT_WEIGHT } from "./../interfaces/dataTypes";
import styled from "styled-components";

export const Container = styled.div`
    padding-top: 50px;
    width: 100%;
    height: 80vh;
    background-color: ${E_COLOR.BROWN};
`;

export const Title = styled.div`
    padding: 10px 20px;
    color: ${E_COLOR.WHITE};
    font-size: 22px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
`;

export const Message = styled.div`
    margin: 0 20px;
    color: ${E_COLOR.DARK_BROWN};
    font-size: 20px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
`;

export const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    bottom: 0;
    margin-top: 10px;
    padding: 24px 24px 100px;
    background-color: ${E_COLOR.DARK_BROWN};
    border-top-right-radius: 40px;
`;

export const Loader = styled.img`
    height: 50px;
    margin: 100px auto;
`;
