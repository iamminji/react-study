import styled from "styled-components";
import React, { useState } from "react";
import SaveButton from "./SaveButton";

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalBox = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 500px;
    max-width: 90%;
`;

function Modal({ onSave, onClose }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSave = () => {
        onSave({ title, body });
        onClose(); // 모달 닫기
    };

    return (
        // ModalBackdrop: 모달 박스를 클릭하면 모달이 닫히도록 설정
        // stopPropagation: 사용하여 모달 박스를 클릭해도 모달이 닫히지 않도록 설정
        <ModalBackdrop onClick={onClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="본문"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <SaveButton onClick={handleSave}>저장</SaveButton>
            </ModalBox>
        </ModalBackdrop>
    );
}

export default Modal;
