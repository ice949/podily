import React, { useState } from "react";
import "./Practice.css";
import Header from "../../components/d_header/Header";
import topic from "../../assets/topic.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Practice = () => {
  const tableTopics = [
    {
      id: 1,
      topic:
        "You are at a friends birthday party, Give a 30 seconds speech about them",
      time: 30,
      tag: "social",
      img: topic,
    },
    {
      id: 2,
      topic:
        "You are a teacher, give a 1 minute speech on the importance of education",
      time: 60,
      tag: "educational",
      img: topic,
    },
    {
      id: 3,
      topic:
        "You are a salesperson, give a 1 minute speech on the importance of your product",
      time: 60,
      tag: "sales",
      img: topic,
    },
    {
      id: 4,
      topic:
        "You are a motivational speaker, give a 1 minute speech on the importance of self confidence",
      time: 60,
      tag: "motivational",
      img: topic,
    },
    {
      id: 5,
      topic:
        "You are a politician, give a 1 minute speech on the importance of good governance",
      time: 60,
      tag: "political",
      img: topic,
    },
    {
      id: 6,
      topic:
        "You are a comedian, give a 1 minute speech on the importance of humor",
      time: 60,
      tag: "comedy",
      img: topic,
    },
    {
      id: 7,
      topic:
        "You are a preacher, give a 1 minute speech on the importance of faith",
      time: 60,
      tag: "religious",
      img: topic,
    },
    {
      id: 8,
      topic:
        "You are a coach, give a 1 minute speech on the importance of teamwork",
      time: 60,
      tag: "sports",
      img: topic,
    },
    {
      id: 9,
      topic:
        "You are a scientist, give a 1 minute speech on the importance of research",
      time: 60,
      tag: "science",
      img: topic,
    },
    {
      id: 10,
      topic:
        "You are a celebrity, give a 1 minute speech on the importance of privacy",
      time: 60,
      tag: "celebrity",
      img: topic,
    },
  ];

  const [tableTopic, setTableTopic] = useState(tableTopics[0]);

  const [timer, setTimer] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [status, setStatus] = useState("not-started");

  const handleTableTopic = () => {
    const number = Math.floor(Math.random() * 10);
    setTableTopic(tableTopics[number]);
  };

  const prepareToSpeak = () => {
    setTimeout(() => {
      setStatus("preparing");
      setTimeLeft(tableTopic.time);
    }, 3000);
  }

  return (
    <div className="ds">
      <Header value="practice" />
      <section className="practice-container">
        <div className="practice-holder">
          {status === "not-started"? (
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
          ): ""}
        </div>
      </section>
    </div>
  );
};

export default Practice;
