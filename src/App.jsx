import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Vulnerabilities from './components/Vulnerabilities';
import Contact from './components/Contact';

function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Vulnerabilities />
            <Contact />
        </Layout>
    );
}

export default App;
