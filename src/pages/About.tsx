import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }
  
  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text.muted};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
  
  h2 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary.main};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  p {
    color: ${props => props.theme.colors.text.muted};
    font-size: 1.1rem;
  }
`;

const Section = styled(motion.section)`
  margin: ${props => props.theme.spacing.xxl} 0;
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 2.5rem;
    margin-bottom: ${props => props.theme.spacing.xl};
  }
`;

const VisionMissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.background.light};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: left;

  h3 {
    color: ${props => props.theme.colors.primary.main};
    font-size: 1.8rem;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const TestimonialSection = styled(Section)`
  background: ${props => props.theme.colors.background.light};
  padding: ${props => props.theme.spacing.xxl} 0;
  margin: ${props => props.theme.spacing.xxl} -${props => props.theme.spacing.lg};
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text.muted};
    font-style: italic;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    h4 {
      color: ${props => props.theme.colors.text.secondary};
      margin-bottom: ${props => props.theme.spacing.xs};
    }

    p {
      color: ${props => props.theme.colors.text.muted};
      font-size: 0.9rem;
      margin: 0;
      font-style: normal;
    }
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const About = () => {
  return (
    <AboutContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero>
        <motion.h1 variants={itemVariants}>About Us</motion.h1>
        <motion.p variants={itemVariants}>
          We're a team of passionate tech enthusiasts dedicated to transforming businesses through innovative IT solutions.
        </motion.p>
      </Hero>

      <Stats>
        <motion.div variants={itemVariants}>
          <h2>200+</h2>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2>50+</h2>
          <p>Team Members</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2>15+</h2>
          <p>Years Experience</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2>100%</h2>
          <p>Client Satisfaction</p>
        </motion.div>
      </Stats>

      <Section variants={containerVariants}>
        <motion.h2 variants={itemVariants}>Our Vision & Mission</motion.h2>
        <VisionMissionGrid>
          <Card
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
          >
            <h3>Vision</h3>
            <p>
              To be the leading force in digital transformation, empowering businesses 
              worldwide with innovative technology solutions that drive growth and success 
              in the digital age.
            </p>
          </Card>
          <Card
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
          >
            <h3>Mission</h3>
            <p>
              To deliver cutting-edge IT solutions that solve complex business challenges, 
              foster innovation, and create lasting value for our clients through 
              expertise, dedication, and continuous improvement.
            </p>
          </Card>
        </VisionMissionGrid>
      </Section>

      <TestimonialSection variants={containerVariants}>
        <motion.h2 variants={itemVariants}>What Our Clients Say</motion.h2>
        <TestimonialCard
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            "ByteSpark has been instrumental in our digital transformation journey. 
            Their expertise and dedication to delivering high-quality solutions have 
            helped us achieve our business goals and stay ahead of the competition."
          </p>
          <Author>
            <img src="/testimonials/client1.jpg" alt="Client" />
            <div>
              <h4>Michael Anderson</h4>
              <p>CEO, TechCorp Solutions</p>
            </div>
          </Author>
        </TestimonialCard>
      </TestimonialSection>
    </AboutContainer>
  );
};

export default About; 