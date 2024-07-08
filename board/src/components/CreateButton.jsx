import styled from "styled-components";

const StyledButton = styled.button`
    background-color: blue;
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

function CreateButton(props) {
    return (
        <StyledButton onClick={props.onClick}>
            등록하기
        </StyledButton>
    )
}

export default CreateButton;
