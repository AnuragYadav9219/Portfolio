import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Avatar from '../assets/Avatar.avif';

const Switch = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const timeoutRef = useRef(null);

  const handleDownload = (e) => {
    e.preventDefault();
    if (!isDownloaded && !isChecked) {
      setIsChecked(true);
      timeoutRef.current = setTimeout(() => {
        const link = document.createElement('a');
        link.href = Avatar;
        link.download = 'anime.avif';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloaded(true);
      }, 1900);
    }
  };

  const handleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDownloaded) {
      window.open(Avatar, '_blank');
    }
  };

  return (
    <StyledWrapper>
      <div className="container bg-gradient-to-r from-purple-500 to-pink-500">
        <label className="label">
          <input
            type="checkbox"
            className="input"
            checked={isChecked}
            onChange={handleDownload}
          />
          <span className="circle">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
            </svg>
            <div className="square" />
          </span>
          <p className="title">Resume</p>
          <p className="title open-text" onClick={handleOpen}>Open</p>
        </label>
      </div>
   </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    max-width: 100%;
    padding: clamp(5px, 2vw, 10px);
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .label {
       margin-top: 15px;
       margin-bottom: 15px;
    }
}

  .label {
    background-color: transparent;
    border: 2px solid rgb(91, 91, 240);
    display: flex;
    align-items: center;
    border-radius: 50px;
    width: clamp(120px, 30vw, 160px);
    cursor: pointer;
    transition: all 0.4s ease;
    padding: clamp(5px, 1vw, 5px);
    position: relative;
  }

  .label::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    width: clamp(6px, 2vw, 8px);
    height: clamp(6px, 2vw, 8px);
    transition: all 0.4s ease;
    border-radius: 100%;
    margin: auto;
    opacity: 0;
    visibility: hidden;
  }

  .label .input {
    display: none;
  }

  .label .title {
    font-size: clamp(14px, 4vw, 17px);
    color: black;
    fonnt-weight: bold;
    transition: all 0.4s ease;
    position: absolute;
    right: clamp(28px, 4vw, 18px);
    bottom: clamp(12px, 3vw, 14px);
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .label .title {
        font-size: 16px;
        bottom: 16px;
    }
  }

/* Adjust for Mobile Phones (max-width: 767px) */
  @media (max-width: 767px) {
    .label .title {
        right: 16px;
        bottom: 10px;
    }
  }

  .label .title:last-child {
    opacity: 0;
    visibility: hidden;
  }

  .label .circle {
    height: clamp(35px, 8vw, 45px);
    width: clamp(35px, 8vw, 45px);
    border-radius: 50%;
    background-color: rgb(91, 91, 240);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    overflow: hidden;
  }

  .label .circle .icon {
    color: #fff;
    width: clamp(25px, 6vw, 30px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle .square {
    aspect-ratio: 1;
    width: clamp(12px, 3vw, 15px);
    border-radius: 2px;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #3333a8;
    width: 100%;
    height: 0;
    transition: all 0.4s ease;
  }

  .label:has(.input:checked) {
    width: clamp(45px, 12vw, 57px);
    animation: installed 0.4s ease 3.5s forwards;
  }

  .label:has(.input:checked)::before {
    animation: rotate 3s ease-in-out 0.4s forwards;
  }

  .label .input:checked + .circle {
    animation:
      pulse 1s forwards,
      circleDelete 0.2s ease 3.5s forwards;
    rotate: 180deg;
  }

  .label .input:checked + .circle::before {
    animation: installing 3s ease-in-out forwards;
  }

  .label .input:checked + .circle .icon {
    opacity: 0;
    visibility: hidden;
  }

  .label .input:checked ~ .circle .square {
    opacity: 1;
    visibility: visible;
  }

  .label .input:checked ~ .title {
    opacity: 0;
    visibility: hidden;
  }

  .label .input:checked ~ .title:last-child {
    animation: showInstalledMessage 0.4s ease 3.5s forwards;
  }

  @keyframes pulse {
    0% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
      scale: 1;
      box-shadow: 0 0 0 clamp(12px, 3vw, 16px) rgba(255, 255, 255, 0);
    }
    100% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes installing {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-90deg) translate(clamp(20px, 5vw, 27px)) rotate(0);
      opacity: 1;
      visibility: visible;
    }
    99% {
      transform: rotate(270deg) translate(clamp(20px, 5vw, 27px)) rotate(270deg);
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes installed {
    100% {
      width: clamp(120px, 30vw, 150px);
      border-color: rgb(35, 174, 35);
    }
  }

  @keyframes circleDelete {
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes showInstalledMessage {
    100% {
      opacity: 1;
      visibility: visible;
      right: clamp(45px, 12vw, 56px);
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      padding: 5px;
    }
    
    .label {
      padding: 3px;
    }
  }
`;

export default Switch;