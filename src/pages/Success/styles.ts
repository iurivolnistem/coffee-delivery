import styled from "styled-components";

export const SuccessContainer = styled.div`
    h1{
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme["yellow-700"]};
        line-height: 1.3;
    }

    h2{
        font-size: 1.25rem;
        color: ${props => props.theme["brown-300"]};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.3;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    gap: 6.375rem;
    margin-top: 2.5rem;
    justify-content: space-between;
`;

export const BorderContainer = styled.div`
    background: linear-gradient(120deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%) border-box;
    padding: 1px;
    border-radius: 6px 36px 6px 36px;
    flex: 1;
`;

export const BoxInfosContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${props => props.theme["white-200"]};
    height: 100%;
`;

export const ItemInfo = styled.div`
    display: flex;
    margin-bottom: 2rem;
    align-items: center;

    &:last-child{
        margin-bottom: 0;
    }


    p{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
        margin-left: 0.75rem;
    }
`;

const Box = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const MapPinBox = styled(Box)`
    background: ${props => props.theme["purple-500"]};
    color: ${props => props.theme["white-200"]};
`;

export const TimerBox = styled(Box)`
    background: ${props => props.theme["yellow-500"]};
    color: ${props => props.theme["white-200"]};
`;

export const DolarBox = styled(Box)`
    background: ${props => props.theme["yellow-700"]};
    color: ${props => props.theme["white-200"]};
`;