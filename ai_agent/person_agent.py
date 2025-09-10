"""
Person Agent - AI Assistant for Tejas Bhosale
Based on Azure OpenAI GPT-4o with website knowledge and general capabilities
"""

import os
import json
import requests
from typing import Dict, List, Optional
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class PersonAgent:
    def __init__(self):
        """Initialize the Person Agent with website knowledge and capabilities"""
        self.name = "Tejas Bhosale"
        self.role = "AI/ML Researcher & B.Tech Student at IIT Bombay"
        self.website_knowledge = self._load_website_knowledge()
        self.capabilities = self._get_capabilities()
        
        # Azure OpenAI Configuration
        self.azure_endpoint = os.getenv('AZURE_OPENAI_ENDPOINT')
        self.azure_api_key = os.getenv('AZURE_OPENAI_API_KEY')
        self.azure_api_version = os.getenv('AZURE_OPENAI_API_VERSION', '2025-01-01-preview')
        self.azure_deployment = os.getenv('AZURE_OPENAI_DEPLOYMENT_NAME', 'gpt-4o')
        
        # Validate Azure configuration
        if not all([self.azure_endpoint, self.azure_api_key]):
            print("Warning: Azure OpenAI configuration not found. Please check your .env file.")
        
    def _load_website_knowledge(self) -> Dict:
        """Load knowledge about Tejas Bhosale from website content"""
        return {
            "personal_info": {
                "name": "Tejas Bhosale",
                "title": "AI/ML Researcher • IIT Bombay • Deep Learning Enthusiast",
                "education": "B.Tech in Mechanical Engineering at IIT Bombay",
                "additional_degree": "Bachelor of Science in Computer Science and Engineering",
                "certification": "Certificate of Advanced Undergraduate Research in Artificial Intelligence and Machine Learning",
                "location": "Mumbai, India",
                "institution": "Indian Institute of Technology Bombay",
                "graduation_year": "2025"
            },
            "contact_info": {
                "phone": "+91-9673016092",
                "email": "210100159@iitb.ac.in",
                "linkedin": "https://www.linkedin.com/in/tejas-bhosale-b7b95a227/",
                "github": "https://github.com/tejasbhosale-git",
                "twitter": "https://x.com/tejasbhosale07"
            },
            "interests": [
                "Artificial Intelligence",
                "Machine Learning", 
                "Computer Vision",
                "Natural Language Processing",
                "Deep Learning",
                "Graph Neural Networks",
                "Explainable AI"
            ],
            "skills": {
                "programming_languages": ["Python", "C++"],
                "ml_frameworks": ["PyTorch", "TensorFlow"],
                "specializations": [
                    "Machine Learning & AI",
                    "Computer Vision & OpenCV",
                    "Web Development",
                    "Graph Neural Networks",
                    "Neural Network Architectures"
                ],
                "experience_years": {
                    "Python": 4,
                    "C++": 3
                }
            },
            "research_papers": [
                {
                    "title": "NeuroPlastic SOM",
                    "status": "Publishing in CIKM 2024, May (Paper Draft)",
                    "advisor": "Prof. Kshitij Jadav, IIT Bombay",
                    "description": "Advanced Self-Organizing Map with synaptic decay, neurogenesis, and memory forgetting for adaptive learning and feature ranking. Novel feature ranking approach inspired by neuroplasticity, tested on BRCA and ROSMAP datasets."
                },
                {
                    "title": "EGD Optimizer",
                    "status": "Paper in Progress (Paper Draft)",
                    "description": "Exploratory Gradient Descent optimizer enhancing learning rate adjustments, RMSProp updates, and incorporating evolutionary perturbation mechanism. Tested on CNN training and non-convex classification tasks, outperforming Adam and RMSProp."
                }
            ],
            "projects": [
                {
                    "title": "AI-Powered Financial Risk & ESG Intelligence Platform",
                    "category": "Comprehensive Financial AI System",
                    "description": "Next-generation platform for fraud detection, credit risk scoring, and ESG tracking using ML, Graph Neural Networks, and Generative AI",
                    "components": [
                        "Fraud & Credit Risk Engine with OCR + ML/DL models",
                        "ESG / Carbon Footprint Tracker with MCC classification",
                        "GenAI Explainability Layer with natural language explanations",
                        "Financial Graph Intelligence for entity graph construction"
                    ],
                    "technologies": ["Python", "Graph Neural Networks", "TabNet", "GraphSAGE", "GAT", "PostgreSQL", "OCR", "GenAI", "XAI", "Real-time Streaming"]
                },
                {
                    "title": "Multi-Agent AI Scientist System",
                    "description": "Research project involving multi-agent AI systems for scientific discovery"
                },
                {
                    "title": "VideoGPT",
                    "description": "Implementation of VideoGPT for video understanding and generation"
                },
                {
                    "title": "DeepCarlsen Neural Network",
                    "description": "Neural network implementation for chess playing and analysis"
                }
            ]
        }
    
    def _get_capabilities(self) -> List[str]:
        """Define the agent's capabilities beyond website knowledge"""
        return [
            "Answer questions about Tejas Bhosale's background, education, and experience",
            "Provide information about research papers and projects",
            "Share contact information and social media links",
            "Discuss technical topics in AI/ML, computer vision, and deep learning",
            "Help with general programming questions (Python, C++)",
            "Provide career advice for students in AI/ML field",
            "Discuss IIT Bombay and academic life",
            "Answer questions about machine learning frameworks and tools",
            "Help with project ideas and technical guidance",
            "Provide general knowledge and assistance like a standard LLM"
        ]
    
    def get_agent_prompt(self) -> str:
        """Generate the system prompt for the AI agent"""
        return f"""
You are an AI assistant representing {self.name}, a {self.role}.

PERSONAL INFORMATION:
- Name: {self.website_knowledge['personal_info']['name']}
- Title: {self.website_knowledge['personal_info']['title']}
- Education: {self.website_knowledge['personal_info']['education']}
- Additional Degree: {self.website_knowledge['personal_info']['additional_degree']}
- Certification: {self.website_knowledge['personal_info']['certification']}
- Location: {self.website_knowledge['personal_info']['location']}
- Institution: {self.website_knowledge['personal_info']['institution']}
- Graduation Year: {self.website_knowledge['personal_info']['graduation_year']}

CONTACT INFORMATION:
- Phone: {self.website_knowledge['contact_info']['phone']}
- Email: {self.website_knowledge['contact_info']['email']}
- LinkedIn: {self.website_knowledge['contact_info']['linkedin']}
- GitHub: {self.website_knowledge['contact_info']['github']}
- Twitter: {self.website_knowledge['contact_info']['twitter']}

INTERESTS: {', '.join(self.website_knowledge['interests'])}

SKILLS:
- Programming Languages: {', '.join(self.website_knowledge['skills']['programming_languages'])}
- ML Frameworks: {', '.join(self.website_knowledge['skills']['ml_frameworks'])}
- Specializations: {', '.join(self.website_knowledge['skills']['specializations'])}
- Experience: {self.website_knowledge['skills']['experience_years']['Python']} years Python, {self.website_knowledge['skills']['experience_years']['C++']} years C++

RESEARCH PAPERS:
{self._format_research_papers()}

PROJECTS:
{self._format_projects()}

CAPABILITIES:
{self._format_capabilities()}

INSTRUCTIONS:
1. Answer questions about Tejas Bhosale's background, research, and projects accurately
2. Provide contact information when appropriate
3. Discuss technical topics in AI/ML, computer vision, and deep learning
4. Help with general programming and academic questions
5. Be helpful, professional, and knowledgeable
6. If asked about something not related to Tejas or general knowledge, politely redirect or provide general assistance
7. Always maintain a professional tone representing an IIT Bombay student and AI/ML researcher

Current Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
    
    def _format_research_papers(self) -> str:
        """Format research papers for the prompt"""
        papers_text = ""
        for paper in self.website_knowledge['research_papers']:
            papers_text += f"- {paper['title']}: {paper['status']}\n"
            if 'advisor' in paper:
                papers_text += f"  Advisor: {paper['advisor']}\n"
            papers_text += f"  Description: {paper['description']}\n\n"
        return papers_text
    
    def _format_projects(self) -> str:
        """Format projects for the prompt"""
        projects_text = ""
        for project in self.website_knowledge['projects']:
            projects_text += f"- {project['title']}\n"
            if 'category' in project:
                projects_text += f"  Category: {project['category']}\n"
            projects_text += f"  Description: {project['description']}\n"
            if 'components' in project:
                projects_text += f"  Components: {', '.join(project['components'])}\n"
            if 'technologies' in project:
                projects_text += f"  Technologies: {', '.join(project['technologies'])}\n"
            projects_text += "\n"
        return projects_text
    
    def _format_capabilities(self) -> str:
        """Format capabilities for the prompt"""
        return "\n".join([f"- {capability}" for capability in self.capabilities])
    
    def get_contact_info(self) -> Dict:
        """Get contact information"""
        return self.website_knowledge['contact_info']
    
    def get_research_info(self) -> List[Dict]:
        """Get research papers information"""
        return self.website_knowledge['research_papers']
    
    def get_projects_info(self) -> List[Dict]:
        """Get projects information"""
        return self.website_knowledge['projects']
    
    def get_skills_info(self) -> Dict:
        """Get skills information"""
        return self.website_knowledge['skills']
    
    def search_knowledge(self, query: str) -> Optional[str]:
        """Search through the knowledge base for relevant information"""
        query_lower = query.lower()
        
        # Search in personal info
        if any(keyword in query_lower for keyword in ['contact', 'email', 'phone', 'linkedin', 'github']):
            return f"Contact Information: {json.dumps(self.get_contact_info(), indent=2)}"
        
        # Search in research
        if any(keyword in query_lower for keyword in ['research', 'paper', 'publication', 'neuroplastic', 'egd']):
            return f"Research Papers: {json.dumps(self.get_research_info(), indent=2)}"
        
        # Search in projects
        if any(keyword in query_lower for keyword in ['project', 'ai', 'financial', 'risk', 'esg']):
            return f"Projects: {json.dumps(self.get_projects_info(), indent=2)}"
        
        # Search in skills
        if any(keyword in query_lower for keyword in ['skill', 'python', 'c++', 'machine learning', 'ai']):
            return f"Skills: {json.dumps(self.get_skills_info(), indent=2)}"
        
        return None
    
    def call_azure_openai(self, user_query: str) -> str:
        """Call Azure OpenAI GPT-4o with the person agent prompt"""
        if not all([self.azure_endpoint, self.azure_api_key]):
            return "Azure OpenAI configuration not available. Please check your .env file."
        
        try:
            # Prepare the API request
            headers = {
                'Content-Type': 'application/json',
                'api-key': self.azure_api_key
            }
            
            # Construct the full endpoint URL
            url = f"{self.azure_endpoint}?api-version={self.azure_api_version}"
            
            # Prepare the messages
            messages = [
                {
                    "role": "system",
                    "content": self.get_agent_prompt()
                },
                {
                    "role": "user", 
                    "content": user_query
                }
            ]
            
            payload = {
                "messages": messages,
                "max_tokens": 1000,
                "temperature": 0.7,
                "top_p": 0.9
            }
            
            # Make the API call
            response = requests.post(url, headers=headers, json=payload, timeout=30)
            response.raise_for_status()
            
            # Parse the response
            result = response.json()
            return result['choices'][0]['message']['content']
            
        except requests.exceptions.RequestException as e:
            return f"Error calling Azure OpenAI: {str(e)}"
        except KeyError as e:
            return f"Error parsing Azure OpenAI response: {str(e)}"
        except Exception as e:
            return f"Unexpected error: {str(e)}"
    
    def generate_response(self, user_query: str, use_azure: bool = True) -> str:
        """Generate a response based on the user query"""
        if use_azure and all([self.azure_endpoint, self.azure_api_key]):
            # Use Azure OpenAI for enhanced responses
            return self.call_azure_openai(user_query)
        else:
            # Fallback to local knowledge base
            knowledge_result = self.search_knowledge(user_query)
            
            if knowledge_result:
                return f"Based on the information available:\n\n{knowledge_result}\n\nIs there anything specific you'd like to know more about?"
            
            # If no specific knowledge found, provide general guidance
            return f"I can help you with information about {self.name}'s background, research, projects, and skills. I can also assist with general questions about AI/ML, programming, or academic topics. What would you like to know?"

# Example usage
if __name__ == "__main__":
    agent = PersonAgent()
    
    print("=== Person Agent for Tejas Bhosale ===")
    print(f"Agent initialized for: {agent.name}")
    print(f"Role: {agent.role}")
    print(f"Capabilities: {len(agent.capabilities)} different areas")
    print(f"Azure OpenAI configured: {bool(agent.azure_endpoint and agent.azure_api_key)}")
    print("\n" + "="*50)
    
    # Example queries
    test_queries = [
        "What is Tejas's contact information?",
        "Tell me about his research papers",
        "What projects has he worked on?",
        "What are his skills?",
        "How can I reach him?",
        "What advice would you give to someone starting in AI/ML?"
    ]
    
    for query in test_queries:
        print(f"\nQuery: {query}")
        print(f"Response: {agent.generate_response(query, use_azure=True)}")
        print("-" * 30)
    
    # Interactive mode
    print("\n" + "="*50)
    print("Interactive Mode - Type 'quit' to exit")
    print("="*50)
    
    while True:
        user_input = input("\nYou: ").strip()
        if user_input.lower() in ['quit', 'exit', 'bye']:
            print("Goodbye!")
            break
        if user_input:
            response = agent.generate_response(user_input, use_azure=True)
            print(f"Agent: {response}")
