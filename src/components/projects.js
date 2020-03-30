import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styles from './projects.module.scss';

import Section from './section';
import ProjectItem from './project-item';
//<div className={"flex content-center justify-center flex-wrap my-5"}>
const Projects = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            projects {
              description
              repository
              tecnologies
              title
            }
        }
      }
    }
  `)
    return (
        <Section Section id="projetos" title="Meus Projetos" className="bg-gray-200">
            <div className={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 my-5"}>
                {
                    data.site.siteMetadata.projects.map((project, index) => {
                        return (
                            <ProjectItem key={index} className={styles.project}
                                title={project.title}
                                description={project.description}
                                tecnologies={project.tecnologies}
                                repository={project.repository}
                                
                            />
                        )
                    })
                }
            </div>    
        </Section>
    )
}

export default Projects