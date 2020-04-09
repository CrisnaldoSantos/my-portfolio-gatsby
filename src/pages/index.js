import React from "react"
import Header from "../components/header";
import About from "../components/about";
import Jobs from "../components/jobs";
import Container from '../components/container';
import SEO from '../components/seo';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Footer from '../components/footer';

//import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ data }) =>
<>
    <SEO title="Portfólio" />
    <Container>
      <Header/>
      <About/>
      <Jobs/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </Container>
</>
