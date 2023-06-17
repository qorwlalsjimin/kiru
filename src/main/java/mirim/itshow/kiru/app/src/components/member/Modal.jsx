import React from "react";
import styled from "styled-components";
// import './PopupPostCode.js'
import useOutSideClick from "./useOutSideClick";
import DaumPost from "./DaumPost";
import { useEffect, useRef } from "react";


function Modal({ onComplete, onClose }) {
    const modalRef = useRef(null)
    const handleClose = () => {
        onClose?.();
  };

//외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
    	$body.style.overflow = overflow
    };
  }, []);
  
    useOutSideClick(modalRef, handleClose);

  return (
      <Overlay>
        <ModalWrap>
        <Contents>
        <ModalWrap ref={modalRef}>
          <CloseButton onClick={handleClose}>
          <i className="ri-close-line"></i>
          </CloseButton>    
                <DaumPost onComplete={onComplete} />
                </ModalWrap>
           
          </Contents>
        </ModalWrap>
      </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default Modal;