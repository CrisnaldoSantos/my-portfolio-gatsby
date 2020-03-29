import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Section from './section';
import ProjectItem from './project-item';

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
        <Section Section id="projetos" title="Meus Projetos" className="bg-gray-100">
            <div className="relative my-5">
                <div className={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                
                {
                    data.site.siteMetadata.projects.map((project, index) => {
                        return (
                            <ProjectItem key={index} className="shadow"
                                title={project.title}
                                description={project.description}
                                tecnologies={project.tecnologies}
                                repository={project.repository}
                                
                            />
                        )
                    })
                }
                </div>
            </div>
        </Section>
    )
}

export default Projects

/*export default ()=>
    <Section id="projetos" title="Meus Projetos" className="bg-gray-100">
        <div className={styles.projectSection}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectItem  className="shadow"
                    title="KinemaApp" 
                    description="Front end construído em React Js, do software Kinema, que tem por objetivo registrar filmes que o usuário pretende assistir."
                    tecnologies="ReactJS, NodeJS,PsotgreSQL"
                    repository="https://github.com/CrisnaldoSantos/kinema-web"
                    produtionLink="https://kinema-app.herokuapp.com/"
                />
                <ProjectItem  className="shadow"
                    title="KinemaApp" 
                    description="Front end construído em React Js, do software Kinema, que tem por objetivo registrar filmes que o usuário pretende assistir."
                    tecnologies="ReactJS, NodeJS,PsotgreSQL"
                    repository="https://github.com/CrisnaldoSantos/kinema-web"
                    produtionLink="https://kinema-app.herokuapp.com/"
                />
                <ProjectItem  className="shadow"
                    title="KinemaApp" 
                    description="Front end construído em React Js, do software Kinema, que tem por objetivo registrar filmes que o usuário pretende assistir."
                    tecnologies="ReactJS, NodeJS,PsotgreSQL"
                    repository="https://github.com/CrisnaldoSantos/kinema-web"
                    produtionLink="https://kinema-app.herokuapp.com/"
                />
                <ProjectItem  className="shadow"
                    title="KinemaApp" 
                    description="Front end construído em React Js, do software Kinema, que tem por objetivo registrar filmes que o usuário pretende assistir."
                    tecnologies="ReactJS, NodeJS,PsotgreSQL"
                    repository="https://github.com/CrisnaldoSantos/kinema-web"
                    produtionLink="https://kinema-app.herokuapp.com/"
                />
                <ProjectItem  className="shadow"
                    title="KinemaApp" 
                    description="Front end construído em React Js, do software Kinema, que tem por objetivo registrar filmes que o usuário pretende assistir."
                    tecnologies="ReactJS, NodeJS,PsotgreSQL"
                    repository="https://github.com/CrisnaldoSantos/kinema-web"
                    produtionLink="https://kinema-app.herokuapp.com/"
                />
            </div>
        </div>
    </Section>*/