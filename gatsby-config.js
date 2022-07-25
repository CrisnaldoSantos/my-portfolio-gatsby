/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:`Crisnaldo Carvalho`,
    description:`My web portfolio`,
    author:`Crisnaldo Carvalho`,
    siteUrl:`https://crisnaldocarvalho.com.br`,
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
      title:'Desenvolvedor Full Stack',
      description:`Desenvolvedor web full stack com experiência com NodeJS e ReactJS.
      Tenho experiência em todos os aspectos de desenvolvimento de software, incluindo análise de requisitos, design, desenvolvimento, testes, suporte e produção.
      Possuo bom relacionamento interpessoal, capacidade de liderança e gosto de compartilhar conhecimento com meus colegas de trabalho.`,
      photoUrl:'https://avatars3.githubusercontent.com/u/45441190?s=400&u=41ad579bcaaf3c42cb04d9263cd123427866b6f7&v=4',
    },
    jobs:[
      {
        date: '04/2022 - Atual',
        company: 'Contabilizei',
        role: 'Desenvolvedor Sênior',
        description: `Desenvolvimento de produtos internos atuando com prioridade no front-end alocado no squad de CRM,
        utilizando ReactJS aplicado a Twilio, manutenção em sistemas com VueJS, aplicação de BFF, Google CLoud Computing, entre outras atribuições.
        <strong>Tecnologias: </strong>ReactJs, VueJS, Twilio, NodeJS, Typescript`
      },
      {
        date: '01/2021 - 04/2022',
        company: 'Ioasys',
        role: 'Desenvolvedor Front-end',
        description: `Desenvolvimento de diversas aplicações com Reactjs, sendo estas, com CRA, Nextjs e Gatsby
        <strong>Tecnologias: </strong>ReactJs,ContextAPI, ReduxToolkit, StyledComponents, Typescrip, Gatsby, NextJs`
      },
      {
        date: '10/2020 - 01/2021',
        company: 'GetInfo',
        role: 'Desenvolvedor Front-end',
        description: `Desenvolvimento de um painel em ReactJS administrativo para um banco digital.
        <strong>Tecnologias: </strong>ReactJs, Redux, StyledComponents`
      },
      {
        date: '01/2020 - atual',
        company: 'Instituto de Pesquisas em Tecnologia e Inovação - IPTI',
        role: 'Desenvolvedor',
        description: `Atuo na criação de módulos para software TAG desenvolvendo
        novas features e correções de bugs.<br>
        <strong>Tecnologias: </strong>HTML, CSS, JavaScript, NodeJS, ReactJS, MongoDB, NestJs.`
      },
      {
        date: '05/2019 - 12/2019',
        company: 'Instituto de Pesquisas em Tecnologia e Inovação - IPTI',
        role: 'Estagiário em desenvolvimento',
        description: `Desenvolvimento de um módulo do software TAG, para gestão do Conselho Municipal da Criança e do Adolescente.
        <br><strong>Tecnologias: </strong>HTML, CSS, JavaScript, NodeJS, ReactJS, MongoDB.`
      },
    ],
    projects:[
      {
        title:`My Weather`,
        description:`Front-end contruído em ReactJS que informa dados climáticos a partir da geolocalização do usuário. Os dados são consumidos da API OpenWeather.
        São detalhados o nome da cidade, clima geral, temperatura, sensação térmica, temperatura máxima, temperatura mínima, pressão e umidade. <a target="_blank "href="https://meuclima.netlify.app/">https://meuclima.netlify.app/</a> `,
        tecnologies:`ReactJS.`,
        repository:`https://github.com/CrisnaldoSantos/my-weather`,
        produtionLink:``,
      },
      {
        title:`Monitoramento Covid 19`,
        description:`Front-end desenvolvido com React e NextJS, apresentando dados globais e por países do covid 19, a aplicação também apresenta as recomendações do ministério da saúse. A aplicação foi hospedada no Heroku e pode ser acessada pela url : <a target="_blank "href="https://monitoramento-covid19.herokuapp.com/">https://monitoramento-covid19.herokuapp.com/</a>`,
        tecnologies:`NextJS.`,
        repository:`https://github.com/CrisnaldoSantos/monitoramento-covid-19`,
        produtionLink:``,
      },
      {
        title:`Be the Hero`,
        description:`Aplicação Full Stack, com front, back e mobile desenvolvida na semana Omnistack 11 realizada pela Rocketseat. A aplicação objetiva ajudar ONGs a encontrar "hérois" que colaborem com os casos cadastrados pela ONG. Na aplicação web, ocorre o registro da ONG e a mesma publica os seus casos. Na versão mobile, os casos de todas as ONGs jão listados ao público e o usuário pode entrar em contato com a ONG em questão.`,
        tecnologies:`NodeJS, ReactJS, React Native.`,
        repository:`https://github.com/CrisnaldoSantos/Omnistack-week11-rocketseat`,
        produtionLink:``,
      },
      {
        title:`Kinema App`,
        description:`Front-end do software Kinema, produzido para estudo durante curso na universidade. O software tem por objetivo registrar desejos de filmes para assistir. Interface construída em cima do CoreUI template. Aplicação disponível para acesso na url: <a target="_blank "href="https://kinema-app.herokuapp.com/">https://kinema-app.herokuapp.com</a>`,
        tecnologies:`ReactJS.`,
        repository:`https://github.com/CrisnaldoSantos/kinema-web`,
        produtionLink:`https://kinema-app.herokuapp.com/`,
      },
      {
        title:`Kinema Api`,
        description:`Back-end do software Kinema, produzido para estudo durante curso na universidade. O software tem por objetivo registrar desejos de filmes para assistir, marcar como assistido e manter um feedback. O back-end em AdonisJS, banco postgres. Autenticação com JWT`,
        tecnologies:`NodeJS, AdonisJS, PostgreSQL.`,
        repository:`https://github.com/CrisnaldoSantos/kinema-api`,
        produtionLink:`https://kinema-app.herokuapp.com/`,
      },
      {
        title:`Dev Radar`,
        description:`Aplicação construída durante a semana Omnistack 10 realiazada pela Rocketseat. Tem o objetivo de encontrar devs em um raio de 10km que trabalhem com determinadas tecnologias. Aplicação possui back-end, front-end para auto cadastro do dev, e mobile para encontrar os devs`,
        tecnologies:`NodeJS, ReactJS, ReactNative, MongoDB.`,
        repository:`https://github.com/CrisnaldoSantos/Omnistack-week10-rocketseat`,
        produtionLink:`https://kinema-app.herokuapp.com/`,
      },
      {
        title:`Tindev`,
        description:`Aplicação FullStack desenvolvida durante a semana OmniStack 8,provê um Tinder para desenvolvedores, onde o registro é feito através do usuário do Github, é possível dar likes e deslikes nos desenvolvedores registrados, e em caso de match ambos os desenvolvedores são notificados em tempo real!`,
        tecnologies:`NodeJS, ReactJS, ReactNative, MongoDB.`,
        repository:`https://github.com/CrisnaldoSantos/Omnistack-week08-rocketseat`,
        produtionLink:``,
      },
    ],
    skills:
    [
      {name: 'NodeJS', progress: 90},
      {name: 'ReactJS', progress: 95},
      {name: 'React Native', progress: 70},
      {name: 'GatsbyJS', progress: 90},
      {name: 'NextJS', progress: 88},
      {name: 'Html', progress: 100},
      {name: 'CSS', progress: 90},
      {name: 'JavaScript', progress: 100},
      {name: 'Bootstrap', progress: 95},
      {name: 'Java EE', progress: 85},
      {name: 'Docker', progress: 75},
      {name: 'NestJS', progress: 90},
    ],
    footerText: 'Crisnaldo Carvalho',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crisnaldo Carvalho`,
        short_name: `Crisnaldo Carvalho`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-advanced-sitemap`,
  ]
}
