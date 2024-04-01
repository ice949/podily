import React, { useState } from 'react'

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const PracticeStage = ({status, handleTableTopic, tableTopic, prepareToSpeak}) => {

    const [countDownTime, setCountDownTime] = useState(3);

    const countDown = () => {
        setCountDownTime(countDownTime - 1);
    }

    if (status === "not-started") {
    
  return (
    <>
              <h3>Table Topic</h3>
              <div className="flex-row">
                <div className="iconnn">
                  <IoIosArrowDropleftCircle onClick={handleTableTopic} />
                </div>
                <div className="table-topic">
                  <img src={tableTopic.img} alt="topic" />
                  <div className="topic-info">
                    <h2>{tableTopic.topic}</h2>
                    <div className="flex-row">
                      <p className="tag">{tableTopic.tag}</p>
                      <p>{tableTopic.time} seconds</p>
                    </div>
                  </div>
                </div>
                <div className="iconnn">
                  <IoIosArrowDroprightCircle onClick={handleTableTopic} />
                </div>
              </div>
              <div className="instructions">
                <p>Try to avoid filler words such as um, ah, like, so, etc.</p>
                <p>The goal is to make clear and confident speechs</p>
                <button className="btn" onClick={() => {prepareToSpeak()}}>Start Speaking</button>
              </div>
            </>
  )} else if (status === "preparing") {
    setTimeout(() => {
        countDown();
    }, 1000);
    return (
        <div className="prep-speak">
            <div className="mini-card">
                <h4>You are at a friends birthday party, Give a 30 seconds speech about them</h4>
                <div className="flex-row">
                    <p className="tag">{tableTopic.tag}</p>
                    <p>{tableTopic.time} seconds</p>
                </div>
            </div>
            <h2>Get Ready In</h2>
            <h1>{countDownTime}</h1>
            <p className='other-card'>Breath In, You can do this</p>
        </div>
    )

  } else if (status === "speaking") {
    return (
        <div className="prep-speak">
            <div className="mini-card">
                <h4>You are at a friends birthday party, Give a 30 seconds speech about them</h4>
                <div className="flex-row">
                    <p className="tag">{tableTopic.tag}</p>
                    <p>{tableTopic.time} seconds</p>
                </div>
            </div>
            <div className="mic-img"></div>
        </div>
    )

  } else if (status === "analyzing") {

  } else if (status === "done") {

  }
}

export default PracticeStage