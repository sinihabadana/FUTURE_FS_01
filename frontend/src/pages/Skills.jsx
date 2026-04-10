import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className="section"
      style={{ background: "#FED7AA" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Skills</h2>

      <div className="card">
        <h3>Frontend</h3>
        <p>HTML, CSS, JavaScript, React.js</p>
      </div>

      <div className="card">
        <h3>Backend</h3>
        <p>Node.js, Express.js</p>
      </div>

      <div className="card">
        <h3>Programming</h3>
        <p>Java</p>
      </div>

      <div className="card">
        <h3>Tools</h3>
        <p>Git, GitHub, VS Code</p>
      </div>
    </motion.div>
  );
}