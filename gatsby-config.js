/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    presentation: {
      hi: 'Olá, Eu sou o',
      name: 'Crisnaldo Carvalho',
      title: 'Desenvolvedor full stack JavaScript com experiência em todos os aspectos do ciclo de vida de desenvolvimento de software',
      socialMedia: [
        {
          name: 'github',
          link: 'https://github.com/CrisnaldoSantos'
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/crisnaldo-carvalho-76741212b/'
        },
      ]
    },
    aboutMe:{
      title:'Desenvolvedor com 03 anos de experiência',
      description:`Desenvolvedor web full stack com 3 anos de experiência com NodeJS e ReactJS.
      Tenho experiência em todos os aspectos de desenvolvimento de software, incluindo análise de requisitos, design, desenvolvimento, testes, suporte e produção.
      Possuo bom relacionamento interpessoal, capacidade de liderança e gosto de compartilhar conhecimento com meus colegas de trabalho.`,
      photoUrl:'https://avatars3.githubusercontent.com/u/45441190?s=400&u=41ad579bcaaf3c42cb04d9263cd123427866b6f7&v=4',
    },
    jobs:[
      {
        date: '01/2020 - atual',
        company: 'Instituto de Pesquisas em Tecnologia e Inovação - IPTI',
        role: 'Desenvolvedor',
        description: `<p>Atuo na criação de módulos para software TAG desenvolvendo
        novas features e correções de bugs.</p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, NodeJS, ReactJS, MongoDB.</p>`
      },
      {
        date: '05/2019 - 12/2019',
        company: 'Instituto de Pesquisas em Tecnologia e Inovação - IPTI',
        role: 'Estagiário em desenvolvimento',
        description: `<p>Desenvolvimento de um módulo do software TAG, para gestão do Conselho Municipal da Criança e do Adolescente. </p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, NodeJS, ReactJS, MongoDB.</p>`
      },
    ],
    footerText: 'Fábrica de Código',
    homePage: {
      title: 'Página Inicial',
      img: 'https://images.unsplash.com/photo-1546464033-5b15cf1168f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800'
    },
    aboutPage: {
      title: 'Sobre',
      img: 'https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800'
    }
  },
  plugins: [
    {
      resolve:`gatsby-plugin-sass`,
      options:{
        postCssPlugins: [
          require("tailwindcss"),
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ]
}
