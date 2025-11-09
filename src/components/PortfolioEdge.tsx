import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EdgeContainer = styled.section`
  padding: 120px 2rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.background.main} 0%,
    ${props => props.theme.colors.primary.lighter}10 100%
  );
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`;

const EdgeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const LeftColumn = styled(motion.div)`
  @media (max-width: 968px) {
    order: 1;
  }
`;

const RightColumn = styled(motion.div)`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const EdgeTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.text.primary},
    ${props => props.theme.colors.primary.main}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const EdgeSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ValuesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ValueItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 968px) {
    transform: none;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ValueIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
`;

const ValueContent = styled.div`
  flex: 1;
`;

const ValueTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const ValueDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.5;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 500;
`;

const values = [
  {
    icon: '🏆',
    title: 'Proven Excellence',
    description: 'Track record of delivering high-impact solutions for Fortune 500 companies and innovative startups.'
  },
  {
    icon: '⚡',
    title: 'Rapid Execution',
    description: 'Agile development processes that get your product to market faster without compromising quality.'
  },
  {
    icon: '🔧',
    title: 'Technical Mastery',
    description: 'Deep expertise across modern tech stacks, from cloud architecture to AI implementation.'
  },
  {
    icon: '🎯',
    title: 'Business Focus',
    description: 'Code that drives results - we understand both technology and business objectives.'
  }
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

const PortfolioEdge: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <EdgeContainer>
      <EdgeContent>
        <LeftColumn
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <EdgeTitle variants={itemVariants}>
            Built by Engineers Who've Shipped at Scale
          </EdgeTitle>
          <EdgeSubtitle variants={itemVariants}>
            We're not just developers – we're engineers who've built systems handling millions of users 
            at companies like Navi, Tekion, and Goldman Sachs. We bring enterprise-grade expertise 
            to every project.
          </EdgeSubtitle>
          
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </LeftColumn>

        <RightColumn
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ValuesList>
            {values.map((value, index) => (
              <ValueItem
                key={index}
                variants={rightItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ValueIcon>
                  {value.icon}
                </ValueIcon>
                <ValueContent>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueContent>
              </ValueItem>
            ))}
          </ValuesList>
        </RightColumn>
      </EdgeContent>
    </EdgeContainer>
  );
};

export default PortfolioEdge;