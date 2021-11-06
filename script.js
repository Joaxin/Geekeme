/* globals Docute */

const NeteaseMusic = {
  // Plugin name
  name: 'NeteaseMusic',
  extend(api) {
    api.processMarkdown(text => {
      let musicbox = text.match(/\{N\d+\}/g);
      const player_pre = "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width=100% height=86 src='//music.163.com/outchain/player?type=2&id=";
      let player_after = "";
      if (musicbox) {
        musicbox.forEach(function (item, idx) {
          player_after = item.replace(/(^\s*)|(\s*$)/g, "").replace(/[{N}]/g, '') + "&auto=1&height=66'></iframe>"
          text = text.replace(item, player_pre + player_after)
        })
      }
      return text
    })
  }
}

new Docute({
  title: 'Geekeme',
  target: '#docute',
  sourcePath: './',
  layout: 'wide',
  plugins: [
    NeteaseMusic
  ],
  nav: [
    {
      title: 'Home',
      link: '/'
    }
  ],
  sidebar: [
    {
      title: '编程开发',
      children: [
        {
          title: '编程语言',
          link: '/coding/coding_/coding_langs'
        },
        {
          title: 'WEB',
          link: '/coding/coding_/coding_web'
        },
        {
          title: '数据库',
          link: '/coding/coding_/coding_database'
        },
        {
          title: '人工智能',
          link: '/coding/coding_/coding_ai'
        },
        {
          title: '名词解释',
          link: '/coding/coding_/coding_words'
        },
        {
          title: '编程书籍',
          link: '/coding/coding_/coding_books'
        },
        {
          title: '编程社区',
          link: '/coding/coding_/coding_community'
        },
        {
          title: '编程故事',
          link: '/coding/coding_/coding_stories'
        },
        {
          title: '编程人物',
          link: '/coding/coding_/coding_people'
        },
        {
          title: '编程项目',
          link: '/coding/coding_/coding_projects'
        },
      ]
    },
    {
      title: '编程人生',
      children: [
        {
          title: '编程Bugs',
          link: '/coding/coding_life/coding_bugs'
        },
        {
          title: '编程文化',
          link: '/coding/coding_life/coding_culture'
        },
        {
          title: '编程生活',
          link: '/coding/coding_life/coding_life'
        },
        {
          title: '编程情感',
          link: '/coding/coding_life/coding_relationship'
        },
        {
          title: '互联网公司',
          link: '/coding/coding_life/coding_company'
        },
        {
          title: '工作',
          link: '/coding/coding_life/coding_work'
        },
        {
          title: '新闻',
          link: '/coding/coding_life/coding_news'
        },
        {
          title: '编程笑话',
          link: '/coding/coding_life/coding_jokes'
        },
      ]
    },
    {
      title: '设计',
      children: [
        {
          title: '关于设计',
          link: '/design/design'
        },
        {
          title: '设计软件',
          link: '/design/design_apps'
        },
      ]
    },
    {
      title: '电脑',
      children: [
        {
          title: '电脑',
          link: '/computer/computer'
        },
        {
          title: '手机',
          link: '/computer/computer_phone'
        },
        {
          title: '电脑系统',
          link: '/computer/computer_system'
        },
        {
          title: '电脑硬件',
          link: '/computer/computer_hardware'
        },
        {
          title: '软件应用',
          link: '/computer/computer_apps'
        },
        {
          title: '数码设备',
          link: '/computer/computer_digital'
        }
      ]
    },

    {
      title: '科学',
      children: [
        {
          title: '科学是什么',
          link: '/sci/sci'
        },
        {
          title: '科学笑话',
          link: '/sci/sci_jokes'
        },
        {
          title: '科学meme',
          link: '/sci/sci_meme'
        },
        {
          title: '科学情感',
          link: '/sci/sci_relatonship'
        },
        {
          title: '科学故事',
          link: '/sci/sci_stories'
        },
        {
          title: '数学',
          link: '/sci/scientist_math'
        },
        {
          title: '数学笑话',
          link: '/sci/scientist_math_jokes'
        },
        {
          title: '生物学',
          link: '/sci/scientist_biology'
        },
        {
          title: '生物学笑话',
          link: '/sci/scientist_biology_jokes'
        },
        {
          title: '物理学',
          link: '/sci/scientist_physics'
        },
        {
          title: '物理学笑话',
          link: '/sci/scientist_physics_jokes'
        },
        {
          title: '化学',
          link: '/sci/scientist_chemistry'
        },
        {
          title: '化学笑话',
          link: '/sci/scientist_chemistry_jokes'
        },
        {
          title: '地理',
          link: '/sci/scientist_geo'
        },
        {
          title: '地理笑话',
          link: '/sci/scientist_geo_jokes'
        },
      ]
    },
    // An external link
    {
      title: 'GitHub',
      link: 'https://github.com/Joaxin'
    }
  ]
})