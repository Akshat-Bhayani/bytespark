import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TeamContainer = styled.section`
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary.main},
      ${props => props.theme.colors.primary.dark}
    );
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
`;

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
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
      transparent 30%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 70%
    );
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const TeamName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: ${props => props.theme.colors.primary.main};
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const TeamBio = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ExperienceSection = styled.div`
  margin-bottom: 1.5rem;
`;

const ExperienceTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const CompanyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const CompanyBadge = styled.span`
  background: ${props => props.theme.colors.primary.lighter};
  color: ${props => props.theme.colors.primary.main};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const SkillsSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const SkillBadge = styled.span`
  background: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.text.secondary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.primary.lighter};
`;

const ContactButton = styled(motion.button)`
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px ${props => props.theme.colors.primary.main}30;
  }
`;

const ExpandedCard = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ExpandedContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text.secondary};
  
  &:hover {
    color: ${props => props.theme.colors.text.primary};
  }
`;

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Akshat Bhayani',
    role: 'Co-Founder & Full Stack Engineer',
    initials: 'AB',
    bio: 'Passionate full-stack engineer with expertise in modern web technologies and cloud architecture. Experienced in building scalable applications from concept to deployment.',
    previousCompanies: ['Navi', 'Tekion', 'Goldman Sachs'],
    skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'TypeScript'],
    email: 'akshat@bytespark.com',
    detailedBio: 'Akshat brings over 5 years of experience in full-stack development, having worked on high-scale applications at top-tier companies. His expertise spans from frontend frameworks to cloud architecture, with a special focus on performance optimization and user experience.'
  },
  {
    id: 2,
    name: 'Samkit',
    role: 'Co-Founder & Senior Engineer',
    initials: 'SK',
    bio: 'Senior engineer with deep expertise in system design and backend architecture. Specialized in building robust, scalable solutions for enterprise clients.',
    previousCompanies: ['Navi', 'Tekion', 'Goldman Sachs'],
    skills: ['Java', 'Spring Boot', 'Microservices', 'Kubernetes', 'PostgreSQL', 'Redis', 'GCP'],
    email: 'samkit@bytespark.com',
    detailedBio: 'Samkit is a systems architect and senior engineer with extensive experience in building distributed systems at scale. His background includes developing financial technology solutions and implementing complex business logic for enterprise applications.'
  }
];

const PortfolioTeam: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<typeof teamMembers[0] | null>(null);

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

  const expandedVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    // <TeamContainer>
    //   <SectionHeader>
    //     <SectionTitle
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //     >
    //       Meet Our Team
    //     </SectionTitle>
    //     <SectionSubtitle
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.2 }}
    //       viewport={{ once: true }}
    //     >
    //       The engineers behind ByteSpark, bringing enterprise experience to every project
    //     </SectionSubtitle>
    //   </SectionHeader>

    //   <motion.div
    //     variants={containerVariants}
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, margin: "-100px" }}
    //   >
    //     <TeamGrid>
    //       {teamMembers.map((member) => (
    //         <TeamCard
    //           key={member.id}
    //           variants={itemVariants}
    //           whileHover={{ scale: 1.02 }}
    //           onClick={() => setExpandedMember(member)}
    //         >
    //           <AvatarContainer>
    //             <Avatar>
    //               {member.initials}
    //             </Avatar>
    //           </AvatarContainer>
              
    //           <TeamName>{member.name}</TeamName>
    //           <TeamRole>{member.role}</TeamRole>
    //           <TeamBio>{member.bio}</TeamBio>
              
    //           <ExperienceSection>
    //             <ExperienceTitle>Previous Companies</ExperienceTitle>
    //             <CompanyList>
    //               {member.previousCompanies.map((company, index) => (
    //                 <CompanyBadge key={index}>{company}</CompanyBadge>
    //               ))}
    //             </CompanyList>
    //           </ExperienceSection>
              
    //           <SkillsSection>
    //             <ExperienceTitle>Core Skills</ExperienceTitle>
    //             <SkillsList>
    //               {member.skills.slice(0, 4).map((skill, index) => (
    //                 <SkillBadge key={index}>{skill}</SkillBadge>
    //               ))}
    //               {member.skills.length > 4 && (
    //                 <SkillBadge>+{member.skills.length - 4} more</SkillBadge>
    //               )}
    //             </SkillsList>
    //           </SkillsSection>
              
    //           <ContactButton
    //             whileHover={{ scale: 1.05 }}
    //             whileTap={{ scale: 0.95 }}
    //           >
    //             View Full Profile
    //           </ContactButton>
    //         </TeamCard>
    //       ))}
    //     </TeamGrid>
    //   </motion.div>

    //   {/* Expanded Member Modal */}
    //   <AnimatePresence>
    //     {expandedMember && (
    //       <ExpandedCard
    //         initial="hidden"
    //         animate="visible"
    //         exit="exit"
    //         variants={expandedVariants}
    //         onClick={() => setExpandedMember(null)}
    //       >
    //         <ExpandedContent
    //           onClick={(e) => e.stopPropagation()}
    //           variants={expandedVariants}
    //         >
    //           <CloseButton onClick={() => setExpandedMember(null)}>
    //             ✕
    //           </CloseButton>
              
    //           <AvatarContainer>
    //             <Avatar>
    //               {expandedMember.initials}
    //             </Avatar>
    //           </AvatarContainer>
              
    //           <TeamName>{expandedMember.name}</TeamName>
    //           <TeamRole>{expandedMember.role}</TeamRole>
              
    //           <TeamBio>{expandedMember.detailedBio}</TeamBio>
              
    //           <ExperienceSection>
    //             <ExperienceTitle>Previous Companies</ExperienceTitle>
    //             <CompanyList>
    //               {expandedMember.previousCompanies.map((company, index) => (
    //                 <CompanyBadge key={index}>{company}</CompanyBadge>
    //               ))}
    //             </CompanyList>
    //           </ExperienceSection>
              
    //           <SkillsSection>
    //             <ExperienceTitle>Technical Skills</ExperienceTitle>
    //             <SkillsList>
    //               {expandedMember.skills.map((skill, index) => (
    //                 <SkillBadge key={index}>{skill}</SkillBadge>
    //               ))}
    //             </SkillsList>
    //           </SkillsSection>
              
    //           <ContactButton
    //             whileHover={{ scale: 1.05 }}
    //             whileTap={{ scale: 0.95 }}
    //             onClick={() => window.open(`mailto:${expandedMember.email}`)}
    //           >
    //             Contact {expandedMember.name.split(' ')[0]}
    //           </ContactButton>
    //         </ExpandedContent>
    //       </ExpandedCard>
    //     )}
    //   </AnimatePresence>
    // </TeamContainer>
    <></>
  );
};

export default PortfolioTeam;