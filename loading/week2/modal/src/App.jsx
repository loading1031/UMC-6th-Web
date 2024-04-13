import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open" onClick={() => setModalOpen(true)}>버튼 열기</button>
      <Modal isOpen={isModalOpen} close={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
