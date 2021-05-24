import React from "react";
import FloatingButton from "../components/FloatingButton";
import {
    Container,
    Header,
    SubHeader,
    Label,
    Input,
    InputWrapper,
    Dropdown,
    Option,
    InputArea,
    ItemWrapper,
    ItemDetail,
    SectionContainer,
    ItemContainer,
} from "../styles/Review";
import { useReviewHook } from "../hooks/Review";

const Review = () => {
    const {
        handleInput,
        handleCheckout,
        selectedMenuList,
        merchantList,
        purchaseDetail,
    } = useReviewHook();
    return (
        <Container>
            <Header>Customer Details</Header>
            <SubHeader>
                Complete your purchase by providing your details.
            </SubHeader>
            <SectionContainer>
                <InputWrapper>
                    <Label>Name</Label>
                    <Input
                        onChange={(e) => handleInput("name", e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Phone</Label>
                    <Input
                        type="number"
                        onChange={(e) => handleInput("phone", e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Merchant</Label>
                    <Dropdown
                        onChange={(e) =>
                            handleInput("merchant", e.target.value)
                        }
                    >
                        {merchantList.map(
                            (merchant: { _id: string; name: string }) => {
                                const { _id, name } = merchant;
                                return (
                                    <Option key={_id} value={name}>
                                        {name}
                                    </Option>
                                );
                            }
                        )}
                    </Dropdown>
                </InputWrapper>
                <InputWrapper>
                    <Label>Notes</Label>
                    <InputArea
                        onChange={(e) => handleInput("notes", e.target.value)}
                    />
                </InputWrapper>
            </SectionContainer>

            <SectionContainer>
                <Header>Items purchased.</Header>
                <SubHeader>Please confirm your order below.</SubHeader>
                <ItemContainer>
                    {selectedMenuList.map(
                        (
                            menu: { name: string; quantity: number },
                            index: number
                        ) => {
                            const { name, quantity } = menu;
                            return (
                                <ItemWrapper key={index}>
                                    <ItemDetail>{name}</ItemDetail>
                                    <ItemDetail>x{quantity}</ItemDetail>
                                </ItemWrapper>
                            );
                        }
                    )}
                </ItemContainer>
            </SectionContainer>
            <FloatingButton
                isFinalButton={true}
                handleClicked={handleCheckout}
                isDisabled={
                    purchaseDetail.name === "" || purchaseDetail.phone === 0
                }
            />
        </Container>
    );
};

export default Review;
