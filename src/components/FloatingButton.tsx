import React from "react";
import styled from "styled-components";
import { E_COLOR, E_FONT_WEIGHT } from "../interfaces/dataTypes";

const Container = styled.div<{ isFinalButton: boolean; isDisabled: boolean }>`
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
    background-color: ${({ isDisabled }) =>
        isDisabled ? E_COLOR.DISABLED : E_COLOR.RED};
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
    handleClicked: () => void;
    isDisabled: boolean;
    totalItems?: number;
}

const FloatingButton = ({
    isFinalButton,
    totalItems,
    handleClicked,
    isDisabled,
}: IProps) => {
    const handleClickedButton = () => {
        if (!isDisabled) {
            handleClicked();
        }
    };
    return (
        <Container
            isFinalButton={isFinalButton}
            isDisabled={isDisabled}
            onClick={handleClickedButton}
        >
            {isFinalButton ? (
                `Confirm and Purchase`
            ) : (
                <React.Fragment>
                    <Detail>{totalItems} item(s) selected</Detail>
                    <Action>CHECKOUT</Action>
                </React.Fragment>
            )}
        </Container>
    );
};

export default FloatingButton;
