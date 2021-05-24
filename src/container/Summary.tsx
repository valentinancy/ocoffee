import React from "react";
import {
    Container,
    Icon,
    Header,
    SubContainer,
    Detail,
    SubDetail,
} from "../styles/Summary";
import { useSummaryHook } from "../hooks/Summary";
import RocketAsset from "../asset/rocket.gif";

const Summary = () => {
    const { buyerName } = useSummaryHook();
    return (
        <Container>
            <SubContainer>
                <Icon src={RocketAsset} />
            </SubContainer>
            <Header>Thank you, {buyerName}!</Header>
            <Detail>We are preparing your coffee!</Detail>
            <SubDetail>
                Your coffee will be ready to pick up in 10 minutes. Make sure
                you arrive on time.
            </SubDetail>
        </Container>
    );
};

export default Summary;
