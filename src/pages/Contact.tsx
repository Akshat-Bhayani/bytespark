import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import {
  PageHeading,
  PageSubheading,
  pageHeadingAnimation,
  pageSubheadingAnimation,
} from '../styles/PageHeading';

const ContactContainer = styled(motion.div)`
  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(p) => p.theme.spacing.lg};
  margin-top: ${(p) => p.theme.spacing.xl};
`;

const InfoCard = styled(motion.div)`
  background: ${(p) => p.theme.colors.background.light};
  border-radius: ${(p) => p.theme.borderRadius.medium};
  padding: 1rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid ${(p) => p.theme.colors.primary.main}10;
  position: relative;

  h3 {
    color: ${(p) => p.theme.colors.primary.main};
    font-weight: 700;
    margin-bottom: ${(p) => p.theme.spacing.sm};
  }

  p {
    color: ${(p) => p.theme.colors.text.muted};
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
    display: inline-block;
  }

  .copy-icon {
    position: absolute;
    top: ${(p) => p.theme.spacing.md};
    right: ${(p) => p.theme.spacing.md};
    cursor: pointer;
    color: ${(p) => p.theme.colors.primary.main};
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const FormCard = styled(motion.div)`
  background: ${(p) => p.theme.colors.background.light};
  padding: ${(p) => p.theme.spacing.xl};
  border-radius: ${(p) => p.theme.borderRadius.medium};
  box-shadow: 0 8px 30px rgba(2, 6, 23, 0.06);
  margin: ${(p) => p.theme.spacing.xxl} auto 0 auto;
  width: 55%;
  min-width: 320px;

  @media (max-width: 768px) {
    width: 90%;
  }

  h3 {
    text-align: center;
    color: ${(p) => p.theme.colors.primary.dark};
    margin-bottom: ${(p) => p.theme.spacing.md};
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.md};
`;

const Input = styled(motion.input)<{ $hasError?: boolean }>`
  padding: ${(p) => p.theme.spacing.md};
  border: 1px solid ${(p) => (p.$hasError ? '#e74c3c' : 'rgba(0,0,0,0.08)')};
  border-radius: ${(p) => p.theme.borderRadius.medium};
  font-size: 1rem;
  background: ${(p) => p.theme.colors.background.light};
  transition: ${(p) => p.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${(p) => (p.$hasError ? '#e74c3c' : p.theme.colors.primary.main)};
    box-shadow: ${(p) => p.theme.shadows.small};
  }
`;

const TextArea = styled(motion.textarea)`
  padding: ${(p) => p.theme.spacing.md};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: ${(p) => p.theme.borderRadius.medium};
  font-size: 1rem;
  min-height: 130px;
  resize: vertical;
  background: ${(p) => p.theme.colors.background.light};

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.primary.main};
    box-shadow: ${(p) => p.theme.shadows.small};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${(p) => p.theme.colors.primary.main};
  color: ${(p) => p.theme.colors.text.light};
  padding: ${(p) => p.theme.spacing.md} ${(p) => p.theme.spacing.lg};
  border: none;
  border-radius: ${(p) => p.theme.borderRadius.full};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${(p) => p.theme.transitions.default};
  align-self: center;
  width: 50%;

  &:hover {
    background: ${(p) => p.theme.colors.state.hover};
    transform: translateY(-2px);
    box-shadow: ${(p) => p.theme.shadows.medium};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  font-weight: 500;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
    Number: '',
  });
  const [errors, setErrors] = useState({ Email: '', Number: '' });
  const [copied, setCopied] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) =>
    /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));

  const handleCopy = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'Email')
      setErrors({
        ...errors,
        Email: value && !validateEmail(value) ? 'Invalid email' : '',
      });
    if (field === 'Number')
      setErrors({
        ...errors,
        Number: value && !validatePhone(value) ? 'Invalid phone' : '',
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailValid = validateEmail(formData.Email);
    const phoneValid = validatePhone(formData.Number);
    if (!emailValid || !phoneValid) {
      setErrors({
        Email: !emailValid ? 'Invalid email' : '',
        Number: !phoneValid ? 'Invalid phone' : '',
      });
      return;
    }

    const formD = new FormData();
    Object.entries(formData).forEach(([k, v]) => formD.append(k, v));
    formD.append('Date', new Date().toLocaleDateString());

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyrlWED2ew2FIQMgMjoiIGlmfN7tE1bl_78wnVD5ErL7HjGnhKLosy_-a0SkKKngzVJDg/exec',
        { method: 'POST', body: formD }
      );
      setFormData({ Name: '', Email: '', Subject: '', Message: '', Number: '' });
      console.log('Message sent!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContactContainer initial="hidden" animate="visible" variants={containerVariants}>
      <PageHeading {...pageHeadingAnimation}>Get in Touch</PageHeading>
      <PageSubheading {...pageSubheadingAnimation}>
        We'd love to hear from you.
      </PageSubheading>

      {/* --- Info Cards --- */}
      <InfoGrid>
        <InfoCard variants={itemVariants}>
          <h3>Email</h3>
          <p>contact@bytespark.com</p>
          {copied !== 'email' && <Copy
            className="copy-icon"
            size={18}
            onClick={() => handleCopy('contact@bytespark.com', 'email')}
          />}
          {copied === 'email' && <small className="copy-icon" style={{ color: '#22c55e' }}>Copied!</small>}
        </InfoCard>

        <InfoCard variants={itemVariants}>
          <h3>Phone</h3>
          <p>+91 9274941231</p>
          {copied !== 'phone' && <Copy
            className="copy-icon"
            size={18}
            onClick={() => handleCopy('9274941231', 'phone')}
          />}
          {copied === 'phone' && <small className="copy-icon" style={{ color: '#22c55e' }}>Copied!</small>}
        </InfoCard>
      </InfoGrid>

      {/* --- Contact Form --- */}
      <FormCard variants={itemVariants}>
        <h3>Submit Your Query</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.Name}
            onChange={(e) => handleInputChange('Name', e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Your Number"
            value={formData.Number}
            onChange={(e) => handleInputChange('Number', e.target.value)}
            required
            $hasError={!!errors.Number}
          />
          {errors.Number && <ErrorMessage>{errors.Number}</ErrorMessage>}

          <Input
            type="email"
            placeholder="Your Email"
            value={formData.Email}
            onChange={(e) => handleInputChange('Email', e.target.value)}
            required
            $hasError={!!errors.Email}
          />
          {errors.Email && <ErrorMessage>{errors.Email}</ErrorMessage>}

          <Input
            type="text"
            placeholder="Subject"
            value={formData.Subject}
            onChange={(e) => handleInputChange('Subject', e.target.value)}
            required
          />

          <TextArea
            placeholder="Your Message"
            value={formData.Message}
            onChange={(e) => handleInputChange('Message', e.target.value)}
            required
          />

          <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </SubmitButton>
        </Form>
      </FormCard>
    </ContactContainer>
  );
};

export default Contact;
