import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { keyframes } from 'styled-components';

const AboutContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
  position: relative;
  padding: 4rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.primary.main}, transparent);
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    margin-bottom: ${props => props.theme.spacing.lg};
    background: linear-gradient(135deg, ${props => props.theme.colors.primary.main}, #60A5FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${props => props.theme.colors.primary.main}, transparent);
    }
  }
  
  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text.muted};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    position: relative;
    z-index: 1;
  }
`;

const ValuesSection = styled.section`
  margin: ${props => props.theme.spacing.xxl} 0;
  position: relative;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  position: relative;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }
  }

  h3 {
    color: ${props => props.theme.colors.primary.main};
    font-size: 1.5rem;
    margin-bottom: ${props => props.theme.spacing.md};
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background: ${props => props.theme.colors.primary.main};
      transition: width 0.3s ease;
    }
  }

  &:hover h3::after {
    width: 50px;
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
`;

const ProcessSection = styled.section`
  margin: ${props => props.theme.spacing.xxl} 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(96, 165, 250, 0.05));
  padding: ${props => props.theme.spacing.xxl};
  border-radius: ${props => props.theme.borderRadius.large};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.md};
  }
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 1;

  .step-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary.main}, #60A5FA);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${props => props.theme.spacing.md};
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transform: rotate(45deg);
      animation: shine 3s infinite;
    }
  }

  h3 {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.sm};
    font-size: 1.3rem;
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  margin: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
  position: relative;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

const TeamMember = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: ${props => props.theme.spacing.md};
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  h3 {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.xs};
    font-size: 1.3rem;
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    font-size: 0.9rem;
  }
`;

// Animation keyframes
const shine = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Innovating Digital Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          We're a team of passionate developers and designers crafting the future of web experiences. 
          Our fresh perspective and cutting-edge approach help businesses establish their digital presence 
          in the modern world.
        </motion.p>
      </Hero>

      <ValuesSection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #2563eb, #60A5FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Our Core Values
        </motion.h2>
        <ValuesGrid>
          <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Innovation</h3>
            <p>Pushing boundaries with cutting-edge technologies and creative solutions to deliver exceptional digital experiences.</p>
          </ValueCard>
          <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Excellence</h3>
            <p>Committed to delivering pixel-perfect designs and flawless code that exceeds client expectations.</p>
          </ValueCard>
          <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Collaboration</h3>
            <p>Working closely with clients to understand their vision and transform it into reality through seamless communication.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <ProcessSection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #2563eb, #60A5FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Our Process
        </motion.h2>
        <ProcessSteps>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>Deep dive into your business needs and objectives to create a tailored digital strategy.</p>
          </ProcessStep>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Crafting modern, user-centric interfaces that reflect your brand's identity and vision.</p>
          </ProcessStep>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number">3</div>
            <h3>Development</h3>
            <p>Building robust, scalable solutions using the latest technologies and best practices.</p>
          </ProcessStep>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number">4</div>
            <h3>Launch</h3>
            <p>Rigorous testing and seamless deployment followed by continuous support and optimization.</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <TeamSection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            marginBottom: '2rem',
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #2563eb, #60A5FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Meet Our Team
        </motion.h2>
        <TeamGrid>
          <TeamMember
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/team/developer.jpg" alt="Developer" />
            <h3>Prasham Shah</h3>
            <p>Developer</p>
          </TeamMember>
          <TeamMember
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/team/designer.jpg" alt="Developer" />
            <h3>Akshat Bhayani</h3>
            <p>Developer</p>
          </TeamMember>
          <TeamMember
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/team/manager.jpg" alt="Lead QA" />
            <h3>Devam Shanischara</h3>
            <p>Lead QA</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About; 