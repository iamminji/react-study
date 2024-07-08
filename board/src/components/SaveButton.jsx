import styled from "styled-components";

const StyledButton = styled.button`
    background-color: green;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    margin-right: 20px;
    align-self: flex-end;
`;

function SaveButton(props) {
    return(<StyledButton onClick={props.onClick}>저장하기</StyledButton>);
}

export default SaveButton;
