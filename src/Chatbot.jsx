import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Cyra, your AI assistant from FEAR Agency. I can help you with information about our services, projects, pricing, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for FEAR Agency
  const knowledgeBase = {
    // Company Info
    company: {
      name: "FEAR Agency",
      fullName: "Face Everything And Rise",
      description: "Professional Mobile App Development Agency specializing in custom mobile apps, UI/UX design, backend development, and comprehensive app solutions",
      email: "fear.agency.contact@gmail.com",
      responseTime: "24 hours"
    },
    
    // Services
    services: {
      "app design": {
        title: "App Design",
        icon: "🎨",
        subServices: [
          "UI/UX Frames & Prototypes - Interactive designs that bring your vision to life",
          "App Store Visual Design - ASO-optimized visuals for maximum downloads", 
          "Mobile Responsiveness - Adaptive design for all screen sizes"
        ],
        tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"]
      },
      "app development": {
        title: "App Development", 
        icon: "💻",
        subServices: [
          "Mobile App Development - Native and cross-platform solutions",
          "Backend & Server Development - Scalable server infrastructure",
          "App Feature Integration - Seamless third-party integrations",
          "App Migration Services - Smooth transition to new platforms"
        ],
        tools: ["React Native", "Flutter", "Swift", "Kotlin", "Node.js", "Firebase"]
      },
      "maintenance": {
        title: "Maintenance & Support",
        icon: "🛠️", 
        subServices: [
          "Bug Fix & Issue Resolution - Quick fixes for critical issues",
          "Regular App Updates - Keep your app current and secure",
          "Monitoring & Optimization - Performance tracking and improvements",
          "Backup & Security - Data protection and recovery"
        ],
        tools: ["Sentry", "New Relic", "Datadog", "AWS", "Docker"]
      },
      "aso": {
        title: "ASO & Integration",
        icon: "🚀",
        subServices: [
          "App Store Optimization - Boost visibility and downloads",
          "Visual Store Asset Optimization - Eye-catching store presence", 
          "API & Backend Integration - Connect with any service",
          "Payment & Notification Services - Secure payments and push notifications"
        ],
        tools: ["App Annie", "Sensor Tower", "Stripe", "PayPal", "OneSignal"]
      }
    },

    // Timeline & Pricing
    timeline: {
      "simple": "7-10 days",
      "professional": "10-20 days", 
      "complex": "15-30 days",
      "ecommerce": "15-30 days"
    },

    // Projects
    projects: [
      {
        name: "Bangalore Bites",
        description: "Food delivery platform",
        website: "https://yashaswi1423.github.io/banglore-bites/"
      },
      {
        name: "Glamour Beauty", 
        description: "Beauty & wellness booking",
        website: "https://yashaswi1423.github.io/glamour/"
      },
      {
        name: "Oneness Yoga",
        description: "Yoga & meditation platform", 
        website: "https://onenessyoga.in"
      }
    ],

    // Payment Structure
    payment: {
      structure: "Milestone-based payment",
      breakdown: "30% upfront, 40% at midpoint, 30% on delivery",
      included: "UI/UX design, frontend and backend development, API integration, testing, deployment to app stores, initial bug fixes, documentation and training"
    },

    // Technologies
    technologies: {
      mobile: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"],
      backend: ["Node.js", "Firebase", "AWS"],
      design: ["Figma", "Adobe XD", "Sketch"],
      monitoring: ["Sentry", "New Relic", "Datadog"]
    }
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm Cyra from FEAR Agency. I'm here to help you with any questions about our mobile app development services. What would you like to know?";
    }

    // Services inquiries
    if (message.includes('service') || message.includes('what do you do')) {
      return `FEAR Agency offers 4 main services:

🎨 **App Design** - UI/UX design, prototypes, and app store visuals
💻 **App Development** - Native & cross-platform mobile apps  
🛠️ **Maintenance & Support** - Ongoing support and updates
🚀 **ASO & Integration** - App store optimization and integrations

Would you like details about any specific service?`;
    }

    // Timeline inquiries
    if (message.includes('time') || message.includes('how long') || message.includes('duration')) {
      return `Our development timelines are:

📱 **Simple Apps**: 7-10 days
✨ **Professional Apps**: 10-20 days  
🚀 **Complex/E-commerce Apps**: 15-30 days

The exact timeline depends on your specific requirements. Would you like to discuss your project?`;
    }

    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('payment')) {
      return `Our payment structure is milestone-based:

💰 **30%** upfront to start the project
💰 **40%** at design approval and development midpoint
💰 **30%** upon final delivery and app store submission

This includes UI/UX design, development, testing, deployment, and initial support. Want a custom quote for your project?`;
    }

    // Technology inquiries
    if (message.includes('technology') || message.includes('tech') || message.includes('platform')) {
      return `We work with cutting-edge technologies:

📱 **Mobile**: React Native, Flutter, Swift, Kotlin
⚙️ **Backend**: Node.js, Firebase, AWS
🎨 **Design**: Figma, Adobe XD, Sketch
📊 **Monitoring**: Sentry, New Relic, Datadog

We choose the best tech stack based on your project needs!`;
    }

    // Projects inquiries
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return `Here are some of our recent projects:

🍕 **Bangalore Bites** - Food delivery platform
💄 **Glamour Beauty** - Beauty & wellness booking app
🧘 **Oneness Yoga** - Yoga & meditation platform

Each project showcases our expertise in different industries. Would you like to see more details about any of these?`;
    }

    // Contact inquiries
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return `You can reach FEAR Agency at:

📧 **Email**: fear.agency.contact@gmail.com
⏰ **Response Time**: Within 24 hours
🌐 **Social**: Facebook, LinkedIn, Instagram

Ready to start your project? I can help you get in touch with our team!`;
    }

    // App types
    if (message.includes('ios') || message.includes('android') || message.includes('cross-platform')) {
      return `We develop for all platforms:

📱 **Native iOS** - Swift development for optimal performance
🤖 **Native Android** - Kotlin for seamless Android experience  
🔄 **Cross-Platform** - React Native & Flutter for both platforms

We'll recommend the best approach based on your budget and requirements!`;
    }

    // Support inquiries
    if (message.includes('support') || message.includes('maintenance') || message.includes('update')) {
      return `Our maintenance & support includes:

🐛 **Bug Fixes** - Quick resolution of critical issues
🔄 **Regular Updates** - Keep your app current and secure
📊 **Performance Monitoring** - Track and optimize performance
🔒 **Security & Backup** - Data protection and recovery

Maintenance terms are discussed before project start. Need ongoing support?`;
    }

    // ASO inquiries
    if (message.includes('aso') || message.includes('app store') || message.includes('optimization')) {
      return `Our ASO services boost your app's visibility:

📈 **Keyword Research** - Target the right search terms
🎯 **Visual Assets** - Eye-catching screenshots and icons
📊 **Performance Monitoring** - Track downloads and rankings
🔍 **Ongoing Optimization** - Continuous improvements

ASO can significantly increase your app downloads!`;
    }

    // Default response
    return `I'd be happy to help! I can provide information about:

• 🎨 Our services (Design, Development, Support, ASO)
• ⏰ Project timelines and pricing
• 💻 Technologies we use
• 📱 Our portfolio projects
• 📞 How to contact our team

What specific information would you like to know about FEAR Agency?`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        <div className="chatbot-badge">Cyra</div>
      </div>

      {/* Chatbot Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <div className="avatar-icon">🤖</div>
          </div>
          <div className="chatbot-info">
            <h3>Cyra</h3>
            <p>FEAR Agency Assistant</p>
          </div>
          <button 
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.isBot ? 'bot' : 'user'}`}
            >
              {message.isBot && (
                <div className="message-avatar">🤖</div>
              )}
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about FEAR's services..."
            disabled={isTyping}
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;