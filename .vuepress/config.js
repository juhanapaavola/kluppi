module.exports = {
    base: '/kluppi/',
    title: 'Kluppi',
    dest: 'docs',
    ga: 'UA-144246311-2',
    description: 'Mobile application to browse klubitus.org event feed',
    themeConfig: {
        logo: '/kluppi-512.png',
        lastUpdated: 'Last Updated',        
        nav: [
            { text: 'Privacy', link: '/privacy/privacy' },
        ],
        search: false,
    },
    head: [
        ['script', {}, 
        'var _iub = _iub || [];_iub.csConfiguration = {"lang":"en","siteId":1636663,"cookiePolicyId":85215248, "banner":{ "position":"float-bottom-center" }};'
        ],
        ['script', { src: "http://cdn.iubenda.com/cs/iubenda_cs.js"}],
        ['script', { src: "https://www.googletagmanager.com/gtag/js?id=UA-144246311-2"}],
        ['script', {},
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-144246311-2');"
        ]
    ],
    plugins: {      
        'seo': { 
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => '',
            tags: $page => $page.frontmatter.tags,
            twitterCard: _ => 'summary_large_image',
            type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        },
    },
}