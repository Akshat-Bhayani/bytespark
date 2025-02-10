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

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary.main};
  font-size: 1.1rem;
  padding: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.background.light};
    transform: translateX(-5px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.2;
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.muted};
  font-size: 1.1rem;
  margin-bottom: ${props => props.theme.spacing.xl};

  span {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Tag = styled.span`
  background: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.light};
    transform: translateY(-2px);
  }
`;

const FeaturedImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.large};
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text.primary};

  p {
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  h2 {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.8rem;
    margin: ${props => props.theme.spacing.xl} 0 ${props => props.theme.spacing.md};
  }

  blockquote {
    border-left: 4px solid ${props => props.theme.colors.primary.main};
    margin: ${props => props.theme.spacing.lg} 0;
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.background.light};
    border-radius: ${props => props.theme.borderRadius.medium};
    font-style: italic;
    color: ${props => props.theme.colors.text.muted};
  }
`;

// Icons
const CalendarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const AuthorIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
);

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
        <BackIcon /> Back to Blog
      </BackButton>

      <BlogHeader>
        <Title>{post.title}</Title>
        <MetaInfo>
          <span>
            <AuthorIcon />
            {post.author}
          </span>
          <span>•</span>
          <span>
            <CalendarIcon />
            {post.date}
          </span>
        </MetaInfo>
        <TagsContainer>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      </BlogHeader>

      <FeaturedImage
        src={post.image}
        alt={post.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      />

      <Content>
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Content>
    </BlogPostContainer>
  );
};

export default BlogPost; 