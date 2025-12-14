import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a mobile app?",
      answer: "Our delivery times vary by project type: Basic apps take 7-10 days, Professional apps 10-20 days, and E-commerce or Custom Apps 15-30 days. We provide a detailed timeline during the discovery phase."
    },
    {
      question: "What is included in your app development packages?",
      answer: "Our packages include UI/UX design, frontend and backend development, API integration, testing, deployment to app stores, and initial bug fixes. We also provide documentation and training for your team."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive maintenance packages including regular updates, bug fixes, performance monitoring, security patches, and feature enhancements. Maintenance terms are discussed and agreed upon before project start."
    },
    {
      question: "Can you redesign my existing mobile app?",
      answer: "Absolutely! We specialize in app redesigns and modernization. We'll analyze your current app, identify improvement areas, and create a fresh, modern design while maintaining your core functionality and user data."
    },
    {
      question: "Do you develop both iOS and Android apps?",
      answer: "Yes, we develop native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform solutions using React Native and Flutter. We'll recommend the best approach based on your requirements and budget."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically work with a milestone-based payment structure: 30% upfront to start the project, 40% upon design approval and development midpoint, and 30% upon final delivery and app store submission."
    },
    {
      question: "Will my app be mobile-friendly and responsive?",
      answer: "Absolutely! All our apps are designed with mobile-first principles, ensuring perfect responsiveness across all device sizes, from smartphones to tablets. We test on multiple devices before delivery."
    },
    {
      question: "Do you offer custom app development?",
      answer: "Yes! We specialize in custom app development tailored to your specific business needs. Whether it's a unique feature, complex integration, or specialized functionality, we can build it from scratch."
    },
    {
      question: "What happens if I need changes after the project is complete?",
      answer: "Any additional requests after signing the agreement will require a new quote or project phase. This ensures we maintain quality and timeline commitments. Minor bug fixes within the first 30 days are included."
    },
    {
      question: "How do you handle App Store Optimization (ASO)?",
      answer: "We provide comprehensive ASO services including keyword research, app title and description optimization, visual asset creation (screenshots, icons), and ongoing performance monitoring to maximize your app's visibility and downloads."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p>Everything you need to know about our services</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions? We're here to help!</p>
          <button 
            className="contact-button" 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Get in Touch</span>
            <span className="circle"></span>
            <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
