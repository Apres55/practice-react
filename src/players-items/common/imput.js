import styled from "styled-components";
import { RenderIf } from './renderIf';

const InputView = styled.input`
    font-size: 18px;
    height: 40px;
    max-width: 100%;
    padding: 4px 10px;
    border: 1px solid #D6D9DC;
    border-radius: 8px;
    background: white;
    -webkit-transition: all 0.2s linear;
    -webkit-transition-property: border, background, color, box-shadow, padding;
    transition: all 0.2s linear;
    transition-property: border, background, color, box-shadow, padding;
`;
const InputWrapper = styled.div`color: #3d4348;`;
const InputLabel = styled.label`
    font-size: 20px; 
    margin-right: 20px;
    font-weight: bold;
`;
const InputPoints = styled.span`
    margin-left: 5px;
    font-size: 13px; 
`;

const Input = ({value, placeholder, onChange, label, points='per/min'}) => (
    <InputWrapper>
        <RenderIf condition={label}>
            <InputLabel>{label}</InputLabel>
        </RenderIf>
        <InputView value={value} placeholder={placeholder} onChange={onChange} />
        <InputPoints>{points}</InputPoints>
    </InputWrapper>
)

export default Input