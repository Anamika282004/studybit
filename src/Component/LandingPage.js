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
      <div className="flex justify-around">
        <div>
          <p className="text-4xl font-bold ml-20 mt-40"> One Stop Solution For Confusing <br /> Tech Content</p>
          <p className="ml-20 mt-2 text-lg ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="bg-transparent hover:bg-blue-500 ml-20 mt-6 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Explore Now
          </button>
        </div>
        <img className="mt-32" src="https://img.freepik.com/free-vector/futuristic-classroom-little-children-study-with-high-tech-equipment_335657-3308.jpg" alt="courses" />
      </div>
      {showChat ? (
        <div className="fixed bottom-0 right-0 m-8 bg-white p-4 rounded shadow w-80 h-[80vh] overflow-scroll flex flex-col z-1">
          <FontAwesomeIcon icon={faTimes} className="absolute top-1 right-2 cursor-pointer text-gray-500" onClick={clearChat} />
          <div className="flex-grow">
            {question && (
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
                {question}
              </div>
            )}
            {chatResponse && (
              <div className="bg-blue-200 text-gray-800 rounded-lg m-2 p-2">
                {chatResponse}
              </div>
            )}
          </div>
          <div className="flex items-center">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type your message..." className="border border-gray-400 p-2 rounded mr-2 text-left" />
            <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Send
            </button>
          </div>
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
