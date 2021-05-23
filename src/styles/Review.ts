import { E_COLOR, E_FONT_WEIGHT } from "./../interfaces/dataTypes";
import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 30px;
    background-color: ${E_COLOR.BROWN};
    min-height: calc(100vh - 50px);
`;

export const Header = styled.div`
    margin: 20px 0 5px;
    font-size: 17px;
    font-weight: ${E_FONT_WEIGHT.EXTRA_BOLD};
    color: ${E_COLOR.BLACK};
`;

export const SubHeader = styled.div`
    font-size: 12px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
    color: ${E_COLOR.DARK_BROWN};
`;

export const SectionContainer = styled.div`
    margin: 25px 0;
`;

export const Label = styled.div`
    font-size: 14px;
    font-weight: ${E_FONT_WEIGHT.BOLD};
    color: ${E_COLOR.BLACK};
`;

export const Input = styled.input`
    margin-top: 5px;
    padding: 8px 10px;
    width: 90%;
    background-color: ${E_COLOR.DARK_BROWN};
    font-size: 14px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
    color: ${E_COLOR.WHITE};
    outline: none;
    border: 0;
    border-radius: 7px;
    font-family: inherit;
`;

export const InputArea = styled.textarea`
    margin-top: 5px;
    padding: 8px 10px;
    width: 90%;
    height: 50px;
    background-color: ${E_COLOR.DARK_BROWN};
    font-size: 14px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
    color: ${E_COLOR.WHITE};
    outline: none;
    border: 0;
    border-radius: 7px;
    font-family: inherit;
`;

export const Dropdown = styled.select`
    margin-top: 5px;
    padding: 8px 10px;
    width: 250px;
    background-color: ${E_COLOR.DARK_BROWN};
    font-size: 14px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
    color: ${E_COLOR.WHITE};
    outline: none;
    border: 0;
    border-radius: 7px;
    font-family: inherit;
`;

export const Option = styled.option``;

export const InputWrapper = styled.div`
    margin: 10px 0;
`;

export const ItemContainer = styled.div`
    padding: 0 15px;
    margin-top: 10px;
    max-width: 280px;
    border: 1px solid ${E_COLOR.GREEN};
    border-radius: 5px;
    background-color: ${E_COLOR.GREEN};
`;

export const ItemDetail = styled.div`
    font-size: 14px;
    font-weight: ${E_FONT_WEIGHT.MEDIUM};
    color: ${E_COLOR.WHITE};
`;

export const ItemWrapper = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
`;
