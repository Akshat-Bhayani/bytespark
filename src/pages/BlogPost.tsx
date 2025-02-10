import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogs';

const BlogPostContainer = styled(motion.article)`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin: ${props => props.theme.spacing.lg} 0;
`;

const BlogMeta = styled.div`
  color: ${props => props.theme.colors.text.muted};
  margin: ${props => props.theme.spacing.md} 0;
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
`;

const TagContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
  justify-content: center;
  margin: ${props => props.theme.spacing.md} 0;
`;

const Tag = styled.span`
  background: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.9rem;
`;

const BlogContent = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.colors.text.primary};
  
  p {
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: ${props => props.theme.spacing.xl};
  left: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.light};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-weight: 500;
  transition: ${props => props.theme.transitions.default};
  box-shadow: ${props => props.theme.shadows.medium};

  &:hover {
    background: ${props => props.theme.colors.state.hover};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  @media (max-width: 768px) {
    position: absolute;
    top: ${props => props.theme.spacing.lg};
    left: ${props => props.theme.spacing.md};
  }
`;

const BlogPost = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === blogId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogPostContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ← Back
      </BackButton>

      <BlogHeader>
        <h1>{post.title}</h1>
        <BlogMeta>
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </BlogMeta>
        <TagContainer>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </BlogHeader>

      <BlogImage src={post.image} alt={post.title} />
      
      <BlogContent>
        <p>{post.content}</p>
      </BlogContent>
    </BlogPostContainer>
  );
};

export default BlogPost; 