import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import OnboardingOne from './Pages/first_onboard/OnboardingOne';
import OnboardingTwo from './Pages/second_onboard/OnboardingTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingOne/>} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding-one" element={<OnboardingOne />} />
        <Route path="/onboarding-two" element={<OnboardingTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
