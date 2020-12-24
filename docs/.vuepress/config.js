module.exports = {
    "title": "Bingo's Blog",
    "description": "Stay Hungry, Stay Foolish.",
    "dest": "dist",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        [
            "script",
            {
                "type": "text/javascript",
                "src": "/js/index.js"
            }
        ],
    ],
    "theme": "reco",
    "locales": {
        '/': {
            "lang": "zh-CN"
        }
    },
    "themeConfig": {
        "nav": [{
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "联系",
                "icon": "reco-message",
                "items": [{
                        "text": "About me",
                        "link": "/views/about/index.html",
                        "icon": "reco-message"
                    },
                    {
                        "text": "GitHub",
                        "link": "https://github.com/bingozb",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "friendLink": [{
                "title": "jschen",
                "desc": "My brother ccc, work at fontend with javascript.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://blog.jschen.cc"
            },
            {
                "title": "SubinVane",
                "desc": "My brother vane, work at android.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "http://blog.vane.ren/"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "sidebar": "auto",
        "lastUpdated": "Last Updated",
        "author": "Bingo",
        "authorAvatar": "/avatar.jpg",
        "record": "粤ICP备2020118046号",
        "recordLink": "http://beian.miit.gov.cn",
        "cyberSecurityRecord": "粤公网安备 44030602005238号",
        "cyberSecurityLink": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602005238",
        "startYear": "2016",
        "valineConfig": {
            "appId": 'MVB253wQxSr8tjJKCFV2CkEc-gzGzoHsz',
            "appKey": "ouOVdwfnrloaxYNjXvkouAix"
        },
        "noFoundPageByTencent": false,
        "mode": "auto", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        "modePicker": true, // 默认 true，false 不显示模式调节按钮，true 则显示
        "subSidebar": "auto"
    },
    "markdown": {
        "lineNumbers": true
    }
}