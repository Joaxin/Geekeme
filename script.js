/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        },
        {
          title: 'Design',
          link: '/design'
        },
        {
          title: 'Linux',
          link: '/linux'
        },
    // A dropdown menu
    {
      title: 'Community',
      children: [
        {
          title: 'Spectrum',
          link: 'https://spectrum.chat/your-community'
        },
        {
          title: 'Discord',
          link: 'https://discord.app/your-discord-server'
        }
      ]
    }
      ]
    }
  ]
})
