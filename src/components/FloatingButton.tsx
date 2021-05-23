import React from "react";
import styled from "styled-components";
import { E_COLOR, E_FONT_WEIGHT } from "../interfaces/dataTypes";

const Container = styled.div<{ isFinalButton: boolean }>`
    display: flex;
    justify-content: ${({ isFinalButton }) =>
        isFinalButton ? "center" : "space-between"};
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 320px;
    margin-bottom: 45px;
    padding: 15px 25px;
    background-color: ${E_COLOR.RED};
    border-radius: 8px;
    text-align: center;
    color: ${E_COLOR.WHITE};
    font-size: 15px;
    font-weight: ${E_FONT_WEIGHT.EXTRA_BOLD};
`;

const Detail = styled.div``;

const Action = styled.div`
    padding-left: 20px;
    border-left: 1px solid ${E_COLOR.WHITE};
`;

interface IProps {
    isFinalButton: boolean;
}

const FloatingButton = ({ isFinalButton }: IProps) => {
    return (
        <Container isFinalButton={isFinalButton}>
            {isFinalButton ? (
                `Confirm and Purchase`
            ) : (
                <React.Fragment>
                    <Detail>1 item(s) selected</Detail>
                    <Action>CHECKOUT</Action>
                </React.Fragment>
            )}
        </Container>
    );
};

export default FloatingButton;
