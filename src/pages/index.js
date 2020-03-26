import React from "react"
import Header from "../components/header";
import About from "../components/about";
import Jobs from "../components/jobs";
import Container from '../components/container';
import SEO from '../components/seo';

export default ({ data }) =>
<>
    <SEO title=" " />
    <Container>
      <Header/>
      <About/>
      <Jobs/>
    </Container>
</>
