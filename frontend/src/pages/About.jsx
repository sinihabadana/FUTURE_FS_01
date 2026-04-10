import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="section"
      style={{ background: "#FED7AA" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>About Me</h2>

      <div className="card">
        <h3>Background</h3>
        <p>BTech CSE student passionate about development.</p>
      </div>

      <div className="card">
        <h3>Skills</h3>
        <p>React, Node.js, Java, Git</p>
      </div>
      <div className="card">
        <h3>Goals</h3>
        <p>To become a full stack developer and work on real-world projects.</p>
      </div>
      <div className="card">
        <p>
          I enjoy working on both frontend and backend technologies and building real-world applications.
        </p>
      </div>

      <div className="card">
        <p>
          I have developed real-world applications including an Employee Leave Management System and an E-commerce platform to solve practical problems for small organizations.
        </p>
      </div>

      <div className="card">
        <p>
          Currently working on real-world full stack projects as part of my internship at Future Interns.
        </p>
      </div>
      
    </motion.div>
  );
}