import Vue from 'vue'
import Router from 'vue-router'



//导入需要用到的子组件
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'

import Detial from '../pages/Detial/Detial.vue'
import Content from '../pages/Content/Content.vue'
//Content还有三个子组件
import Music from '../pages/Content/Music.vue'
import Songlist from '../pages/Content/Songlist.vue'
import Mv from '../pages/Content/Mv.vue'


import Rank from '../pages/Rank/Rank.vue'
import List from '../pages/Rank/List.vue'
import Rindex from '../pages/Rank/Rindex.vue'
import My from '../pages/My/My.vue'


Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/content',
//       component: Content,
//       children: [{
//         path: 'content',
//         component: Content,
//         children: [{
//           path: 'music',
//           name: 'Music',
//           component: Music
//         },
//         {
//           path: '',
//           name: 'music',
//           component: Music
//         },
//         {
//           path: 'songlist',
//           name: 'Songlist',
//           component: Songlist
//         },
//         {
//           path: 'mv',
//           name: 'Mv',
//           component: Mv
//         }]
//       },
//       {
//         path: 'rank',
//         component: Rank,
//         children:[
//           {
//             path:'rindex',
//             name:'rindex',
//             component:Rindex
//           },
//           {
//             path:'list',
//             name:'list',
//             component:List
//           },
//           {
//             path:'',
//             name:'r-index',
//             component:Rindex
//           }
//         ]
//       },
//       {
//         path: 'my',
//         name: 'My',
//         component: My
//       },
//       {
//         path: '',
//         name: 'Content',
//         component: Content
//       }
//       ]
//     },
//     //默认路由中如果有子路由需要默认显示，要在跟路由下继续设置子跟路由
//     {
//       path: '/',
//       component: Content,
//       children: [
//         { path: '', component: Content, children: [{ path: '', name: 'index', component: Music }] }
//       ]
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/detial',
//       name: 'detial',
//       component: Detial
//     }
//   ],
//   mode: "history"
// })



export default new Router({
  routes: [
    {
      path: '/content',
      component: Content,
      children:[
        {
          path:'music',
          component:Music
        },
        {
          path:'mv',
          component:Mv
        },
        {
          path:'songlist',
          component:Songlist
        },
        {
          path:'',
          redirect:'music'
        }
      ]
      
    },
    {
      path:'/rank',
      component:Rank,
      children:[
        {
          path:'index',
          component:Rindex
        },
        {
          path:'list',
          component:List
        },
        {
          path:'',
          redirect:'index'
        }
      ]
    },
    {
      path:'/my',
      component:My
    },
    //默认路由中如果有子路由需要默认显示，要在跟路由下继续设置子跟路由
    {
      path: '/',
      redirect:'/content'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detial',
      name: 'detial',
      component: Detial
    }
  ],
  mode: "history"
  
})
