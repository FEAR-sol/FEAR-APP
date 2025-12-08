import './AITools.css';

const tools = [
  { name: "UI/UX Design", icon: "🎨" },
  { name: "App Development", icon: "📱" },
  { name: "ASO Optimization", icon: "📈" },
  { name: "Backend Development", icon: "⚙️" },
  { name: "API Integration", icon: "🔌" },
  { name: "App Testing", icon: "🧪" }
];

const AITools = () => {
  return (
    <section className="ai-tools-section">
      <div className="ai-tools-container">
        <div className="ai-tools-header">
          <h2>App Development Tools We <span className="highlight">Master</span></h2>
        </div>
        
        <div className="tools-loop-wrapper">
          <div className="tools-track">
            <div className="tools-list">
              {tools.map((tool, index) => (
                <div key={index} className="tool-badge">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
            <div className="tools-list" aria-hidden="true">
              {tools.map((tool, index) => (
                <div key={`duplicate-${index}`} className="tool-badge">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
