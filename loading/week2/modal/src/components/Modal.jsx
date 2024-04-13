import React from 'react';
import './Modal.css';  // 모달에 대한 스타일을 별도로 관리

function Modal({ isOpen, close }) {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div className="close-wrapper">
          <button id="close" onClick={close}>닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
