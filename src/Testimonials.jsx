import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    content: "This product has completely transformed how our team collaborates. The intuitive design and powerful features make it indispensable."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "StartupXYZ",
    image: "https://i.pravatar.cc/150?img=2",
    content: "Outstanding performance and reliability. We've seen a 40% increase in productivity since implementing this solution."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO",
    company: "InnovateLabs",
    image: "https://i.pravatar.cc/150?img=3",
    content: "The best investment we've made this year. The ROI was evident within the first month of use."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Testimonials</h2>
          <p>What our clients say about us</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
