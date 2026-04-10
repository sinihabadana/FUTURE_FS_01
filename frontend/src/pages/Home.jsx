import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="section"
      style={{ background: "#FED7AA" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Hi, I'm Siniha 👋</h1>
      <p>Full Stack Developer | React | Node.js | Java</p>

      <div className="card">
        <p>
          Passionate about building scalable web applications and solving real-world problems.
        </p>
      </div>
      <div className="resume-buttons">
        <a href="/Siniha_Resume.pdf" target="_blank" className="btn">
          View Resume
        </a>
        <a href="/Siniha_Resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>
    </motion.div>
  );
}