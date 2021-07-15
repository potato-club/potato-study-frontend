import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    width: '800px',
    height: '320px',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModifyModal = ({ modifyed, closeModifyModal }) => (
  <Modal
    isOpen={modifyed}
    onRequestClose={closeModifyModal}
    style={customStyles}
    contentLabel="Example Modal">
    <Title>수정 완료</Title>
    <ContentBox>수정이 완료되었습니다.</ContentBox>
    <CloseButton onClick={closeModifyModal}>닫기</CloseButton>
  </Modal>
);

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: red;
`;
const ContentBox = styled.p`
  font-size: 32px;
  text-align: center;
`;
const CloseButton = styled.button`
  font-size: 32px;
  width: 100px;
  height: 48px;
  display: block;
  margin-top: 136px;
  margin-left: 680px;
`;
