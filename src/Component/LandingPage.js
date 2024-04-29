import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function LandingPage() {
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const sendMessage = () => {
    if (inputValue.trim() === '') return;
    setQuestion(inputValue);
    setInputValue('');
    gemini();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const gemini = async () => {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC9IhchGDyUjcrIItScgnqURrs0W5B9gBg`,
      method: 'post',
      data: { contents: [{ parts: [{ text: inputValue }] }] },
    });
    const mybot = await response.data?.candidates[0]?.content?.parts[0].text;
    setChatResponse(mybot);
  };

  const clearChat = () => {
    setQuestion([]);
    setInputValue('');
    setChatResponse('');
    setShowChat(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around">
  <div className="text-center lg:text-left lg:w-1/2">
    <p className="text-4xl font-bold mt-10 lg:mt-0">One Stop Solution For Confusing <br /> Tech Content</p>
    <p className="mt-2 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
      Explore Now
    </button>
  </div>
  <img className="mt-10 lg:mt-0 max-w-full lg:max-w-none" src="https://img.freepik.com/free-vector/futuristic-classroom-little-children-study-with-high-tech-equipment_335657-3308.jpg" alt="courses" />
</div>
{showChat ? (
  <div className="fixed bottom-0 right-0 m-8 bg-white p-4 rounded shadow w-full lg:w-80 h-[80vh] overflow-scroll flex flex-col lg:flex-row">
    {/* Chat component */}
  </div>
) : (
  <div className="fixed bottom-0 right-0 m-8">
    <FontAwesomeIcon icon={faComments} className="text-blue-500 cursor-pointer" size="3x" onClick={toggleChat} />
  </div>
)}

    </>
  );
}

export default LandingPage;
