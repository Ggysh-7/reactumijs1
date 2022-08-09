
export default[//配置式路由 将此处全注释掉即为约定是路由，会自动生成pages下的页面路由
    { 
        path: '/login', 
        component: '@/pages/login/index' ,
        name:'登录',
        layout:false,
        hideInMenu:true
    },
    { 
        path: '/', 
        component: '@/pages/index' ,
        name:'首页',
        icon:'HomeOutlined'
    },
    { 
        path: '/test',
        component: '@/pages/test/index' ,
        name:'测试',
        icon:'FontSizeOutlined'
    },
    { 
        path: '/stu',
        name:'学员管理',
        icon:'UserOutlined',
        routes:[
            {
                path: '/stu/list',
                component: '@/pages/stu/list' ,
                name:'学员列表'
            }
        ]
    },
    { 
        path: '/drink',
        name:'分类管理',
        icon:'BranchesOutlined',
        routes:[
            {
                path: '/drink/list',
                component: '@/pages/drinkgory/drinklist' ,
                name:'分类列表'
            },
            {
                path: '/drink/pub',
                component: '@/pages/drinkgory/drinkpub' ,
                name:'分类发布'
            }
        ]
    },
    { 
        path: '/goods',
        name:'商品管理',
        icon:'CoffeeOutlined',
        routes:[
            {
                path: '/goods/list',
                component: '@/pages/goods/list' ,
                name:'商品列表'
            },
            {
                path: '/goods/pub',
                component: '@/pages/goods/pub' ,
                name:'商品发布'
            }
        ]
    },
    { 
        path: '/banner',
        name:'轮播管理',
        icon:'BoldOutlined',
        routes:[
            {
                path: '/banner/list',
                component: '@/pages/banner/list' ,
                name:'轮播列表'
            },
            {
                path: '/banner/pub',
                component: '@/pages/banner/pub' ,
                name:'轮播发布'
            },
            {
                path: '/banner/edit',
                component: '@/pages/banner/edit' ,
                name:'轮播编辑',
                hideInMenu:true
            }
        ]
    }
]