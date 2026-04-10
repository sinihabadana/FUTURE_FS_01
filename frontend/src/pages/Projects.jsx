import { motion } from "framer-motion";
import leaveImg from "../assets/leave-system.png";
import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
export default function Projects() {
  return (
    <motion.div className="section" style={{ background: "#FED7AA" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Projects</h2>

      <div className="grid">

        {/* Project 1 */}
        <div className="card">
          <img src={leaveImg} alt="Leave System" className="project-img" />
          <h3>Employee Leave Management System</h3>
          <p>
            Developed a console-based Java application for a small institution
            to manage employee leave records efficiently, replacing manual record-keeping.
          </p>
          <p><strong>Impact:</strong> Reduced manual work and improved record accuracy.</p>
          <p><strong>Tech:</strong> Java</p>
          <div className="project-links">
            <a href="https://github.com/sinihabadana/JAVA-PROJECT" target="_blank">GitHub</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card">
          <img src={ecommerceImg} alt="Ecommerce" className="project-img" />
          <h3>E-commerce Product & Cart System</h3>
          <p>
            Built a MERN stack web application for a small business to manage
            product listings and customer orders, simplifying their business operations.
          </p>
          <p><strong>Impact:</strong> Reduced manual work and improved record accuracy.</p>
          <p><strong>Tech:</strong> MongoDB, Express, React, Node.js</p>
          <div className="project-links">
            <a href="https://github.com/sinihabadana/AMSD-PROJECT" target="_blank">GitHub</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card">
          <img src={portfolioImg} alt="Portfolio" className="project-img" />
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio website showcasing skills, projects, and contact information
            with responsive design and modern UI.
          </p>
          <p><strong>Impact:</strong> Reduced manual work and improved record accuracy.</p>
          <p><strong>Tech:</strong> React, CSS</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/portfolio" target="_blank">GitHub</a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}