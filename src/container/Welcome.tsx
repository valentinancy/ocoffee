import React from "react";
import { Container, LogoImg, Brand, Button } from "../styles/Welcome";

import logoAsset from "../asset/logo.png";
import { useWelcomeHook } from "../hooks/Welcome";

const Welcome = () => {
    const { handleClickedButton } = useWelcomeHook();

    return (
        <Container>
            <LogoImg src={logoAsset} />
            <Brand>O!Coffee</Brand>
            <Button onClick={handleClickedButton}>Get Started</Button>
        </Container>
    );
};

export default Welcome;
