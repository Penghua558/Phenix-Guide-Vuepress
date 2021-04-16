
module.exports = {
    title: 'RST-I800 5G无人机',
    // base: '/Phenix-Guide-Vuepress/',
    plugins: ['@vuepress/back-to-top','@vuepress/medium-zoom'],
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Github', link: 'https://github.com/RobSenseTech/Phenix-Guide-Vuepress'},
            { text: 'Robsense', link: 'http://www.robsense.com'}
        ],
        sidebarDepth: 0, // optional, defaults to 1
        sidebar: [
            {
                title: '产品简介',   // Homepage
                path: '/'
            },
            {
                title: '产品硬件框架结构',   //Chapter 1
                path: '/chapter1/',   
            },
        ]
    },
    dest: '.vuepress/dist',
}

