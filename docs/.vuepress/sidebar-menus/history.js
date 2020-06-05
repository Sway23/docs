const getChildren = require('../getHistory')

module.exports = [
  {
    title: 'History',
    collapsable: false,
    sidebarDepth: 2,
    path: '/history/',
    children: [
      ...getChildren('docs/history'),
      {
        title: '3.3.x',
        collapsable: true,
        sidebarDepth: 2,
        path: '/history/',
        children: getChildren('docs/history', '3_2_3'),
      },
      {
        title: '3.2.x',
        collapsable: true,
        sidebarDepth: 2,
        path: '/history/',
        children: getChildren('docs/history', '3_2_x'),
      },
      {
        title: '3.1.x',
        collapsable: true,
        sidebarDepth: 2,
        path: '/history/',
        children: getChildren('docs/history', '3_1_x'),
      },
      {
        title: '3.0.x',
        collapsable: true,
        sidebarDepth: 2,
        path: '/history/',
        children: getChildren('docs/history', '3_0_x'),
      },
      {
        title: '2.x',
        collapsable: true,
        sidebarDepth: 2,
        path: '/history/',
        children: getChildren('docs/history', '2_x'),
      },
      {
        title: '1.x',
        collapsable: true,
        sidebarDepth: 2,
        path: '/history/',
        children: getChildren('docs/history', '1_x'),
      }
    ],
  },
  
]
