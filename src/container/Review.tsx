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

const Review = () => {
    return (
        <Container>
            <Header>Customer Details</Header>
            <SubHeader>
                Complete your purchase by providing your details.
            </SubHeader>
            <SectionContainer>
                <InputWrapper>
                    <Label>Name</Label>
                    <Input />
                </InputWrapper>
                <InputWrapper>
                    <Label>Phone</Label>
                    <Input />
                </InputWrapper>
                <InputWrapper>
                    <Label>Merchant</Label>
                    <Dropdown>
                        <Option>fgsdg</Option>
                        <Option>adfa</Option>
                        <Option>asdfaf</Option>
                    </Dropdown>
                </InputWrapper>
                <InputWrapper>
                    <Label>Notes</Label>
                    <InputArea />
                </InputWrapper>
            </SectionContainer>

            <SectionContainer>
                <Header>Items purchased.</Header>
                <SubHeader>Please confirm your order below.</SubHeader>
                <ItemContainer>
                    <ItemWrapper>
                        <ItemDetail>Ice Americano</ItemDetail>
                        <ItemDetail>x1</ItemDetail>
                    </ItemWrapper>

                    <ItemWrapper>
                        <ItemDetail>Ice Americano</ItemDetail>
                        <ItemDetail>x1</ItemDetail>
                    </ItemWrapper>

                    <ItemWrapper>
                        <ItemDetail>Ice Americano</ItemDetail>
                        <ItemDetail>x1</ItemDetail>
                    </ItemWrapper>
                </ItemContainer>
            </SectionContainer>
            <FloatingButton isFinalButton={true} />
        </Container>
    );
};

export default Review;
