import styled from "styled-components";

const StyledFooter = styled.footer`
    display: fixed;
    width: 100%;
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function Footer() {
    return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
