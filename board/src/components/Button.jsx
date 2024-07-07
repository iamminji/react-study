import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

function Button(props) {

    return (
        <StyledButton onClick={props.onClick}>
            추가하기
        </StyledButton>
    )
}

export default Button;