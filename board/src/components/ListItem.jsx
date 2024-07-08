import styled from "styled-components";
import React from "react";

const ScrollableList = styled.div`
    margin: 5px;
`;

const Item = styled.div`
    margin: 10px;
`;

const Title = styled.h3`
    margin-bottom: 5px;
`;

const BodyPreview = styled.p`
    color: #666;
`;

const ListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function ListItem(props) {
    return (
        <ListItemContainer>
            <ScrollableList>
                <Item>
                    <Title>{props.title}</Title>
                    <BodyPreview>{props.body}</BodyPreview>
                </Item>
            </ScrollableList>
        </ListItemContainer>
    );
}

export default ListItem;
