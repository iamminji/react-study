import styled from "styled-components";

const StyledListItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const BodyPreview = styled.p`
  color: #666;
`;

function ListItem(props) {

  return (
    <StyledListItem>
      <Title>
        {props.title}
      </Title>
      <BodyPreview>
        {props.body}
      </BodyPreview>
    </StyledListItem>
  )
}

export default ListItem;