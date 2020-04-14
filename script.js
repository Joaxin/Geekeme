/* globals Docute */

new Docute({
  title: 'Geekeme',
  target: '#docute',
  sourcePath: './',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
  ],
  sidebar: [
    {
      title: '头脑风暴',
      link: '/brain_storm'
    },
    {
      title: '设计',
      link: '/design'
    },
    {
      title: '编程',
      children: [
        {
          title: 'Coding',
          link: '/coding'
        },
        {
          title: '语言',
          link: '/coding_langs'
        },
        {
          title: 'WEB',
          link: '/coding_web'
        },
        {
          title: 'AI',
          link: '/coding_ai'
        },
        {
          title: 'Bugs',
          link: '/coding_bugs'
        },
        {
          title: '文化',
          link: '/coding_culture'
        },
        {
          title: '新闻',
          link: '/coding_news'
        },
        {
          title: '表达',
          link: '/coding_exp'
        },
        {
          title: '笑话',
          link: '/coding_jokes'
        },
        {
          title: '故事',
          link: '/ coding_stories'
        },
       
      ]
    },
    {
      title: '电脑',
      children: [
        {
          title: '系统',
          link: '/computer_system'
        },
        {
          title: '使用',
          link: '/computer_use'
        }
      ]
    },
    {
      title: '行业',
      children: [
        {
          title: '公司',
          link: '/industry_it_company'
        },
        {
          title: '学科',
          link: '/industry_subjects'
        }
      ]
    },
    {
      title: '科学',
      children: [
        {
          title: '科学是什么',
          link: '/scientist'
        },
        {
          title: '生物',
          link: '/scientist_biology'
        },
        {
          title: '物理',
          link: '/scientist_physics'
        },
        {
          title: '表达',
          link: '/scientist_words'
        },
      ]
    },
  ]
})