import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIPageProps {
  onBackToPortfolio: () => void;
}

const AIPage: React.FC<AIPageProps> = ({ onBackToPortfolio }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Tejas's AI assistant. I can help you with information about Tejas's background, research, projects, and skills, plus I can answer general knowledge questions on any topic! How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentQuery = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Try to call Azure OpenAI API first
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: currentQuery,
          use_azure: true 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('API call failed');
      }
      
    } catch (error) {
      // Fallback to local knowledge base if API fails
      const localResponse = getFallbackResponse(currentQuery);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: localResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (query: string): string => {
    const queryLower = query.toLowerCase();
    
    // Handle general questions - now we can answer them!
    if (queryLower.includes('pm of india') || queryLower.includes('prime minister') || (queryLower.includes('who is') && queryLower.includes('india'))) {
      return "As of my last knowledge update, the Prime Minister of India is Narendra Modi. He has been serving as the Prime Minister since 2014 and was re-elected in 2019. For the most current information, I'd recommend checking recent news sources.\n\nIs there anything else you'd like to know about India, or would you like to ask about Tejas's work and research?";
    }
    
    // Handle short responses or unclear queries
    if (queryLower.length < 3 || queryLower === 'wht' || queryLower === 'what' || queryLower === 'huh' || queryLower === '?' || queryLower === '??') {
      return "I'd be happy to help! Could you please ask a more specific question? Here are some things you can ask me about Tejas:\n\n• \"What is Tejas's contact information?\"\n• \"Tell me about his research papers\"\n• \"What projects has he worked on?\"\n• \"What are his skills?\"\n• \"Tell me about his education\"\n• \"How can I reach him?\"\n\nWhat would you like to know?";
    }
    
    // Contact information
    if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('phone') || queryLower.includes('reach') || queryLower.includes('how can i')) {
      return "You can reach Tejas at:\n\n📧 **Email**: 210100159@iitb.ac.in\n📱 **Phone**: +91-9673016092\n🔗 **LinkedIn**: https://www.linkedin.com/in/tejas-bhosale-b7b95a227/\n🐙 **GitHub**: https://github.com/tejasbhosale-git\n🐦 **Twitter**: https://x.com/tejasbhosale07\n\n📍 **Location**: Mumbai, India\n🏫 **Institution**: Indian Institute of Technology Bombay";
    }
    
    // Research papers
    if (queryLower.includes('research') || queryLower.includes('paper') || queryLower.includes('publication')) {
      return "Tejas has worked on several research papers:\n\n📄 **1. NeuroPlastic SOM**\n   • **Status**: Publishing in CIKM 2024, May\n   • **Advisor**: Prof. Kshitij Jadav, IIT Bombay\n   • **Description**: Advanced Self-Organizing Map with synaptic decay, neurogenesis, and memory forgetting for adaptive learning and feature ranking\n   • **Applications**: BRCA and ROSMAP datasets for cancer and Alzheimer's research\n\n📄 **2. EGD Optimizer**\n   • **Status**: Paper in Progress\n   • **Description**: Exploratory Gradient Descent optimizer enhancing learning rate adjustments, RMSProp updates, and incorporating evolutionary perturbation mechanism\n   • **Performance**: Outperforms Adam and RMSProp on CNN training and non-convex classification tasks";
    }
    
    // Projects
    if (queryLower.includes('project') || queryLower.includes('ai') || queryLower.includes('financial') || queryLower.includes('work')) {
      return "Tejas's main projects include:\n\n🌐 **AI-Powered Financial Risk & ESG Intelligence Platform**\n   • **Category**: Comprehensive Financial AI System\n   • **Components**:\n     - 🔒 Fraud & Credit Risk Engine (OCR + ML/DL models)\n     - 🌱 ESG / Carbon Footprint Tracker (MCC classification)\n     - 🤖 GenAI Explainability Layer (Natural language explanations)\n     - 🕸️ Financial Graph Intelligence (Entity graph construction)\n   • **Technologies**: Python, Graph Neural Networks, TabNet, GraphSAGE, GAT, PostgreSQL, OCR, GenAI, XAI\n\n🤖 **Multi-Agent AI Scientist System**\n   • Research project involving multi-agent AI systems for scientific discovery\n\n🎥 **VideoGPT**\n   • Implementation of VideoGPT for video understanding and generation\n\n♟️ **DeepCarlsen Neural Network**\n   • Neural network implementation for chess playing and analysis";
    }
    
    // Skills
    if (queryLower.includes('skill') || queryLower.includes('python') || queryLower.includes('programming') || queryLower.includes('experience')) {
      return "Tejas's skills and experience:\n\n💻 **Programming Languages**\n   • 🐍 **Python** - 4+ years experience\n   • ⚡ **C++** - 3+ years experience\n\n🤖 **Machine Learning & AI**\n   • **Frameworks**: PyTorch, TensorFlow\n   • **Specializations**: Deep Learning, Computer Vision, NLP, Graph Neural Networks\n   • **Applications**: Neural networks, transformers, OpenCV\n\n🌐 **Web Development**\n   • Full-stack applications with Django, Node.js\n   • Modern web frameworks and technologies\n\n📊 **Research Areas**\n   • Explainable AI (XAI)\n   • Graph Neural Networks (GraphSAGE, GAT)\n   • Optimization algorithms\n   • Computer vision and image processing";
    }
    
    // Education
    if (queryLower.includes('education') || queryLower.includes('iit') || queryLower.includes('bombay') || queryLower.includes('degree') || queryLower.includes('student')) {
      return "Tejas's education background:\n\n🏫 **Indian Institute of Technology Bombay**\n   • 🎓 **Bachelor of Technology** in Mechanical Engineering\n   • 🎓 **Bachelor of Science** in Computer Science and Engineering\n   • 📜 **Certificate** of Advanced Undergraduate Research in AI/ML\n   • 📍 **Location**: Mumbai, India\n   • 🎯 **Graduation**: 2025\n\n🎯 **Focus Areas**:\n   • Artificial Intelligence and Machine Learning\n   • Computer Vision and Deep Learning\n   • Research in neural networks and optimization";
    }
    
    // Background/About
    if (queryLower.includes('about') || queryLower.includes('background') || queryLower.includes('who') || queryLower.includes('introduce')) {
      return "About Tejas Bhosale:\n\n👨‍💻 **AI/ML Researcher & B.Tech Student at IIT Bombay**\n\n🎯 **Current Focus**:\n   • B.Tech student in Mechanical Engineering at IIT Bombay\n   • Passionate about Computer Science and AI/ML\n   • Working on cutting-edge research in neural networks and optimization\n\n🔬 **Research Interests**:\n   • Artificial Intelligence and Machine Learning\n   • Computer Vision and Natural Language Processing\n   • Deep Learning and Neural Network Architectures\n   • Graph Neural Networks and Explainable AI\n\n🚀 **Mission**:\n   • Solving real-world problems through innovative technology solutions\n   • Contributing to the advancement of AI/ML research\n   • Building practical applications that make a difference";
    }
    
    // Try to provide a more contextual response based on partial matches
    if (queryLower.includes('tejas') || queryLower.includes('bhosale')) {
      return "I'd be happy to tell you more about Tejas Bhosale! Here's a quick overview:\n\n👨‍💻 **AI/ML Researcher & B.Tech Student at IIT Bombay**\n\n🎯 **What I can tell you about:**\n• His research papers (NeuroPlastic SOM, EGD Optimizer)\n• His projects (AI-Powered Financial Risk Platform, etc.)\n• His skills and experience (Python, C++, ML/AI)\n• His education (IIT Bombay, dual degrees)\n• How to contact him\n\nWhat specific aspect would you like to know more about?";
    }
    
    // Handle questions that might be about general topics
    if (queryLower.includes('who') || queryLower.includes('what') || queryLower.includes('where') || queryLower.includes('when') || queryLower.includes('why') || queryLower.includes('how')) {
      return "I can help you with both general knowledge questions and information about Tejas Bhosale! I'm a comprehensive AI assistant with knowledge about Tejas's work, research, and background, plus I can answer general questions on various topics.\n\nI can help you with:\n• General knowledge questions (history, science, current events, etc.)\n• Who Tejas is and what he does\n• What projects he's worked on\n• Where he studies (IIT Bombay)\n• How to contact him\n• Technical questions about AI/ML, programming, etc.\n\nWhat would you like to know?";
    }
    
    // Default response for unclear queries
    return "I'm not sure I understand your question. I'm a comprehensive AI assistant that can help you with:\n\n📚 **General Knowledge**: History, science, current events, geography, etc.\n👨‍💻 **About Tejas**: His background, research, projects, and skills\n💻 **Technical Topics**: AI/ML, programming, computer science\n🎓 **Academic Questions**: Education, research, career advice\n\nHere are some examples:\n• \"What is Tejas's contact information?\"\n• \"Tell me about his research papers\"\n• \"What projects has he worked on?\"\n• \"Who is the current PM of India?\"\n• \"How does machine learning work?\"\n• \"What is Python programming?\"\n\nCould you please rephrase your question or ask something specific?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendQuickMessage = (message: string) => {
    setInputValue(message);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Swirls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-60 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBackToPortfolio}
            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-sm font-medium">Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        {/* Show initial content only if no chat messages */}
        {messages.length <= 1 && (
          <>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-4"
            >
              <h2 className="text-lg text-gray-700 mb-2">Hey, I'm Tejas 👋</h2>
              <h1 className="text-6xl md:text-7xl font-bold text-black">AI Portfolio</h1>
            </motion.div>

            {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="mb-12"
        >
          <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl p-1">
            <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
              <svg
                className="w-32 h-32 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                <circle cx="8" cy="8" r="1"/>
                <circle cx="16" cy="8" r="1"/>
                <circle cx="8" cy="16" r="1"/>
                <circle cx="16" cy="16" r="1"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
          </div>
        </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mb-8"
            >
              {[
                { icon: "😊", label: "Me", action: () => sendQuickMessage("Tell me about yourself") },
                { icon: "💼", label: "Projects", action: () => sendQuickMessage("What projects have you worked on?") },
                { icon: "📚", label: "Skills", action: () => sendQuickMessage("What are your technical skills?") },
                { icon: "🎉", label: "Fun", action: () => sendQuickMessage("Tell me something fun about you") },
                { icon: "📧", label: "Contact", action: () => sendQuickMessage("How can I contact you?") }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={item.action}
                  className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 min-w-[100px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Background Text */}
            <div className="absolute bottom-10 left-10 text-8xl font-bold text-gray-100 select-none pointer-events-none opacity-20">
              TEJAS
            </div>
            <div className="absolute bottom-10 right-10 text-8xl font-bold text-gray-100 select-none pointer-events-none opacity-20">
              BHOSALE
            </div>
          </>
        )}

        {/* Chat Messages - Integrated into main layout like ChatGPT */}
        {messages.length > 1 && (
          <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 mb-4">
              {messages.slice(1).map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-3xl ${message.isUser ? 'ml-12' : 'mr-12'}`}>
                    <div className={`flex items-start space-x-3 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser 
                          ? 'bg-blue-500' 
                          : 'bg-gradient-to-br from-blue-400 to-purple-500'
                      }`}>
                        {message.isUser ? (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                        )}
                      </div>
                      
                      {/* Message Content */}
                      <div className={`flex-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block px-4 py-3 rounded-2xl ${
                          message.isUser
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-black'
                        }`}>
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</p>
                        </div>
                        <p className={`text-xs mt-1 ${
                          message.isUser ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-3xl mr-12">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <div className="bg-gray-100 text-black px-4 py-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Field - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="flex items-center bg-white rounded-2xl shadow-lg border border-gray-200 p-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 px-6 py-4 text-lg border-none outline-none bg-transparent placeholder-gray-400 text-black"
              disabled={isLoading}
            />
            <motion.button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIPage;
