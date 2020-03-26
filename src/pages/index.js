import React from "react"
import Header from "../components/header";
import About from "../components/about";
import Jobs from "../components/jobs";
import Container from '../components/container';

export default ({ data }) =>
    <Container>
      <Header/>
      <About/>
      <Jobs/>
    </Container>

