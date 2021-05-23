import React from "react";
import Card from "../components/Card";
import FloatingButton from "../components/FloatingButton";
import { Container, SubContainer, Title, Message } from "../styles/Menus";

const Menus = () => {
    return (
        <Container>
            <Title>Hi, there!</Title>
            <Message>
                A good day starts with a coffee. How do you want to start your
                day?
            </Message>
            <SubContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </SubContainer>
            <FloatingButton isFinalButton={false} />
        </Container>
    );
};

export default Menus;
