import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageHeading, PageSubheading, pageHeadingAnimation, pageSubheadingAnimation } from '../styles/PageHeading';

const ContactContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.lg};
`;

const ContactInfo = styled(motion.div)`
  h2 {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: 1.8rem;
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const InfoSection = styled(motion.div)`
  margin-top: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.light};
  border-radius: ${props => props.theme.borderRadius.medium};
  
  h3 {
    color: ${props => props.theme.colors.primary.main};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const MapContainer = styled.div`
  margin-top: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  iframe {
    filter: grayscale(20%);
    transition: filter 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-top: 100px;
`;

const Input = styled(motion.input)<{ $hasError?: boolean }>`
  padding: ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.$hasError ? '#e74c3c' : 'transparent'};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: 1rem;
  background: ${props => props.theme.colors.background.light};
  transition: ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#e74c3c' : props.theme.colors.primary.main};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled(motion.textarea)`
  padding: ${props => props.theme.spacing.md};
  border: 2px solid transparent;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: 1rem;
  min-height: 150px;
  background: ${props => props.theme.colors.background.light};
  transition: ${props => props.theme.transitions.default};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.light};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.state.hover};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
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
    transition: {
      duration: 0.5
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
    Number: '',
  });

  const [errors, setErrors] = useState({
    Email: '',
    Number: '',
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    // Real-time validation
    if (field === 'Email') {
      if (value && !validateEmail(value)) {
        setErrors({ ...errors, Email: 'Please enter a valid email address' });
      } else {
        setErrors({ ...errors, Email: '' });
      }
    }
    
    if (field === 'Number') {
      if (value && !validatePhone(value)) {
        setErrors({ ...errors, Number: 'Please enter a valid phone number' });
      } else {
        setErrors({ ...errors, Number: '' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate before submission
    const emailValid = validateEmail(formData.Email);
    const phoneValid = validatePhone(formData.Number);
    
    if (!emailValid || !phoneValid) {
      setErrors({
        Email: !emailValid ? 'Please enter a valid email address' : '',
        Number: !phoneValid ? 'Please enter a valid phone number' : '',
      });
      return;
    }
    const apiEndPoint = 'https://script.google.com/macros/s/AKfycbyrlWED2ew2FIQMgMjoiIGlmfN7tE1bl_78wnVD5ErL7HjGnhKLosy_-a0SkKKngzVJDg/exec';
    const formD = new FormData();
    formD.append('Name',formData.Name);
    formD.append('Email',formData.Email);
    formD.append('Subject',formData.Subject);
    formD.append('Message',formData.Message);
    formD.append('PhoneNumber',formData.Number);
    formD.append('Date',new Date().toLocaleDateString())
    setFormData({
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
      Number: '',
    });
    try {
      const response = await fetch(apiEndPoint, {
        method: 'POST',
        body: formD,
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      const data = await response.json();
      setFormData({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
        Number: '',
      });
      console.log('data',data);
    } catch (err) {
      console.log(err instanceof Error ? err.message : 'Something went wrong');
    } 
  }; 

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   try{
  //   }catch(error){

  //   }
  //   console.log(formData);
  // };

  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <PageHeading {...pageHeadingAnimation}>
        Get in Touch
      </PageHeading>
      <PageSubheading {...pageSubheadingAnimation}>
        Have a question or want to work together? We'd love to hear from you.
      </PageSubheading>
      
      <ContactGrid>
      <ContactInfo style={{ marginTop: '45px' }}>
                    <InfoSection variants={itemVariants}>
            <h3>Our Office</h3>
            <p>506, Sumeru Prime</p>
            <p>Bengaluru, Karnataka</p>
            <p>Pin: 560001</p>
          </InfoSection>

          <InfoSection variants={itemVariants}>
            <h3>Get in Touch</h3>
            <p>Email: hello@bytespark.in</p>
            <p>Phone: +91 9876543210</p>
          </InfoSection>

          <InfoSection variants={itemVariants}>
            <h3>Location</h3>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ByteSpark Office Location"
              />
            </MapContainer>
          </InfoSection>
        </ContactInfo>

        <Form 
          onSubmit={handleSubmit}
          variants={containerVariants}
          id = 'form'
        >
          <InputGroup>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.Name}
              onChange={(e) => handleInputChange('Name', e.target.value)}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
            />
          </InputGroup>
          
          <InputGroup>
            <Input
              type="text"
              placeholder="Your Number"
              value={formData.Number}
              onChange={(e) => handleInputChange('Number', e.target.value)}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              $hasError={!!errors.Number}
            />
            {errors.Number && <ErrorMessage>{errors.Number}</ErrorMessage>}
          </InputGroup>
          
          <InputGroup>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.Email}
              onChange={(e) => handleInputChange('Email', e.target.value)}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              $hasError={!!errors.Email}
            />
            {errors.Email && <ErrorMessage>{errors.Email}</ErrorMessage>}
          </InputGroup>
          
          <InputGroup>
            <Input
              type="text"
              placeholder="Subject"
              value={formData.Subject}
              onChange={(e) => handleInputChange('Subject', e.target.value)}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
            />
          </InputGroup>
          
          <InputGroup>
            <TextArea
              placeholder="Your Message"
              value={formData.Message}
              onChange={(e) => handleInputChange('Message', e.target.value)}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
            />
          </InputGroup>
          
          <SubmitButton
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </Form>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact; 