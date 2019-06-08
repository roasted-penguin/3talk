import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/view/mainPage'
import AddRoom from '@/components/view/AddRoom'
import JoinRoom from '@/components/view/JoinRoom'
import ChatRoom from '@/components/view/ChatRoom'
import IndexPage from '@/components/view/IndexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/add-room',
      name: 'AddRoom',
      component: AddRoom
    },
    {
      path: '/join-room/:id',
      name: 'JoinRoom',
      component: JoinRoom
    },
    {
      path: '/chat-room/:id/:nickname',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }

  ]
})
