import React from 'eact';
import './About.css'; // Ensure the path is correct
import { FaFacebook, FaInstagram, FaYoutube } from 'eact-icons/fa'; // Importing Font Awesome icons

const App = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <h1>Music that moves your soul.</h1>
          <a href="album.html" className="btn">Listen Now</a>
        </section>

        <section className="info">
          <p>&copy; 2024 Riteeka Gawand</p>
          <p>29°C Haze</p>
          <p>Q Search</p>
          <p>ENG 00:25 IN 17-06-2024 PRE</p>
        </section>

        <section className="story">
          <h1>Our Story</h1>
          <h3>
            Music has always been my passion. Growing up, I was inspired by legendary artists like Lata Mangeshkar and also by the incredible talent of the underrated Shilpa Rao. Her unique voice, powerful lyrics and innovative sound have always resonated with me. In 2018, I decided to pursue my dream of making music and haven't looked back since.
          </h3>
        </section>

        <section className="connect">
          <h2>Connect With Us</h2>
          <a href="https://www.facebook.com/bandpage/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <p>Subscribe to our newsletter for updates and exclusive content!</p>
          <form action="subscribe.php" method="post">
            <input type="email" name="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;