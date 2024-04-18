import { PhoneInput } from "react-international-phone";
import styled from "styled-components";

export const Root = styled.section`
    --primary: 1 59% 57%;
    --destructive: var(---primary-foreground)
`;
export const Body = styled.div`
    width: min(710px ,100%);
`;
export const Phone = styled(PhoneInput)`
    --react-international-phone-height: 2.5rem;
    --react-international-phone-border-radius: 0.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: var(--react-international-phone-border-radius);

    .react-international-phone-country-selector {
        min-width: 44px;
    }
    .react-international-phone-input {
        overflow: hidden;
    }
`;