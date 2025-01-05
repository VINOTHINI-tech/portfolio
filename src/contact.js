import './contact.css';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.jpg';
import call from './assets/call.avif';
import insta from './assets/insta.jpg';

function Contact() {
  return (
    <div className="container">
      <h1 className="qual m-auto text-center">Qualification</h1>
      <ul id="deg">
        <li><h3>SJSV School - SSLC: 81%</h3></li>
        <li><h3>SJSV School - HSC: 81%</h3></li>
        <li><h3>ACET - UG: CGPA: 8.02</h3></li>
      </ul>
      <footer className="footer">
        <h1 id="contact">Contact</h1>
        <div className="footer-icons">
          <a href="mailto:vinothinirajan2107@gmail.com" target="_blank" rel="noopener noreferrer" title="Mail">
            <img src={email} alt="Mail Icon" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/vinothini-rajan-37a8b426a" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedin} alt="LinkedIn Icon" className="icon" />
          </a>
          <a href="https://www.instagram.com/vino_immanuel" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src={insta} alt="Instagram Icon" className="icon" />
          </a>
          <a href="https://wa.me/9025190941" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src={whatsapp} alt="WhatsApp Icon" className="icon" />
          </a>
          <a href="tel:+919025190941" title="Call">
            <img src={call} alt="Call Icon" className="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
