import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function Header(props) {
    return (
        <StyledHeader>
            <h1>Header</h1>
        </StyledHeader>
    );
}

export default Header;
