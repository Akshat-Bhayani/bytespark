import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import ServiceDetail from './pages/ServiceDetail';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  margin-top: 70px;
  flex: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <AppContainer>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
