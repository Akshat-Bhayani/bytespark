import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.light};
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.light};
  position: relative;
  padding-bottom: ${props => props.theme.spacing.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${props => props.theme.colors.primary.light};
  }
`;

const FooterLink = styled(motion.a)`
  color: ${props => props.theme.colors.text.light};
  text-decoration: none;
  opacity: 0.8;
  transition: ${props => props.theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.primary.light};
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.text.light};
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.light};
  opacity: 0.9;
  
  .icon {
    margin-top: 2px;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
  
  .content {
    line-height: 1.5;
  }
  
  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.primary.light};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.text.light};
  font-size: 1.5rem;
  transition: ${props => props.theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary.dark};

  &:hover {
    background: ${props => props.theme.colors.primary.light};
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: ${props => props.theme.spacing.xl} auto 0;
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Copyright = styled.p`
  opacity: 0.9;
  font-size: 0.9rem;
  margin: 0;
`;

// Social media icons as SVG components
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const EmailIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LocationIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.01-1.044-.015-2.05-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.086-.744.083-.729.083-.729 1.2.084 1.832 1.234 1.832 1.234 1.068 1.83 2.803 1.302 3.487.996.108-.775.418-1.302.76-1.602-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.118 3.176.77.841 1.233 1.912 1.233 3.222 0 4.61-2.804 5.624-5.476 5.92.43.37.813 1.102.813 2.222 0 1.604-.015 2.896-.015 3.289 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>ByteSpark</FooterTitle>
          <FooterText>
            Empowering ideas to evolve into impactful digital realities. / Crafting technology that gives life to your imagination.          </FooterText>
          <SocialLinks>
            {/* <SocialLink 
              href="https://facebook.com/bytespark" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FacebookIcon />
            </SocialLink> */}
            {/* <SocialLink 
              href="https://twitter.com/bytespark" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <TwitterIcon />
            </SocialLink> */}
            <SocialLink
              href="https://www.linkedin.com/company/109429917"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/thebytespark?igsh=MWxlZWdsdTZseGRtdQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href="https://github.com/theByteSpark"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Our Services</FooterTitle>
          <FooterLink href="#/services/web-development">Web Development</FooterLink>
          <FooterLink href="#/services/app-development">App Development</FooterLink>
          <FooterLink href="#/services/cloud-services">Cloud Services</FooterLink>
          <FooterLink href="#/services/uiux-design">UI/UX Design</FooterLink>
          <FooterLink href="#/services/ai-ml-services">AI/ML Services</FooterLink>
          <FooterLink href="#/services/seo-optimisation">SEO Services</FooterLink>
          <FooterLink href="#/services/digital-marketing">Digital Marketing</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="#/about">About</FooterLink>
          <FooterLink href="#/services">Services</FooterLink>
          <FooterLink href="#/blog">Blog</FooterLink>
          <FooterLink href="#/contact">Contact</FooterLink>
          {/* <FooterLink href="#/careers">Careers</FooterLink> */}
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <div className="icon">
                <EmailIcon />
              </div>
              <div className="content">contact@bytespark.com</div>
            </ContactItem>
            <ContactItem>
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="content">+91 9429232528</div>
            </ContactItem>
            <ContactItem>
              <div className="icon">
                <LocationIcon />
              </div>
              <div className="content">
                SSV Pearl, Gulmohar Enclave Rd, Opposite to Gulmohar Nest, Silver Springs Layout, Munnekollal, Bengaluru, Karnataka 560037
              </div>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <Copyright>&copy; 2025 ByteSpark. All rights reserved.</Copyright>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 