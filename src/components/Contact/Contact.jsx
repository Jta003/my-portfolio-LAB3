// src/components/Contact/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          
          {/* Contact Info */}
          <div className="contact-info">
            <p>I'm always interested in hearing about new projects and opportunities.</p>

            <div className="contact-details">
              <div className="contact-item">
                📫 
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Jtakung@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  jtakung@gmail.com
                </a>
              </div>
              <div className="contact-item">
                📞 
                <a href="tel:+66999999999">+66 99 999 9999</a>
              </div>
              <div className="contact-item">
                📍 <span>Chiang Rai, Thailand</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Jta003" target="_blank" rel="noopener noreferrer">🐱</a>
              <a href="#" target="_blank" rel="noopener noreferrer">🔗</a>
              <a href="#" target="_blank" rel="noopener noreferrer">🐦</a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
