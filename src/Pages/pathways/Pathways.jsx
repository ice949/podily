import React, { useState } from 'react'
import './Pathways.css'
import Header from '../../components/d_header/Header'

const Pathways = () => {

  const [pathways, setPathways] = useState([
    {
      id: 1,
      title: "Workplace Presentations",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 10
    },
    {
      id: 2,
      title: "Social Scenarios",
      description: "With a focus on Energy, humor, storytelling, and audience engagement",
      image: "",
      rating: 9
    },
    {
      id: 3,
      title: "Interview Skills",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 8
    },
    {
      id: 4,
      title: "Storytelling",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 7
    },
    {
      id: 5,
      title: "Negotiation Skills",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 6
    },
    {
      id: 6,
      title: "Leadership Skills",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 5
    },
    {
      id: 7,
      title: "Storytelling",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 4
    },
    {
      id: 8,
      title: "Negotiation Skills",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 3
    },
    {
      id: 9,
      title: "Leadership Skills",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 2
    },
    {
      id: 10,
      title: "Storytelling",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: "",
      rating: 1
    }
  ])
  return (
    <div className='ds'>
      <Header value="pathways"/>
    </div>
  )
}

export default Pathways