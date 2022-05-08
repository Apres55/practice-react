import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
`

const COLORS_MAP = {
    good: "#58d66a",
    bad: "#ed6963",
    default: "#cebe2b"
}

const HEIGHT_MAP = {
    default: 30,
    small: 14
}

export const Line = styled.div`
    height: ${(props) => HEIGHT_MAP[props.size] || HEIGHT_MAP.default}px;
    background-color: #f1f2f3;
    width: 300px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
    ${(props) => `
        &::after{
            border-radius: 5px;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: ${props.percentage * 100}%;
            background-color: ${COLORS_MAP[props.type] || COLORS_MAP.default};
        }
    `}
`;

export const List = {
    Wrapper: styled.div`
    height: 100vh;
    width: 50vh;
    border-right: 1px solid #d6d9dc;
    `
}

const PlayerDiv = {
    Holder: styled.div`
    padding: 4px 8px;
    border-bottom: 1px solid #d6d9dc;
    font-weight: bold;
    &:hover{
        background-color: #F1F2F3;
    }
    `,
    Title: styled.p`margin: 5px;`,
    Details: styled.span`
    display: flex;
    gap: 5px;
    font-size: x-small;
    color: #a7acb1;
    font-weight: lighter;
    justify-content: center;
    
    `
}

export default PlayerDiv