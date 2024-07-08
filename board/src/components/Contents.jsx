import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
import CreateButton from "./CreateButton";
import ListItem from "./ListItem";

const ContentsWrapper = styled.main`
    height: 70vh;
    flex: 1;
    display: flex;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
`;

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    z-index: 1;
`;

const mockData = [
    {
        id: 1,
        title: "첫 번째 글 제목",
        body: "첫 번째 글의 본문입니다. 이 글은 예제를 위한 것입니다.",
    },
    {
        id: 2,
        title: "두 번째 글 제목",
        body: "두 번째 글의 본문입니다. 이 글 역시 예제를 위한 것입니다.",
    },
    {
        id: 3,
        title: "세 번째 글 제목",
        body: "세 번째 글의 본문입니다. 예제를 계속 이어갑니다.",
    },
];

function Contents(props) {
    const [data, setData] = useState(mockData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleData = (newItemData) => {
        if (!newItemData.title || !newItemData.body) return;
        const newItem = {
            id: data.length + 1,
            title: newItemData.title,
            body: newItemData.body,
        };

        setData((prevData) => [...prevData, newItem]);
    };

    return (
        <ContentsWrapper>
            {data.map((item) => (
                <ListItem key={item.id} title={item.title} body={item.body} />
            ))}
            <ButtonWrapper>
                <CreateButton onClick={() => setIsModalOpen(true)}>새 글 추가</CreateButton>
                {isModalOpen && (
                    <Modal
                        onSave={handleData}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </ButtonWrapper>
        </ContentsWrapper>
    );
}
export default Contents;
