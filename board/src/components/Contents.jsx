
import styled from "styled-components";
import ListItem from "./ListItem"
import { useState } from "react";
import Button from "./Button";


const ContentsWrapper = styled.main`
 height: 70vh;
  flex: 1;
  display: flex;
  max-height: 70vh;
  overflow-y: auto
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const mockData = [
    {
        id: 1,
        title: '첫 번째 글 제목',
        body: '첫 번째 글의 본문입니다. 이 글은 예제를 위한 것입니다.'
    },
    {
        id: 2,
        title: '두 번째 글 제목',
        body: '두 번째 글의 본문입니다. 이 글 역시 예제를 위한 것입니다.'
    },
    {
        id: 3,
        title: '세 번째 글 제목',
        body: '세 번째 글의 본문입니다. 예제를 계속 이어갑니다.'
    }
];


function Contents(props) {

    const [data, setData] = useState(mockData);


    const handleData = () => {
        const newItem = {
            id: data.length + 1,
            title: `새로운 글 제목 ${data.length + 1}`,
            body: '새로운 글의 본문입니다.'
        };
        setData(prevData => [...prevData, newItem]);
        console.log("Click!");
    }

    return (
        <ContentsWrapper>
            {data.map(item => (
                <ListItem key={item.id} title={item.title} body={item.body} />
            ))}
            <Button onClick={handleData} />
        </ContentsWrapper>
    )
}

export default Contents;