import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  techStack: string[];
  image?: string;
  video?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Styled Components
const ProjectsSection = styled.section`
  padding: ${props => props.theme.spacing.xxxl} 0;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.background.main} 0%,
    ${props => props.theme.colors.background.light} 50%,
    ${props => props.theme.colors.background.main} 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};

  ${props => props.theme.breakpoints.mobile} {
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxxl};
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.2;

  ${props => props.theme.breakpoints.mobile} {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text.muted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xxxl};

  ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
    margin-top: ${props => props.theme.spacing.xl};
  }
`;

const ProjectCardWrapperLink = styled(motion.a)`
  background: ${props => props.theme.colors.background.main};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.default};
  position: relative;
  overflow: hidden;
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.theme.colors.background.gradient};
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.large};
    transform: translateY(-8px);
    text-decoration: none;
    color: inherit;
  }

  ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.lg};
  }
`;

const ProjectCardWrapperDiv = styled(motion.div)`
  background: ${props => props.theme.colors.background.main};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.default};
  position: relative;
  overflow: hidden;
  display: block;
  color: inherit;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.theme.colors.background.gradient};
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.large};
    transform: translateY(-8px);
  }

  ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.lg};
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.lg};
  transition: ${props => props.theme.transitions.default};
  overflow: hidden;
  position: relative;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  opacity: 0;

  &.visible {
    opacity: 1;
  }
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary.light} 0%,
    ${props => props.theme.colors.primary.main} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.light};
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  position: absolute;
  top: 0;
  left: 0;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.muted};
  line-height: 1.6;
  margin: 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.sm};
`;

const TechBadge = styled.span`
  background: ${props => props.theme.colors.primary.lighter};
  color: ${props => props.theme.colors.primary.dark};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.85rem;
  font-weight: 500;
`;



// Project data
const projectsData: Project[] = [
      {
    id: '4',
    title: 'AI Workflow',
    description: 'An intelligent workflow automation platform that streamlines business processes with AI-powered decision making and task management.',
    url: 'https://ai-workflow-automation-five.vercel.app/', // Add actual URL when available
    techStack: ['React', 'Node.js', 'AI/ML'],
    video: 'ai-workflow-project.mov' ,
    image: 'ai-workflow-project.png',
  },
    {
    id: '5',
    title: 'Society App',
    description: 'A comprehensive society management application for residential communities with features for maintenance, billing, and communication.',
    // url: '#', 
    techStack: ['React Native', 'Firebase', 'Node.js'],
    video: 'Society-app-project.mov',
    image: 'society-app-project.png',
  },
  {
    id: '1',
    title: 'Marine Compressor and Parts',
    description: 'A responsive static website for a marine equipment supplier, optimized for SEO and a clean industrial look.',
    url: 'https://marinecompressorandparts.com/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: 'marine-project.png',
  },
  {
    id: '2',
    title: 'Jainova Lifesciences',
    description: 'Corporate website for a pharmaceutical company showcasing research, product range, and scientific capabilities.',
    url: 'https://jainovalifesciences.com/',
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    image: 'jainova-project.png',
  },
  {
    id: '3',
    title: 'A.S. Dhruv & Co.',
    description: 'A professional, trust-focused static website for a financial and legal consultancy firm.',
    url: 'https://www.asdhruv.com/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: 'asdhruv-project.png',
  },

];

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageError, setImageError] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Load video metadata and show first frame
  React.useEffect(() => {
    if (videoRef.current && project.video) {
      const video = videoRef.current;
      video.load(); // Load the video metadata
      video.currentTime = 0; // Ensure we start at the beginning
    }
  }, [project.video]);

  const handleMouseEnter = () => {
    if (project.video && !videoError) {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          setVideoError(true);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (project.video && !videoError) {
      setShowVideo(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  // Check if URL is valid (not empty, not '#', not undefined)
  const hasValidUrl = project.url && project.url !== '#' && project.url.trim() !== '';

  const cardProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { 
      duration: 0.6,
      delay: index * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const cardContent = (
    <>
      <ProjectImageContainer>
        {/* Show image if available (always show first if both image and video exist) */}
        {project.image && !imageError && (
          <ProjectImage
            className={showVideo && project.video && !videoError ? 'hidden' : ''}
            src={`/img/${project.image}`}
            alt={`${project.title} - Website Screenshot`}
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Show video on hover if available */}
        {project.video && !videoError && (
          <ProjectVideo
            ref={videoRef}
            className={showVideo ? 'visible' : ''}
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            src={`/img/${project.video}`}
          />
        )}
        
        {/* Show placeholder if both image and video failed/unavailable */}
        {!project.image && !project.video && (
          <ProjectImagePlaceholder>
            {project.title} Screenshot
          </ProjectImagePlaceholder>
        )}
        
        {/* Show placeholder if image failed and no video */}
        {imageError && !project.video && (
          <ProjectImagePlaceholder>
            {project.title} Screenshot
          </ProjectImagePlaceholder>
        )}
        
        {/* Show placeholder if video failed and no image */}
        {videoError && !project.image && (
          <ProjectImagePlaceholder>
            {project.title} Screenshot
          </ProjectImagePlaceholder>
        )}
      </ProjectImageContainer>
      
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        {/* <ProjectDescription>{project.description}</ProjectDescription> */}
        
        {/* <TechStack>
          {project.techStack.map((tech, techIndex) => (
            <TechBadge key={techIndex}>{tech}</TechBadge>
          ))}
        </TechStack> */}
      </ProjectContent>
    </>
  );

  return hasValidUrl ? (
    <ProjectCardWrapperLink
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      {...cardProps}
    >
      {cardContent}
    </ProjectCardWrapperLink>
  ) : (
    <ProjectCardWrapperDiv
      {...cardProps}
    >
      {cardContent}
    </ProjectCardWrapperDiv>
  );
};

// Main Projects Component
const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Work
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            A glimpse of the digital experiences we've built for our clients.
          </Subtitle>
        </Header>
        
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;