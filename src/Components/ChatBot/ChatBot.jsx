import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import Fuse from 'fuse.js';
import './ChatBot.css';
import chatbot from '/chatbot.png';
import closeChat from '/closeChat.png';

const rawData = [
  {
    question: "How can I contact you?",
    variants: ["contact", "contact?", "how to contact", "how can i contact", "reach you", "get in touch"],
    answers: ["You can reach me via the Contact section"]
  },
  {
    question: "Hello",
    variants: ["hello", "hi", "hii", "hey", "hiya", "good morning", "good afternoon"],
    answers: ["Hi there! 👋", "Hello! How can I help you today?"]
  },
  {
    question: "Show me your portfolio",
    variants: ["portfolio", "show portfolio", "see your work", "show me your work"],
    answers: ["Check out my latest work in the Portfolio section."]
  },
  {
    question: "What are your skills?",
    variants: ["skills", "your skills", "what can you do", "tech stack", "technologies"],
    answers: ["I specialize in full-stack development, UI/UX, and creative design."]
  },
  {
    question: "Tell me about your projects",
    variants: ["projects", "your projects", "past work", "show me your projects"],
    answers: ["I have worked on various projects, including web apps, mobile apps, and design prototypes."]
  },
  {
    question: "What's your experience?",
    variants: ["experience", "your experience", "how long have you worked"],
    answers: ["I have over 3 years of experience in software development and design."]
  },
  {
    question: "What's your education?",
    variants: ["education", "your education", "academic background", "qualifications"],
    answers: ["I am an undergraduate in Software Engineering."]
  },
  {
    question: "What are your hobbies?",
    variants: ["hobbies", "free time", "what do you like to do", "interests"],
    answers: ["In my free time, I enjoy photography, reading, and exploring new technologies."]
  },
  {
    question: "Help",
    variants: ["help", "i need help", "what can you do", "how to use this"],
    answers: ["How can I assist you today? Feel free to ask me anything!"]
  },
  {
    question: "Goodbye",
    variants: ["bye", "goodbye", "see you", "later"],
    answers: ["Goodbye! Have a great day! 😊", "See you later!"]
  }
];


// Preprocess and normalize data with variants
const normalize = (text) => text.toLowerCase().trim();

const data = rawData.flatMap(entry => {
  const base = normalize(entry.question);
  const variants = entry.variants?.map(normalize) || [];
  return [base, ...variants].map(v => ({
    question: entry.question,
    normalized: v,
    answers: entry.answers
  }));
});

const fuse = new Fuse(data, {
  keys: ['normalized'],
  threshold: 0.3
});

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am BoB. Ask me anything.' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const toggleChat = () => setIsOpen(prev => !prev);

  const addMessage = (from, text) => {
    setMessages(prev => [...prev, { from, text }]);
  };

  const getRandomAnswer = (answers) =>
    answers[Math.floor(Math.random() * answers.length)];

  const generateReply = (inputText) => {
    const userInput = normalize(inputText);

    // Exact match
    const exact = data.find(entry => entry.normalized === userInput);
    if (exact) return getRandomAnswer(exact.answers);

    // Fuzzy match
    const result = fuse.search(userInput);
    if (result.length > 0) {
      return getRandomAnswer(result[0].item.answers);
    }

    return "I'm not sure about that. Can you ask something else?";
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    addMessage('user', trimmed);
    const reply = generateReply(trimmed);
    setTimeout(() => addMessage('bot', reply), 500);
    setInput('');
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <button onClick={toggleChat} className="chat-toggle-btn" aria-label="Toggle Chat">
        <img src={isOpen ? closeChat : chatbot} alt="Chat Icon" />
      </button>

      {isOpen && (
        <Draggable cancel=".chatbot-input input, .chatbot-input button">
          <div className="chatbot-window">
            <div className="chatbot-header">Chat with BoB...</div>
            <div className="chatbot-messages" ref={chatRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.from}`}>
                  <div className="bubble">{msg.text}</div>
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
              />
              <button onClick={handleSend}>➤</button>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default ChatBot;
