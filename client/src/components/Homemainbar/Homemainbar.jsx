import React from "react";
import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "./Homemainbar.css";
import Questionlist from "./Questionlist";
import { useSelector } from "react-redux";
import StackOverflow from "../../assets/StackOverflow.mp4"
const Homemainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const questionslist = useSelector((state) => state.questionreducer);
  const videoRef = useRef(null);
  let isPlaying = false;
  let isSeeking = false; 

  useEffect(() => {
    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      currentVideoRef.addEventListener('click', handleClick);
      currentVideoRef.addEventListener('mousedown', handleMouseDown);
      currentVideoRef.addEventListener('mouseup', handleMouseUp);
      currentVideoRef.addEventListener('touchstart', handleTouchStart);
      currentVideoRef.addEventListener('touchend', handleTouchEnd);

      return () => {
        currentVideoRef.removeEventListener('click', handleClick);
        currentVideoRef.removeEventListener('mousedown', handleMouseDown);
        currentVideoRef.removeEventListener('mouseup', handleMouseUp);
        currentVideoRef.removeEventListener('touchstart', handleTouchStart);
        currentVideoRef.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  const handleClick = (event) => {
    if (event.detail === 2) { // Double click
      const rect = videoRef.current.getBoundingClientRect();
      const middle = rect.width / 2;
      if (event.clientX >= middle) {
        videoRef.current.currentTime += 10;
      } else {
        videoRef.current.currentTime -= 5;
      }
    } else if (event.detail === 1) { 
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  const handleMouseDown = (event) => {
    isSeeking = true;
    const rect = videoRef.current.getBoundingClientRect();
    const middle = rect.width / 2;
    if (event.clientX < middle) {
      videoRef.current.playbackRate = 1;
    } else {
      videoRef.current.playbackRate = 2;
    }
  };

  const handleMouseUp = () => {
    isSeeking = false;
    videoRef.current.playbackRate = 1;
  };

  const handleTouchStart = () => {
    isSeeking = true; 
  };

  const handleTouchEnd = () => {
    isSeeking = false;
  };

  const checkauth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("./Askquestion");
    }
  };
  
  return (
    <div className="main-bar">
      <div className="vdo-bar">
      <video ref={videoRef} src={StackOverflow} controls={false}>
      {!isPlaying && <div className="play-button">Play</div>}
    </video>

      
      </div>
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkauth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionslist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionslist.data.length} questions</p>
            <Questionlist questionslist={questionslist.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Homemainbar;
