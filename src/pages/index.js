import React from "react"
import Header from "../components/header";
import About from "../components/about";
import Jobs from "../components/jobs";
import Container from '../components/container';
import SEO from '../components/seo';
import Projects from '../components/projects';

export default ({ data }) =>
<>
    <SEO title="Portfolio" />
    <Container>
      <Header/>
      <About/>
      <Jobs/>
      <Projects/>
    </Container>
</>
