// API endpoint for chat functionality with Azure OpenAI integration
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Azure OpenAI Configuration
const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_API_KEY = process.env.AZURE_OPENAI_API_KEY;
const AZURE_OPENAI_API_VERSION = process.env.AZURE_OPENAI_API_VERSION || '2025-01-01-preview';
const AZURE_OPENAI_DEPLOYMENT = process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4o';

// Fallback responses for common queries
const getFallbackResponse = (query) => {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('phone')) {
    return "You can reach Tejas at:\n📧 Email: 210100159@iitb.ac.in\n📱 Phone: +91-9673016092\n🔗 LinkedIn: https://www.linkedin.com/in/tejas-bhosale-b7b95a227/\n🐙 GitHub: https://github.com/tejasbhosale-git\n🐦 Twitter: https://x.com/tejasbhosale07";
  }
  
  if (queryLower.includes('research') || queryLower.includes('paper')) {
    return "Tejas has worked on several research papers:\n\n1. **NeuroPlastic SOM** - Publishing in CIKM 2024\n   - Advanced Self-Organizing Map with synaptic decay and neurogenesis\n   - Advisor: Prof. Kshitij Jadav, IIT Bombay\n\n2. **EGD Optimizer** - Paper in Progress\n   - Exploratory Gradient Descent optimizer for enhanced learning\n   - Outperforms Adam and RMSProp on CNN training tasks";
  }
  
  if (queryLower.includes('project') || queryLower.includes('ai') || queryLower.includes('financial')) {
    return "Tejas's main project is the **AI-Powered Financial Risk & ESG Intelligence Platform**:\n\n🔒 **Fraud & Credit Risk Engine** - OCR + ML/DL models for document processing\n🌱 **ESG / Carbon Footprint Tracker** - MCC classification and carbon estimation\n🤖 **GenAI Explainability Layer** - Natural language explanations\n🕸️ **Financial Graph Intelligence** - Entity graph construction and fraud detection\n\nTechnologies: Python, Graph Neural Networks, TabNet, GraphSAGE, GAT, PostgreSQL, OCR, GenAI, XAI";
  }
  
  if (queryLower.includes('skill') || queryLower.includes('python') || queryLower.includes('programming')) {
    return "Tejas's skills include:\n\n🐍 **Python** - 4+ years experience\n⚡ **C++** - 3+ years experience\n🤖 **Machine Learning & AI** - PyTorch, TensorFlow\n👁️ **Computer Vision** - OpenCV and image processing\n🌐 **Web Development** - Full-stack applications\n🧠 **Deep Learning** - Neural networks, transformers\n📊 **Graph Neural Networks** - GraphSAGE, GAT architectures";
  }
  
  if (queryLower.includes('education') || queryLower.includes('iit') || queryLower.includes('bombay')) {
    return "Tejas is a B.Tech student at **Indian Institute of Technology Bombay**:\n\n🎓 **Bachelor of Technology** in Mechanical Engineering\n🎓 **Bachelor of Science** in Computer Science and Engineering\n📜 **Certificate** of Advanced Undergraduate Research in AI/ML\n📍 **Location**: Mumbai, India\n🎯 **Graduation**: 2025";
  }
  
  return "I can help you with information about Tejas's background, research papers, projects, skills, education, and contact details. Feel free to ask about his AI/ML work, IIT Bombay experience, or any technical questions!";
};

// Function to call Azure OpenAI
async function callAzureOpenAI(userMessage) {
  try {
    const systemPrompt = `You are Tejas Bhosale's AI assistant. You have comprehensive knowledge about Tejas and can also answer general questions. Here's what you know about Tejas:

PERSONAL INFORMATION:
- Name: Tejas Bhosale
- Title: AI/ML Researcher • IIT Bombay • Deep Learning Enthusiast
- Education: B.Tech in Mechanical Engineering at IIT Bombay
- Additional Degree: Bachelor of Science in Computer Science and Engineering
- Certification: Certificate of Advanced Undergraduate Research in AI/ML
- Location: Mumbai, India
- Institution: Indian Institute of Technology Bombay
- Graduation Year: 2025

CONTACT INFORMATION:
- Phone: +91-9673016092
- Email: 210100159@iitb.ac.in
- LinkedIn: https://www.linkedin.com/in/tejas-bhosale-b7b95a227/
- GitHub: https://github.com/tejasbhosale-git
- Twitter: https://x.com/tejasbhosale07

INTERESTS: Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing, Deep Learning, Graph Neural Networks, Explainable AI

SKILLS:
- Programming Languages: Python (4 years), C++ (3 years)
- ML Frameworks: PyTorch, TensorFlow
- Specializations: Machine Learning & AI, Computer Vision & OpenCV, Web Development, Graph Neural Networks

RESEARCH PAPERS:
1. NeuroPlastic SOM - Publishing in CIKM 2024, May (Paper Draft)
   - Advisor: Prof. Kshitij Jadav, IIT Bombay
   - Advanced Self-Organizing Map with synaptic decay, neurogenesis, and memory forgetting for adaptive learning and feature ranking
   - Tested on BRCA and ROSMAP datasets

2. EGD Optimizer - Paper in Progress (Paper Draft)
   - Exploratory Gradient Descent optimizer enhancing learning rate adjustments, RMSProp updates, and incorporating evolutionary perturbation mechanism
   - Outperforms Adam and RMSProp on CNN training and non-convex classification tasks

PROJECTS:
1. AI-Powered Financial Risk & ESG Intelligence Platform
   - Comprehensive Financial AI System
   - Components: Fraud & Credit Risk Engine, ESG / Carbon Footprint Tracker, GenAI Explainability Layer, Financial Graph Intelligence
   - Technologies: Python, Graph Neural Networks, TabNet, GraphSAGE, GAT, PostgreSQL, OCR, GenAI, XAI, Real-time Streaming

2. Multi-Agent AI Scientist System - Research project involving multi-agent AI systems for scientific discovery
3. VideoGPT - Implementation of VideoGPT for video understanding and generation
4. DeepCarlsen Neural Network - Neural network implementation for chess playing and analysis

INSTRUCTIONS:
1. Answer questions about Tejas's background, research, and projects accurately
2. Provide contact information when appropriate
3. Discuss technical topics in AI/ML, computer vision, and deep learning
4. Help with general programming and academic questions
5. Answer ANY general knowledge questions as well - you're a full AI assistant
6. Be helpful, professional, and knowledgeable
7. Always maintain a professional tone representing an IIT Bombay student and AI/ML researcher
8. For current events or latest information, provide the best available knowledge and suggest checking recent sources if needed

Current Date: ${new Date().toISOString()}`;

    const response = await axios.post(
      `${AZURE_OPENAI_ENDPOINT}?api-version=${AZURE_OPENAI_API_VERSION}`,
      {
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': AZURE_OPENAI_API_KEY
        },
        timeout: 30000
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Azure OpenAI API error:', error.message);
    throw error;
  }
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message, use_azure = true } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    let response;
    
    if (use_azure && AZURE_OPENAI_ENDPOINT && AZURE_OPENAI_API_KEY) {
      try {
        response = await callAzureOpenAI(message);
      } catch (error) {
        console.log('Azure OpenAI failed, using fallback:', error.message);
        response = getFallbackResponse(message);
      }
    } else {
      response = getFallbackResponse(message);
    }
    
    res.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Chat API server running on port ${PORT}`);
});

module.exports = app;
