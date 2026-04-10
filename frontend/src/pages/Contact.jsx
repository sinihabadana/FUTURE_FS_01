import { motion } from "framer-motion";

export default function Contact({ handleSubmit, handleChange }) {
  return (
    <motion.div
      className="section contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Contact Me</h2>

      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out for opportunities or collaborations.</p>

          <p><strong>Email:</strong> siniha@email.com</p>
          <p><strong>GitHub:</strong> github.com/siniha</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/siniha</p>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" onChange={handleChange} />
          <input name="email" placeholder="Your Email" onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </motion.div>
  );
}