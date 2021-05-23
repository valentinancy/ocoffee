import React from "react";
import {
    Container,
    Icon,
    Header,
    SubContainer,
    Detail,
    SubDetail,
} from "../styles/Summary";

import RocketAsset from "../asset/rocket.gif";

const Summary = () => {
    return (
        <Container>
            <SubContainer>
                <Icon src={RocketAsset} />
            </SubContainer>
            <Header>Thank you, Nancy!</Header>
            <Detail>We are preparing your coffee!</Detail>
            <SubDetail>
                Your coffee will be ready to pick up in 10 minutes. Make sure
                you arrive on time.
            </SubDetail>
        </Container>
    );
};

export default Summary;
