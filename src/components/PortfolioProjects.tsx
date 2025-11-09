import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 120px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div<{ $bgImage: string }>`
  height: 240px;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      ${props => props.theme.colors.primary.main}20,
      transparent 50%,
      ${props => props.theme.colors.primary.dark}20
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main}90,
    ${props => props.theme.colors.primary.dark}90
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background: ${props => props.theme.colors.primary.lighter};
  color: ${props => props.theme.colors.primary.main};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &.primary {
    background: ${props => props.theme.colors.primary.main};
    color: white;
    
    &:hover {
      background: ${props => props.theme.colors.primary.dark};
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${props => props.theme.colors.primary.main};
    border: 1px solid ${props => props.theme.colors.primary.main};
    
    &:hover {
      background: ${props => props.theme.colors.primary.main};
      color: white;
    }
  }
`;

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory management, AI-powered recommendations, and seamless payment integration.",
    image: "/img/web-dev.png", // Using existing image
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Cloud Management Dashboard",
    description: "Comprehensive cloud infrastructure monitoring and management platform with real-time analytics and automated scaling.",
    image: "/img/cloud.jpg", // Using existing image
    technologies: ["Vue.js", "Python", "AWS", "Docker", "Kubernetes"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "AI-Powered Mobile App",
    description: "Cross-platform mobile application leveraging machine learning for personalized user experiences and predictive analytics.",
    image: "/img/ai-ml.png", // Using existing image
    technologies: ["React Native", "TensorFlow", "Firebase", "Python", "FastAPI"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Digital Marketing Suite",
    description: "Integrated marketing automation platform with advanced analytics, campaign management, and ROI tracking capabilities.",
    image: "/img/digital-marketing-big.png", // Using existing image
    technologies: ["Angular", "Django", "PostgreSQL", "Redis", "Celery"],
    liveUrl: "#",
    codeUrl: "#"
  }
];

const PortfolioProjects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <ProjectsContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover our latest work showcasing innovative solutions and cutting-edge technologies
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectImage $bgImage={project.image}>
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <ProjectOverlay
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      View Project Details
                    </ProjectOverlay>
                  )}
                </AnimatePresence>
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechBadge key={index}>{tech}</TechBadge>
                  ))}
                </TechStack>
                
                {/* <ProjectLinks>
                  <ProjectLink 
                    href={project.liveUrl}
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </ProjectLink>
                  <ProjectLink 
                    href={project.codeUrl}
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </ProjectLink>
                </ProjectLinks> */}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

export default PortfolioProjects;