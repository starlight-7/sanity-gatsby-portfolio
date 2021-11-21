export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619aaac3281d3ac9b151e3a8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gd4mrxzf',
                  apiId: '79d4ed8c-5557-4267-9786-a08685313c80'
                },
                {
                  buildHookId: '619aaac389c930745dfa6763',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2zeiky54',
                  apiId: '9cda36e5-8266-4ad2-9199-c2212a4458c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/starlight-7/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2zeiky54.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
