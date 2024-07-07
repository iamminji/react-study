import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;


function Footer(props) {
    return (
        <StyledFooter>
            <p>Footer</p>
        </StyledFooter>
    );
}

export default Footer;