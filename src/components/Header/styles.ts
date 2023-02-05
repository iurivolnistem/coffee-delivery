import styled  from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ActionsContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    .location{
        background: ${props => props.theme["purple-100"]};
        padding: 0.5rem;
        border-radius: 6px;
        color: ${props => props.theme["purple-300"]};

        font-size: 0.875rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        display: flex;
        align-items: center;

        span{
            margin-left: 4px;
        }
    }

    .cartBadge{
        display: flex;
        align-items: center;

        background: ${props => props.theme["yellow-100"]};
        color: ${props => props.theme["yellow-700"]};
        padding: 0.5rem;

        border-radius: 6px;
    }
`;